import { createId } from '@paralleldrive/cuid2'
import express, { Request, Response } from 'express'
export const v1Router = express.Router()

/**
 * JSON GET route
 */
v1Router.get("/json", (req: Request, res: Response) => {
    const response = {
        "usrId": createId(),
        "ssnId": createId(),
        "rndField": createId(),
    }
    res.json(response)
})

/**
 * JSON PUT route
 */
v1Router.put("/json", (req: Request, res: Response) => {
    const response = {
        "usrId": createId(),
        "ssnId": createId(),
        "rndField": createId(),
    }
    res.json(response)
})


/**
 * Plain-text route
 */
v1Router.get("/plain-text", (req: Request, res: Response) => {
    const response = "1. Hljóðs bið ek allar helgar kindir, \
    meiri ok minni mögu Heimdallar; \
    viltu, at ek, Valföðr! vel framtelja forn spjöll fíra, \
    þau er fremst um man."
    res.send(response)
})
