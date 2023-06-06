import Contact from "../../models/Contact.js";

const contacts = {
    create: async(req,res,next) => {
        try{
            req.body.user_id = req.user.id
            const{name, last_name, email, phone, date, user_id} = req.body

            const contact = await Contact.create({
                name,
                last_name, 
                email, 
                phone, 
                date,
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