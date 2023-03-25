import express  from "express";
import mysql from "mysql2"
import cors from "cors"
export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"luunhungbinthy",
    database:"todo_app"
})


const app = express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    const q = "select * from todolist"
    db.query(q,(err,data)=>{
        return res.json(data)  
    })
})
app.post('/addtodo',(req,res)=>{
    const q = "insert into todolist (`content`) values (?)"
    db.query(q,[req.body.content],(err,data)=>{
        return res.json(data)  
    })
})

app.put('/delete/:id',(req,res)=>{
    const q = `delete from todolist where id = ${req.params.id}`
    db.query(q,(err,data)=>{
        return res.json(data)  
    })
})

app.listen(8800,()=>{
    console.log("sever connect!!")
})