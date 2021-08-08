const {Pool}=require('pg')
const config={
    host:'localhost',
    user:'postgres',
    max:20,
    password:"lutfulla1999",
    database:'mysimpledatabase'
    
}


class Database{
  constructor(config){
      this.config=config
      this.init()
  }

  async init(){
      this.pool=new Pool(this.config) 

  }
  async query(sql_query){
    let client 
      try{    
   client=await this.pool.connect()
   return client.query(sql_query)

      } catch(e){
         console.log(e)
      } finally{
          client.release()
      }

  }
}



module.exports=new Database(config)