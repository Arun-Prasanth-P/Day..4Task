//creat your own resumw data in JSON format

var myresume=[{
    "name" :"Arun Prasanth",
    "EMAIL":"arunprasanth1999@gmail",
    "phone": 984897692,
    "work" : "digital printing",
    "address": "7a/47 village street",
    "pincode": 600019,
   "city"   : "chennai",
    "state"  : "tamilnadu",
     "country": "India" ,
    "institution": "R.k college",
     "department" : "CSC",
   "year"       : 3,
    "persentage" : 80
    }];


//for loop
for(var i = 0; i < myresume.length; i++) {
    var obj = myresume[i];

   console.log(obj.name);
    console.log(obj.EMAIL);
    console.log(obj.phone);
    console.log(obj.work);
    console.log(obj.address);
    console.log(obj.pincode);
    console.log(obj.city);
    console.log(obj.state);
    console.log(obj.country);
    console.log(obj.institution);
    console.log(obj.department);
    console.log(obj.year);
    console.log(obj.persentage);
    
}

//for in
for (var key in myresume) {
    if (myresume.hasOwnProperty(key)) {
        console.log(myresume[key].id);
       
    }
}
//for of
let text = "";
for (let x of myresume) {
 text += x; 
}
 console.log(text);

