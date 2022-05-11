import { Router } from "express"
import sma from "../../controllers/crypto/sma"
const cryptoRouter = Router()

cryptoRouter.post("/sma", sma)

export default cryptoRouter
