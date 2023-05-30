import {Schema,model} from "mongoose";

let schema = new Schema({
    email: { type: String, required: true},
    password: { type: String, required: true},
    is_online: { type: Boolean, required: true},
    is_verified: { type: Boolean, require: true},
    verify_code: { type: String, required: true}
},{
    timestamps: true 
})

let collection = "users"

let User = model(collection,schema)

export default User