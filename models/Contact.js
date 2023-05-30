import {Schema,Types,model} from "mongoose";

let schema = new Schema({
    name: { type: String, required: true},
    last_name: { type: String, required: false},
    email: { type: String, required: false},
    phone: { type: Number, required: true},
    gender: { type: String, required: false},
    date: { type: Date, required: false},
    address: { type: String, required: false},
    address_number: { type: Number, required: true},
    type: { type: String, required: true},
    user_id: {  type: Types.ObjectId, ref: "users", required: true}
},{
    timestamps: true
})

let collection = "contacts"

let Contact = model(collection,schema)

export default Contact