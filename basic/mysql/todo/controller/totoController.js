import TodoModel from "../model/totoModel.js"

class TodoController {
     static todoList = async(req,res)=>{
        const data = await TodoModel.todoList()
        res.json(data)
     }
}

export default TodoController