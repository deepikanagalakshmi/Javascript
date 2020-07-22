//allow user to access course when he is:
//logged-in from email
//logged-in from facebook
//logged-in from google

var email=true;
var facebook=false;
var google=false;
if(email){
console.log("Login success");
}
if(facebook){
console.log("Login success");  
}
if(google){
    console.log("Login success");
}
//easy way using logical OR

if(email || facebook || google){
    console.log("Login success");
}
else{
    console.log("Login NOT success");
}