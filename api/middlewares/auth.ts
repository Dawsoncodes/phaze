import { AUTH_TOKEN } from "../constants"
import { Handler } from "express"

const auth: Handler = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) throw Error("401 Unauthorized - missing API key")

    if (token !== AUTH_TOKEN) throw Error("401 Unauthorized - invalid API key")

    next()
  } catch (error) {
    if (error instanceof Error)
      res.status(401).json({
        message: error.message,
      })
  }
}

export default auth
