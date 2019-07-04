
function myFunction(){
var temperature = document.getElementById("temp").Value;
// setting a temp variable

//setting condition of the temp
if ( temperature>=25 ){ 
    alert ("dress warmly.");
} else if ( temperature>-12 && temperature<=-15 ){ 
    alert ("dress very warmly.");
} else if (temperature<=10 && temperature>=1 ){ 
    alert ("wear a rain coat.");
} else{ 
    alert ("not a valid temperature.");
}


}

