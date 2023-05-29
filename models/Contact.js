import mongoose from "mongoose";

let schema = new mongoose.Schema({
    first_name: { type: String, required: true},
    last_name: { type: String, required: false},
    email: { type: String, required: false},
    phone: { type: Number, required: true},
    date: { type: Number, required: false},
    address: { type: String, required: false},
    address_number: { type: Number, required: true},
    type: { type: String, required: true}
},{
    timestamps: true
})

let collection = "contacts"

let Contact = mongoose.model(schema,collection)

export default Contact