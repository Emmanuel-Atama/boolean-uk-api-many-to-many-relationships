require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

/* IMPORT ROUTERS */

const patientRouter = require("./routes/patient/router")
const doctorRouter = require("./routes/doctor/router")
const appointmentRouter = require("./routes/appointment/router")

/* SETUP MIDDLEWARE */

app.disable("x-powered-by")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

/* SETUP ROUTES */
app.use("/patient", patientRouter)

app.use("/doctor", doctorRouter)

app.use("/appointment", appointmentRouter)

app.get("*", (req, res) => {
  res.json({ ok: true })
});


/* START SERVER */

const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`)
});
