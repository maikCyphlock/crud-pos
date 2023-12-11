import express from 'express'
import helmet from "helmet";

const app = express();
import { UsersRoute } from './api/userRoutes'

app.use(express.json())
//Routes
app.use('/users', UsersRoute)

app.get('/', (req, res) => {
    res.send('Hello World')
})



app.use(helmet());


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
