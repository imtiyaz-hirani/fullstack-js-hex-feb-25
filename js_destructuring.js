const addPersonToDB=(data,callback)=>{
    console.log('processing data....destructuring..... ')
    let {name,city,contact} = data; //destructuring 
    let structData = {
        fname: name.split(' ')[0],
        lname: name.split(' ')[1],
        city: city,
        countryCode: contact.split('-')[0],
        phoneNo: contact.split('-')[1] 
    }
    //call the method that will add data tho DB 
    callback(structData);
}

const dbInsert = (data)=>{
    console.log('data added to DB');
    console.log(data)
}

addPersonToDB({
    name: 'harry potter',
    city: 'london',
    contact: '44-775869978'
},dbInsert );

/**
 * id, fname, lname, city, countryCode, phoneNo -- DB table structure 
 * 
 * -- if we get the data in exact same format as that of our DB collection/table then all good 
 * -- what if we don't get actual structure 
 */