import Contact from "../../models/Contact.js";

const contacts = {
    create: async(req,res,next) => {
        try{
            const{name, last_name, email, phone, date, address, type_of_contact, origin, user_id} = req.body

            const contact = await Contact.create({
                name,
                last_name, 
                email, 
                phone, 
                date, 
                address, 
                type_of_contact, 
                origin, 
                user_id
            })

        return res.status(201).json({
                success: true,
                message: "A new contact has been created",
                contact,
            });
        }catch (err) {
            next(err);
        }
        }       
    }

export default contacts