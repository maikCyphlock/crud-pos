import express, { type RequestHandler, type Request, type Response } from 'express'

import { createUser, getUsers, deleteUser, getUser } from '../services/userService'

const router = express.Router()

/**
 * @swagger
 * /users:
 *  get:
 *   summary: Lists all the users
 *   tags: [Users]

 *   responses:
 *     200:
 *       description: The list of users.
 *
 *
 */
router.get('/', (async (_req: any, res: Response) => {
  const users = await getUsers()
  res.json(users)
}) as RequestHandler)

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    summary: Get a user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: The user.
 *
 *
 *      500:
 *        description: Some server error
 */
router.get('/:id', (async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    const user = await getUser(id)
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred while fetching the user.' })
  }
}) as RequestHandler)
/**
 * @swagger
 * /users/create:
 *  post:
 *    summary: Create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true

 *    responses:
 *      201:
 *        description: The created user.

 *      500:
 *        description: Some server error
 */
router.post('/create', (async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body)

    res.status(201).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}) as RequestHandler)

// delete user by id

router.delete('/remove/:id', (async (req: Request, res: Response) => {
  console.log(req.params)
  const id = req.params.id
  const user = await deleteUser(id)
  res.json(user)
}) as RequestHandler)

export { router as UsersRoute }
