if (!process.env.AUTH_TOKEN) throw Error("AUTH_TOKEN is not set")

export const AUTH_TOKEN = process.env.AUTH_TOKEN
export const NODE_SERVICE =
  process.env.NODE_ENV === "production"
    ? "http://node_service:3001"
    : "http://localhost:3001"
