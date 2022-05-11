import { Router } from "express"
import vwap from "../../controllers/stocks/vwap"

const stocksRouter = Router()

stocksRouter.get("/vwap", vwap)

export default stocksRouter
