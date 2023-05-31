import Contact from "../../models/Contact.js";

async function contactEmailExist(req,res,next){
    const contact = await Contact.findOne({email: req.body.email})
    if(contact){
        return res.status(400).json({
            success: false,
            message: 'Email already exist'
        })
    }
    return next()
}

export default contactEmailExist