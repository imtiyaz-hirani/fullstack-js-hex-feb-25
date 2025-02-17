/*
Create a function bookTickets(movieName,ticketCost)
--console log "tiket booking for movieName in process, pls wait for confirmation"
After 2 seconds...  
define a callback to confirmTickets() 
-- console log "booking confirm for moviewName", wait till we take you to payment screen
After 3 secs... 
define a callback to processTicket()
-- console.log "payment confirm for ticketCost, Enjoy the movie movieName" 
*/
const booktickets=(movieName,ticketCost,callback1,callback2)=>
    {
        console.log(`ticket booking for ${movieName} in the process, pls wait for confirmation`);
        setTimeout(()=>callback1(movieName,ticketCost,callback2),2000);
    }
    const confirmTickets=(movieName,ticketCost,callback)=>{
        console.log(`booking is confirm for ${movieName}, wait till we take you to payment screen`);
        setTimeout(()=>callback(movieName,ticketCost),3000);
    }
    const processTicket=(movieName,ticketCost)=>
    {
        console.log(`payment confirm for ${ticketCost} , enjoy the movie ${movieName}`);
    }

    booktickets("DDLJ",600,confirmTickets,processTicket);
     