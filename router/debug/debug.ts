import { Router } from "express";
import {PrismaClient} from "@prisma/client";
const router = Router();

router.get("/", (req, res)=>{
    res.render("debug/index.ejs");
})



router.post("/searchRooms", (req, res)=>{
    let db = new PrismaClient();
    
    
    db.$disconnect();
    res.status(200).send({"u":"wu"}).end();
})


module.exports = router;