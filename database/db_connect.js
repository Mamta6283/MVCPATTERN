const mongoose=require('mongoose')

const connect=mongoose.connect(`mongodb+srv://mamtarani172001:mamta123@cluster0.dwrm5.mongodb.net/productsData`).then(()=>{
    console.log("database connected successfully")
}).catch((err)=>{
    console.log(err.message)
})

module.exports=connect;

//mongodb+srv://mamtarani172001:<db_password>@cluster0.dwrm5.mongodb.net/














