const Database=require('../modules/postgres')

class ReferalModel{
    constructor(){

    }
    async CreateReferal(name){
        let {rows}=await Database.query(` insert into referal (referal_name) values ('${name}')`)
        return rows 
        
    }
    async getReferals(){
        let {rows} =await Database.query('select*from referal')
        return rows 
    }
}
module.exports=new  ReferalModel
