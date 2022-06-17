import { Router, Request, Response} from 'express'

import * as userController from '../controllers/user'
import {CreateUserDTO} from '../dto/user.dto'

const usersRouter = Router()

usersRouter.post('/', async (req: Request, res: Response) => {
    const payload:CreateUserDTO = req.body

    const result = await userController.create(payload)
    return res.status(200).send(result)
})

export default usersRouter