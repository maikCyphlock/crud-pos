import express from 'express'
import type { Request, Response } from 'express'
import { validateCreateUser } from '../utils/CreateUserValidator'
const { query, matchedData, validationResult } = require('express-validator');
const router = express.Router()
import { createUser, getUsers, deleteUser } from '../services/userService'

router.get('/', async (req: any, res: { json: (arg0: any) => void }) => {
    const users = await getUsers()
    res.json(users)
})


router.post('/create', async (req: Request, res: Response) => {



    try {
        const user = await createUser(req.body)

        res.status(201).json(user)
    } catch (error) {

        res.status(500).json(error)
    }
})

// delete user by id 

router.delete('/remove/:id', async (req: Request, res: Response) => {
    console.log(req.params)
    const id = req.params.id
    const user = await deleteUser(id)
    res.json(user)
})

export {
    router as UsersRoute
}
