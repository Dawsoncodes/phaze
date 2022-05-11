import axios from "axios"
import moment from "moment"
import { POLYGON_API_KEY } from "../../../../constants"
import { AggsResponse } from "../../../../types"

const getAggregates = async (from: Date, ticker: string) => {
  const today = moment().format("YYYY-MM-DD")
  const fromDate = moment(from).format("YYYY-MM-DD")

  const link = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${fromDate}/${today}?sort=asc&apiKey=${POLYGON_API_KEY}`

  return await axios.get<AggsResponse>(link).then((r) => r.data)
}

export default getAggregates
