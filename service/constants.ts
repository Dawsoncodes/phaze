if (!process.env.POLYGON_API_KEY) throw Error("POLIGON_API_KEY is not set")

export const POLYGON_API_KEY = process.env.POLYGON_API_KEY
