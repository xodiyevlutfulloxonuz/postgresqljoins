const express=require('express')
const app=express()
const glob=require('glob')
const path=require('path')
const PORT=3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

glob('routes/**Route.js',(err,files)=>{
    files.forEach(file=>{
        let route=require(path.join(__dirname,file))
           if(route.path && route.router){
               app.use(route.path,route.router)
           }
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})

