import express from "express";
import { getuserprofile, login, register } from "../controller/usercontroller.js";

const  router = express.Router()

router.route('/').post(register)
router.route('/login').post(login)
router.route('/profile').post(getuserprofile)

export default router