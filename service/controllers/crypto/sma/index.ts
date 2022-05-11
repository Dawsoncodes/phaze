import { Handler } from "express"
import moment from "moment"
import cache from "../../../cache"
import getAggregates from "./helpers/getAggregates"

const sma: Handler = async (req, res) => {
  try {
    const ticker: string = req.body.ticker
    const lowerSMA: number = req.body.lowerSMA
    const higherSMA: number = req.body.higherSMA

    const cacheKey = `${ticker}-${lowerSMA}-${higherSMA}`

    const cached = cache.get(cacheKey)

    if (cached) {
      res.json(cached)
      return
    }

    const today = moment().format("YYYY-MM-DD")
    const lowerSMADate = moment(today)
      .subtract(lowerSMA, "days")
      .format("YYYY-MM-DD") // eg. 2019-01-01
    const higherSMADate = moment(today)
      .subtract(higherSMA, "days")
      .format("YYYY-MM-DD") // eg. 2019-01-20

    const aggs = await getAggregates(moment(higherSMA).toDate(), ticker)

    const lowerSMAValue =
      aggs.results
        .filter(
          (result) =>
            moment(result.t).isSameOrAfter(lowerSMADate) &&
            moment(result.t).isSameOrBefore(today)
        )
        .reduce((acc, curr) => curr.c + acc, 0) / lowerSMA

    const higherSMAValue =
      aggs.results
        .filter(
          (result) =>
            moment(result.t).isSameOrAfter(higherSMADate) &&
            moment(result.t).isSameOrBefore(today)
        )
        .reduce((acc, curr) => curr.c + acc, 0) / higherSMA

    res.json({
      lowerSMAValue,
      higherSMAValue,
    })

    cache.set(cacheKey, { lowerSMAValue, higherSMAValue }, 60 * 60 * 24)
  } catch (error) {
    res.status(400).json({
      message: "Internal server error",
    })
  }
}

export default sma
