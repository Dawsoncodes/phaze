import { POLYGON_API_KEY } from "../../../../constants"
import { GroupedResponse } from "../../../../types"
import axios from "axios"
import moment from "moment"

const getGroupedData = async (date: Date) => {
  const day = moment(date).format("YYYY-MM-DD")
  const link = `https://api.polygon.io/v2/aggs/grouped/locale/US/market/STOCKS/${day}?apiKey=${POLYGON_API_KEY}`

  return await axios.get<GroupedResponse>(link).then((r) => r.data)
}

export default getGroupedData
