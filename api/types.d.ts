export interface AggsResponse {
  ticker: string
  status: string
  queryCount: number
  resultsCount: number
  adjusted: boolean
  results: {
    v: number
    vw: number
    o: number
    c: number
    h: number
    l: number
    t: number
    n: number
  }[]
  request_id: string
}

export interface GroupedResponse {
  queryCount: 8823
  resultsCount: 8823
  adjusted: true
  results?: {
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
  status: string
  request_id: string
  count: number
}
