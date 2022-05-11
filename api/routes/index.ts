import { Router } from "express"
import notFound from "../controllers/404"
import cryptoRouter from "./crypto"
import stocksRouter from "./stocks"

const router = Router()

router.use("/crypto", cryptoRouter)
router.use("/stocks", stocksRouter)

router.use(notFound)

export default router
