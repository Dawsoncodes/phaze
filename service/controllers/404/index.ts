import { Handler } from "express"

const notFound: Handler = async (req, res) => {
  res.status(404).json({
    message: "Not found",
  })
}

export default notFound
