import { Handler } from "express"
import getAggregates from "./helpers/getAggregates"

const sma: Handler = async (req, res) => {
  try {
    const { ticker, lowerSMA, higherSMA } = req.body

    if (!ticker || !lowerSMA || !higherSMA) {
      throw Error("Missing required fields")
    }

    if (
      typeof ticker !== "string" ||
      typeof lowerSMA !== "number" ||
      typeof higherSMA !== "number"
    ) {
      throw Error("Invalid input types")
    }

    if (!ticker.startsWith("X:")) {
      throw Error("Invalid ticker")
    }

    if (lowerSMA < 0 || higherSMA < 0) {
      throw Error("lowerSMA and higherSMA must be greater than 0")
    }

    if (higherSMA < lowerSMA) {
      throw Error("higherSMA must be greater than lowerSMA")
    }

    if (lowerSMA > 730 || higherSMA > 730) {
      throw Error("lowerSMA and higherSMA must be less than 730 days")
    }

    const { higherSMAValue, lowerSMAValue } = await getAggregates(
      ticker,
      lowerSMA,
      higherSMA
    )

    res.send({
      ticker,
      status: "OK",
      LSMA: lowerSMA,
      HSMA: higherSMA,
      result: {
        [`SMA_${lowerSMA}`]: Number(lowerSMAValue.toFixed(2)),
        [`SMA_${higherSMA}`]: Number(higherSMAValue.toFixed(2)),
        deathCross: lowerSMAValue < higherSMAValue,
        goldenCross: lowerSMAValue > higherSMAValue,
      },
    })
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({
        error: error.message,
      })
  }
}

export default sma
