import axios from "axios"
import { NODE_SERVICE } from "../constants"

const service = axios.create({
  baseURL: NODE_SERVICE,
})

export default service
