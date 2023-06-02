import {Schema,Types,model} from "mongoose";

let schema = new Schema({
    name: { type: String, required: true},
    last_name: { type: String, required: true},
    email: { type: String, required: false},
    phone: { type: Number, required: true},
    date: { type: Array, required: false},
    address: { type: String, required: false},
    type_of_contact: { type: String, required: false},
    origin: { type: String, required: false},
    user_id: {  type: Types.ObjectId, ref: "users", required: true}
},{
    timestamps: true
})

let collection = "contacts"

let Contact = model(collection,schema)

export default Contact