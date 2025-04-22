import express from 'express'
import { v2Router } from './v2/v2router'
import { v1Router } from './v1/v1router'

export const app = express()
const port = 3000

app.use("/v1", v1Router)
app.use("/v2/", v2Router)

app.listen(port, () => {
    console.log("starting server")
})

export default app