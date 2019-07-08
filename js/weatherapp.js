

function displayClothing(){
var temperature = document.getElementById("temp").value;
// setting a temp variable//

//setting temperature range between 16 and 35//
if (temperature >=16 && temperature <=35){ 
    document.getElementById("wear").innerHTML = "the sun is shinning and its perfect for short sleeves and pants.";
//setting temperature range between 0 and 15//
} else if (temperature >=0 && temperature <=15){ 
    document.getElementById("wear").innerHTML = "its abit cold wear a jersey and scarve.";
   //setting temperature range between -1 and -15// 
} else if (temperature >=-15 && temperature <=-1){ 
    document.getElementById("wear").innerHTML = "its very cold wear your warmest clothing.";
    //setting temperature range between -16 and below//
} else if (temperature <=-16){ 
    document.getElementById("wear").innerHTML = "stay indoors under a warm blanket.";
}  else{ 
    alert("not a valid temperature.");
}

}