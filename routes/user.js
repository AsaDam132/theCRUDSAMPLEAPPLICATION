import { addUser, representUsers } from "../controller/index.js";
import {viewUsers} from "../controller/index.js";
import {deleteAUser} from "../controller/index.js";


import express from "express"


const router = express.Router()

/**Create user */
router.post('/', addUser)
router.get('/users',viewUsers)
router.put('/user/:id',representUsers)
router.delete('userd/:id',deleteAUser)


export default router;