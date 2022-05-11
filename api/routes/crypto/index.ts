import { Router } from "express"
import sma from "../../controllers/crypto/sma"
import auth from "../../middlewares/auth"

const cryptoRouter = Router()

cryptoRouter.post("/sma", auth, sma)

export default cryptoRouter
