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

router.post("/add", passport.authenticate("jwt", { session: false }), validator(contactSchema), contactEmailExist, create)

router.delete("/:id", passport.authenticate("jwt", { session: false }), destroy)

router.put("/:id", passport.authenticate("jwt", { session: false }), update)

router.get("/:id", passport.authenticate("jwt", { session: false }), getOne)

router.get("/", passport.authenticate("jwt", { session: false }), getAll)

export default router