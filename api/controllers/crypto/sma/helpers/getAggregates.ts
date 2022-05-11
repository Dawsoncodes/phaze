import service from "../../../../helpers/service"

interface Response {
  higherSMAValue: number
  lowerSMAValue: number
}

const getAggregates = (ticker: string, lowerSMA: number, higherSMA: number) =>
  service
    .post<Response>("/crypto/sma", {
      ticker,
      lowerSMA,
      higherSMA,
    })
    .then((r) => r.data)

export default getAggregates
