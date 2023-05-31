import Contact from "../../models/Contact.js";

const deleteContact = {
    destroy: async (req,res,next) => {
        try{
            let contact = await Contact.findOneAndDelete(
                { _id: req.params.id }
            )
            if(contact){
                return res.status(200).json({
                    success: true,
                    message: "Contact successfully deleted",
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

export default deleteContact