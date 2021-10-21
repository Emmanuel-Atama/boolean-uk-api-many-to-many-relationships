const  prisma  = require("../../utils/db")

const getAll = async (req, res) => {

try {
    const data = await prisma.doctor.findMany();
    res.json({data})
} catch (error) {
    console.error("getAll Error: ", { error });
    res.json({ error })
}
};

const getOneById = async (req, res) => {
    const id = parseInt(req.params.id)

    const result = await prisma.doctor.findUnique({
        where: {
            id
        },
        include: {
            appointments: {
             include: {
                 appointment: {
                     include: {
                         patient: true
                     }
                 }
             }   
            }
        }
    })
    // const filteredData = result.appointments.map(data => data.appointment)

    res.json(result)
}
module.exports = { getAll, getOneById }