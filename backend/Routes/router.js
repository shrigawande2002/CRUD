import express from "express";
import {GetData, Insert}  from "../Controllers/InsertintoDB.js";
import { DeleteUser } from "../Controllers/Delete.js";
import { UpdateUSer } from "../Controllers/Update.js";
const router = express.Router();

router.post('/insert', Insert);
router.get('/get' , GetData);
router.delete('/delete/:id' , DeleteUser);
router.put('/update/:id' , UpdateUSer);
export default router;