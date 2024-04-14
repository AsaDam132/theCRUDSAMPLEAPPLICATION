import express from "express"
const app = express()
import dbConfig from "./datasource/database.js"
import env from "./config/env.js"
import apiRoutes from "./routes/index.js"


const port = env.PORT || 5000

/** Database connection */
dbConfig.sync({ alter: true })
.then(() => console.log("Database connected..."))
.catch(err => console.log(err.message))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send("This server is working!!")
})

app.use('/api', apiRoutes)



app.listen(port, () => console.log(`Server running on port: ${port}`))