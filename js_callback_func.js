function welcome(name,callback,logout){ //callback = ()=>{ console.log('GoodBye!!') }
    console.log('Welcome ' + name);
    //i want to call another func from within this func
    callback()
    logout()
}

welcome('harry', ()=>console.log('GoodBye!!'),()=>{});
// check limit -- validate -- benificiary acct -- verify ba -- transfer  -- op_debit_credit 








