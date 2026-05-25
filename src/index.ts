import { AppDataSource } from "./data-source"
import { Count } from "./entities/Count"
import express from "express"
import router from "routes/router"

AppDataSource.initialize().then(async () => {
    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Count)
    console.log("Loaded users: ", users)

    const app = express()

    app.use(express.json())
    app.use(router)

    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })

}).catch((error: Error) => {
    console.log(error)
})
