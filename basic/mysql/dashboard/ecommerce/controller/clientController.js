import asyncWrapper from "../helper/async.js";

const dashboard = asyncWrapper( async (req,res)=>{
   res.send('dashboard')
})
const users = asyncWrapper( async (req,res)=>{
   res.send('users')
})


export {dashboard,users}
/* module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
  } */
