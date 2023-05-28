import express from 'express';
import TodoController from '../controller/totoController.js';
const router = express.Router()
router.get('/list',TodoController.todoList)

export default router