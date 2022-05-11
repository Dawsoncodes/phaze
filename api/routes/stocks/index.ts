import { Router } from "express"
import vwap from "../../controllers/stocks/vwap"
import auth from "../../middlewares/auth"

const stocksRouter = Router()

stocksRouter.get("/vwap", auth, vwap)

export default stocksRouter
