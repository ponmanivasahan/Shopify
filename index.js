let quantity1=0;
let quantity2=0;
let quantity3=0;
let quantity4=0;
let quantity5=0;
let quantity6=0;
let quantity7=0;
let quantity8=0;
let quantity9=0;
let quantity10=0;
let quantity11=0;
let quantity12=0;
let totalItems=0;
function cart(event){
    if(totalItems===0){
        event.preventDefault();
        alert("Please Choose Atleast One Item!")
    }
    else{
        document.getElementById("#cartbox").style.visibility='inherit';
    }
}

function cartt(){
    if(totalItems===0){
        alert("Please Choose Atleast One Item!");
    }
    else{
        document.getElementById('cartbox').style.visibility='inherit';
    }
}

function exit(){
    document.getElementById("cartbox").style.visibility='hidden';
}

function updateNoItems(){
    
}