import mysql from "mysql"
const connection =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejs',
    multipleStatements:true
})
connection.connect(function(err){
     if(!!err){
        console.log(err)
     }else{
        console.log('Mysql connected!')
     }
})



// module.exports = connection
export default connection