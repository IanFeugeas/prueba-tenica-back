import Contact from '../../models/Contact.js'

const allContacts = {
    getAll: async (req, res, next) => {
        try {
            let order = { name: 1 }
            if (req.query.order == 1 || req.query.order == -1) {
                order.name = req.query.order
            }

            let pagination = { page: 1, limit: 0 }
            if (req.query.page) {
                pagination.page = Number(req.query.page)
            }

            let skip = pagination.page > 1 ? (pagination.page - 1) * pagination.limit : 0

            let query = {}
            if (req.query.name) {
                query.name = new RegExp(req.query.name.trim(), 'i')
                pagination.limit = 10
                skip = 0
            }
            if (req.query.category) {
                query.category_id = req.query.category.split(',')
                pagination.limit = 10
            }

            let contacts = await Contact.find(query)
                .select("-createdAt -updatedAt -__v -featured")

            if (contacts.length) {
                return res
                    .status(200)
                    .json({
                        success: true,
                        contacts
                    })
            } else {
                return res
                    .status(404)
                    .json({
                        success: false,
                        message: 'No contacts found'
                    })
            }

        } catch (error) {
            next(error)
        }
    }
}

export default allContacts