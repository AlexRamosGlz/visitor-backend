import { AppDataSource } from "./data-source"
import { Count } from "./entities/Count"

AppDataSource.initialize().then(async () => {
    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Count)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
