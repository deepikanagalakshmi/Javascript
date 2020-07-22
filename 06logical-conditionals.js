// user is only allowed to make pruchase when she is:
// logged-in
// email-verified
// cardInfo Valid
// if any one is missiing, dont allow to make a purchase 

var isLoggedIn=true;
var isEmailVerified=true;
var cardInfo=true;

if(isLoggedIn){
    console.log("User logged-in");
    if(isEmailVerified){
        console.log("Email-verified");
    
        if(cardInfo){
        console.log("allow to make a purchase");
        }
    }
}  
//easy way to use logical operator

if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("Allow to make a purchase");
}
else{
    console.log("Purchase NOT allowed");
}