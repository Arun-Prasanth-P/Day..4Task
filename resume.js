//creat your own resumw data in JSON format
let myresume=

[{
    "name" :"Arun Prasanth",
    "EMAIL":"arunprasanth1999@gmail",
    "phone": 984897692,
    "work" : "digital printing",
    "location":[{
        "address": "7a/47 village street",
        "pincode": 600019,
        "city"   : "chennai",
        "state"  : "tamilnadu",
        "country": "India" }],
    "Education" :[{
        "institution": "R.k college",
        "department" : "CSC",
        "year"       : 3,
        "persentage" : 80

    }],
    "languages":[{
        "language": "tamil,english"
    }]

}]
console.log(myresume);

//for the above JSON,iterate over all for loops
//for loop 
for(var i=0;i< myresume.length;i++){
    var obj=myresume[i];
    console.log(obj.name);
    console.log(obj.EMAIL);
    console.log(obj.phone);
    console.log(obj.work);
    console.log(obj.location);
    console.log(obj.Education);
    console.log(obj.languages);

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

