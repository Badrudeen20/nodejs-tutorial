import connection from "../helper/db.js";
class TodoModel {
    static todoList =  function(){
        let  sql = `SELECT * FROM crud`;
        let data = new Promise(function(resolve,reject){
            setTimeout(()=>{
                connection.query(sql,function(err,data,fields){
                    if(err) reject(err)
                    resolve(data)
                })
            },4000)
           
        });
        return data
      
    }
}

export default TodoModel