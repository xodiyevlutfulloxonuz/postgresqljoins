const Database=require('../modules/postgres')

class UserModel{
    constructor(){

    }
    async CreateUser(name, age, referal_id){
        let {rows}=await Database.query(` insert into users (user_name, user_age, referal_id) values
         ('${name}','${age}','${referal_id}')`)
        return rows 
        
    }
    async getUsers(){
        let {rows} =await Database.query('select*from users inner join referal on referal.referal_id=users.referal_id')
        return rows 
    }
}
module.exports=new  UserModel
