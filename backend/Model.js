const mongoose = require("mongoose") 

const CrudSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Crud", CrudSchema)