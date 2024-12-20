const express=require('express')

const app=express()
const port=3001;
const myroute=require('./route')
const connect=require('./database/db_connect.js')
const body_parser=require('body-parser')
app.use(body_parser.urlencoded({extended:false}))



app.use('/',myroute)

app.use(express.json())

//connect to database
// connect()



app.listen(port,()=>{
    console.log(`click here : http://localhost:${port}`)
})




