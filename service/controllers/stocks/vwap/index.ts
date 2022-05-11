import { Handler } from "express"
import moment from "moment"
import cache from "../../../cache"
import getGroupedData from "./helpers/getGroupedData"

const vwap: Handler = async (req, res) => {
  try {
    const cacheKey = "vwap"
    const cached = cache.get(cacheKey)

    if (cached) {
      res.json(cached)
      return
    }

    const previousDay = moment().subtract(1, "day").toDate()
    const data = await getGroupedData(previousDay)

    const results = data.results?.length
      ? data.results.filter((item) => item.c < item.vw)
      : []

    const response = {
      status: "OK",
      resultsCount: results.length,
      locale: "US",
      market: "STOCKS",
      TA: "price below VWAP",
      results,
    }

    res.json(response)

    cache.set(cacheKey, response, 60 * 60 * 24)
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({
        error: error.message,
      })
  }
}

export default vwap
