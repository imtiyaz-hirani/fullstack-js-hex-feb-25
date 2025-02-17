const booktickets=(movieName,ticketCost,confirmation)=>
    {
        console.log(`ticket booking for ${movieName} in the process, pls wait for confirmation`);
        setTimeout(()=>confirmation(movieName,ticketCost,payment),2000);
    }
const confirmTickets=(movieName,ticketCost,payment)=>{
        console.log(`booking is confirm for ${movieName}, wait till we take you to payment screen`);
        setTimeout(()=>payment(movieName,ticketCost),3000);
    }
const payment=(movieName,ticketCost)=>
    {
        console.log(`payment confirm for ${ticketCost} , enjoy the movie ${movieName}`);
    }
    booktickets("SpiderMan",500,confirmTickets);