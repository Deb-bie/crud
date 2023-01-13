const mongoose  = require("mongoose")


const databaseConnection = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO)
        console.log(`Server has been conected to the database`)
    } catch (error) {
        console.log(error)
    }
}
module.export = {databaseConnection}