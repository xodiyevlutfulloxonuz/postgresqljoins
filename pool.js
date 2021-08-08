const ReferalModel=require('./models/ReferalModel')

async function main(){
  const response=await ReferalModel.CreateReferal('whatsapp')
  

}
main()

