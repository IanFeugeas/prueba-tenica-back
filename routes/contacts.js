import { Router } from "express";
import contactSchema from "../schemas/contact.js"
import validator from "../middlewares/validator.js"
import passport from "../middlewares/passport.js";
import contactEmailExist from "../middlewares/contacts/contactEmailExist.js";
import createContact from "../controllers/contacts/create.js"
import deleteContact from "../controllers/contacts/delete.js"
import updateContact from "../controllers/contacts/update.js"
import oneContact from "../controllers/contacts/get_one.js"
import allContact from "../controllers/contacts/get_all.js"

let router = Router()

const { create } = createContact
const { destroy } = deleteContact
const { update } = updateContact
const { getOne } = oneContact
const { getAll } = allContact

router.post("/add", validator(contactSchema), contactEmailExist, create)

router.delete("/:id", destroy)

router.put("/:id", update)

router.get("/:id", getOne)

router.get("/", getAll)

export default router