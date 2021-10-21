const express = require("express")

const { getAll, createPatientAppointment } = require("./controller")

const router = express.Router()

router.get("/", getAll)

router.post("/", createPatientAppointment)

module.exports = router
