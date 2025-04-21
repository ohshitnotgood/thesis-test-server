import express, { Request, Response } from 'express'
export const v2Router = express.Router()

/**
 * JSON route
 */
v2Router.get("/json", (req: Request, res: Response) => {
    const response = {
        "userId": "someUserId_but_this_should_be_ignored",
        "sessionId": "someSessionId_but_this_should_also_be_ignored",
        "randomField": "randomFieldShouldBeDetected_but_not_this_msg"
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

