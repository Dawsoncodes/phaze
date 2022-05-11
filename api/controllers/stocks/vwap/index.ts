import { Handler } from "express"
import service from "../../../helpers/service"

interface Response {
  status: string
  resultsCount: number
  locale: string
  market: string
  TA: string
  results: {
    T: string
    v: number
    vw: number
    o: number
    c: number
    h: number
    l: number
    t: number
    n: number
  }[]
}

const vwap: Handler = async (req, res) => {
  try {
    const { data } = await service.get<Response>("/stocks/vwap")

    res.json(data)
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({
        error: error.message,
      })
  }
}

export default vwap
