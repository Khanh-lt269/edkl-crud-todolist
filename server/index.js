import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import cors from 'cors'
import todosRoutes from './routes/todos.js'

const app = express();
dotenv.config()
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/todos', todosRoutes)


app.get("/", (req, res) => {
    res.send("Welcome to server!")
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))