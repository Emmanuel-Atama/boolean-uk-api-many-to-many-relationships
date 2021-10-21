const express = require("express")

const { createPatientAppointment } = require("./controller")

const router = express.Router()

router.post("/", createPatientAppointment)

module.exports = router