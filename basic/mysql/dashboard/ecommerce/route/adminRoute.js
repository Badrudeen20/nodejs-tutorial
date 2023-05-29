import express from 'express';
import { about, home } from '../controller/adminController.js';

const clientRouter = express.Router()
clientRouter.get('',home)
clientRouter.get('/about',about)
// router.get('/contact',TodoController.todoList)

export default clientRouter