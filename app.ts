import express from 'express'
import helmet from 'helmet'
import { UsersRoute } from './api/userRoutes'
import { auth, requiresAuth } from 'express-openid-connect'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import dotenv from 'dotenv'
dotenv.config()
const config = {
  authRequired: process.env.authRequired ?? false,
  auth0Logout: process.env.authLogout ?? true,
  secret: process.env.secret ?? '',
  baseURL: process.env.baseUrl ?? 'http://localhost:3000',
  clientID: process.env.clientID ?? '',
  issuerBaseURL: process.env.issuerBaseURL ?? ''
}

const app = express()
const PORT = process.env.PORT ?? 3000
app.use(express.json())

const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'My Express API',
      version: '1.0.0',
      description: 'A simple Express API'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./api/*.ts']
}

const specs = swaggerJsdoc(options)

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs)
)
app.use(
  // @ts-expect-error
  auth(config)
)
app.use(helmet())

// Routes
app.use('/users', requiresAuth(), UsersRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
