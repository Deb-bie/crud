const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT
const crud = require("./Route")

const { databaseConnection} = require("./Database")

// databaseConnection()
const app = express()

// app.use("/api", crud)

app.use(express.json())

const students = [
    {
        id: 1,
        name: "Deborah",
        course: "frontend",
        age: 32,
        gender: 'female'
    },
    {
        id: 2,
        name: "Dennise",
        course: "Backend",
        age: 40,
        gender: 'female'
    },
    {
        id: 3,
        name: "William",
        course: "full",
        age: 12,
        gender: 'male'
    },
    {
        id: 4,
        name: "Ekow",
        course: "frontend",
        age: 50,
        gender: 'male'
    },
    {
        id: 5,
        name: "Emma",
        course: "backend",
        age: 60,
        gender: 'female'
    },
    {
        id: 6,
        name: "Ken",
        course: "frontend",
        age: 100,
        gender: 'male'
    },
    {
        id: 7,
        name: "Ayeyi",
        course: "full",
        age: 25,
        gender: 'male'
    }
]

app.get("/",(req, res) => {
    res.send("Yayyy")
} )

// querySearch
app.get("/student", async(req, res) => {
    try {
        const userQuery = await req.query

        if (req.query.age) {
            userQuery.age = parseInt(req.query.age)
        }

        console.log(userQuery)

        const filtered = await students.filter((info) => {
            let valid = true;
            for (key in userQuery) {
                // console.log(key, userQuery[key], info[key])

                valid = valid && info[key] === userQuery[key]
                
            }

            return valid
        });

        // console.log(filtered)

        res.send(filtered)





    } catch (error) {
        res.send(error.message)
    }
})



app.listen(PORT, () => {
    console.log("App has started")
})
