const router=require('express').Router()
const Users=require('../models/UserModel')
const ReferalModel=require('../models/ReferalModel')

router.get('/', async(req,res)=>{
    let users=await Users.getUsers()
    let referals=await ReferalModel.getReferals()
    

    res.render('index',{users,referals})
})
router.post('/', async(req,res)=>{
   await Users.CreateUser(req.body.name, req.body.age, req.body.referal)
   console.log(req.body)
   //let users=await Users.getUsers()
       res.redirect('/')

    
})


module.exports={
  path:'/',
  router
}
