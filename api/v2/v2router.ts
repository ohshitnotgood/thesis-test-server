import { createId } from '@paralleldrive/cuid2'
import express, { Request, Response } from 'express'
export const v2Router = express.Router()

/**
 * JSON GET route
 */
v2Router.get("/json", (req: Request, res: Response) => {
    const response = {
        "userId": createId(),
        "sessionId": createId(),
        "randomField": createId()
    }
    res.json(response)
})

/**
 * JSON PUT route
 */
v2Router.put("/json", (req: Request, res: Response) => {
    const response = {
        "userId": createId(),
        "sessionId": createId(),
        "randomField": createId()
    }
    res.json(response)
})


/**
 * Plain-text route
 */
v2Router.get("/plain-text", (req: Request, res: Response) => {
    const response = "1. Hljóðs bið ek allar helgar kindir, \
    meiri ok minni mögu Heimdallar; \
    viltu, at ek, Valföðr! vel framtelja forn spjöll fíra, \
    þau er fremst um man."
    res.send(response)
})

