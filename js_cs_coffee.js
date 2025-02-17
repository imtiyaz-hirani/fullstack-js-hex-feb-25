/*
create functions to take order of coffee from a customer and after 3 seconds serve it
*/

const takeOrder = (customerName,item,callback)=>{
    //console.log('order received for customer: ' + customerName + " ,preparing " + item)
    console.log(`order received for customer: ${customerName} == preparing ${item}!!!`)
    setTimeout(()=>callback(customerName,item), 3000)
    
}

const serve=(customerName,item)=>console.log(`serving ${item} to customer ${customerName}!!`)

takeOrder('harry','idli',serve);