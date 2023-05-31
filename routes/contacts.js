import { Router } from "express";

let router = Router()

//router.post("/", (req,res,next)=> res.status(200).send("contact create"))
router.get("/", (req,res,next)=> res.status(200).send("contact read"))
//router.put("/:id", (req,res,next)=> res.status(200).send("contact edit"))
//router.delete("/:id", (req,res,next) => res.status(200).send("contact delete"))

export default router