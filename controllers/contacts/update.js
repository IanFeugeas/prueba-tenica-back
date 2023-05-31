import Contact from '../../models/Contact.js'

const updateContact = {
    update: async (req,res,next) => {
        try{
            let contact = await Contact.findOneAndUpdate(
                {_id: req.params.id},
                req.body,
                {new: true}
            )
            if(contact){
                return res.status(200).json({
                    success: true,
                    message: "Contact was successfully updated",
                    contact
                })
            }else{
                return res.status(404).json({
                    success: false,
                    message: "Contact not found"
                })
            }
        }catch(error){
            next(error)
        }
    }
}

export default updateContact