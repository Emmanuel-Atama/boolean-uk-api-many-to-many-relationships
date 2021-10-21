const  prisma  = require("../../utils/db")

const getAll = async (req, res) => {

try {
    const data = await prisma.appointment.findMany();
    res.json({data})
} catch (error) {
    console.error("getAll Error: ", { error });
    res.json({ error })
}
};

module.exports = { getAll}