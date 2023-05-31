import "dotenv/config.js"
import "../../config/database.js"
import { users } from "./users.js"
import { contacts } from "./contacts.js"
import User from "../User.js"
import Contact from "../Contact.js"

let newUsers = async(users) => await User.insertMany(users)

let newContacts = async(contacts) => await Contact.insertMany(contacts)

let data = async () => {
    await newUsers(users)
    await newContacts(contacts)
    console.log("done!")
}

data()
