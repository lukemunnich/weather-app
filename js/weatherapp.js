

function myFunction(){
var temperature = document.getElementById("temp").value;
// setting a temp variable//

//setting condition of the temp//
if (temperature >=8 && temperature <=24){ 
    document.getElementById("wear").innerHTML = "its a warmish day but not too hot wear jeans and short sleeves.";
} else if (temperature >=25 && temperature <=50){ 
    document.getElementById("wear").innerhtml = "stay hydrated and wear sunblock.";
} else if (temperature >=0 && temperature <=7){ 
    document.getElementById("wear").innerHTML = "its abit cold wear a jersey and scarve.";
} else if (temperature >=-15 && temperature <=-1){ 
    document.getElementById("wear").innerHTML = "its very cold wear your warmest clothing.";
} else if (temperature <=-50 && temperature <=-16){ 
    document.getElementById("wear").innerHTML = "stay indoors under a warm blanket.";
}  else{ 
    alert("not a valid temperature.");
}

}