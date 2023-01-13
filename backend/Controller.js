const Crud = require("./Model")

// CREATE
const createCrud = async (req, res) => {
    const newCrud = new Crud(req.body);
    try {
        const savedCrud = await newCrud.save()
        res.status(200).json(savedCrud)
    } catch (error) {
        console.log(error)
    }
}

// UPDATE
const updateCrud = async (req, res) => {
    try {
        const updatedCrud = await Crud.findByIdAndUpdate(
            req.params.id,
            {$set: req.params.body},
            {new: true}
        )
        res.status(200).json(updatedCrud)
    } catch (error) {
        console.log(error)
    }
}

// DELETE
const deleteCrud = async (req, res) => {
    try {
        await Crud.findByIdAndDelete(req.params.id)
        res.status(200).json(`Crud Item deleted`)
    } catch (error) {
        console.log(error)
    }
}

// GET ALL
const getAllCrud = async (req, res) => {
    try {
        const allCrud = await Crud.find()
        res.status(200).json(allCrud)
    } catch (error) {
        console.log(error)
    }
}

// GET ONE
const oneCrud = async (req, res) => {
    try {
        const one = await Crud.findById(req.params.id)
        res.status(200).json(one)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createCrud,
    updateCrud,
    deleteCrud,
    getAllCrud,
    oneCrud
}