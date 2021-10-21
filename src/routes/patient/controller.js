const  prisma  = require("../../utils/db")

const getAll = async (req, res) => {
console.log({doctor: prisma.patient})
try {
    const data = await prisma.patient.findMany();
    res.json({data})
} catch (error) {
    console.error("getAll Error: ", { error });
    res.json({ error })
}
};

const createPatientAppointment = async (req, res) => {

    const patientData = {
        ...req.body,
        dateOfBirth: new Date(req.body.dateOfBirth),
        appointments: {
            create: {
                ...req.body.appointment,
                dateTime: new Date(req.body.appointment.dateTime)
            }
        }
    }
    // console.log(patientData)
delete patientData.appointment
    const result = await prisma.patient.create({
        data: patientData,
        include: {
            appointments: true,
        }
    })
    res.json({data: result})
}
module.exports = { getAll, createPatientAppointment}