import Contact from '../../models/Contact.js'


const oneContact = {

    getOne: async (req, res, next) => {
        try {
            const contact = await Contact.findOne({ _id: req.params.id })


            if (contact) {
                return res
                    .status(200)
                    .json({
                        contact: contact
                    })
            } else {
                return res.status(404).json({
                    success: false,
                    message: "This contact dont exist already!",
                });
            }

        } catch (error) {
            next(error)
        }
    }
}

export default oneContact