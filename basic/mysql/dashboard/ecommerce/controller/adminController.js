import asyncWrapper from "../helper/async.js";

const home = asyncWrapper( async (req,res)=>{
   res.send('badr')
})
const about = asyncWrapper( async (req,res)=>{
   res.send('about')
})


export {home,about}
/* module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
  } */
