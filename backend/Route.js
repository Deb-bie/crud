const express = require("express")
const { createCrud, updateCrud, deleteCrud, getAllCrud, oneCrud } = require("./Controller")
const router = express.Router()

router.post("/", createCrud)

router.put("/:id", updateCrud)

router.delete("/:id", deleteCrud)

router.get("/", getAllCrud)

router.get("/:id", oneCrud)


module.exports = router