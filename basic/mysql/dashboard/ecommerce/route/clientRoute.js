import express from 'express';
import { dashboard, users } from '../controller/clientController.js';
const adminRouter = express.Router()
adminRouter.get('/dashboard',dashboard)
adminRouter.get('/users',users)
// router.get('/contact',TodoController.todoList)

export default adminRouter