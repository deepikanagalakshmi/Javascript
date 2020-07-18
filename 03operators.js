//calculate discount percentage
//FORMULA D=(L-S)/L*100

//a+(b-(c*d)/e) 

var selling_price=199;
var list_price=799;

var discount_percentage=((list_price-selling_price)/list_price)*100;
console.log(discount_percentage);
//to get in precision
var display_discount_percentage=Math.round(discount_percentage);
console.log(display_discount_percentage+"% off");
