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
    var noitems=document.getElementById("noitems");
    var noitemss=document.getElementById('noitemss');
    if(totalItems>0){
        noitems.textContent=totalItems;
        noitemss.textContent=totalItems;
    }
    else{
        noitems.textContent="";
        noitemss.textContent="";
    }
}
function addtemptations(){
    var addtemptations=document.getElementById('addtemptations').parentElement;
    addtemptations.innerHTML=`<div class="plusminus"><button class="minus" id="minus" onclick="minus1();buynow();addselectedproducts()">
    <i class="fa-solid fa-minus"></i>
    </button>
    <span id="quantitytemptations">0</span>
    <button class="plus" id="plus" onclick="plus1();buynow();addselectedproducts()">
     <i class="fa-solid fa-plus"></i>
     </button>
    </div>`
}

function minus1(){
    var quantitycadbury=document.getElementById('quantitytemptations');
    var cadbury=Number(quantitycadbury.textContent);
    var stock1=document.getElementById('stock1');
    var numstock1=Number(stock1.textContent);
    if(cadbury>0){
        totalItems--;
        updateNoItems();
        quantitycadbury.textContent=cadbury-1;
        stock1.textContent=numstock1+1;
        quantity1--;
    }
}

function plus1(){
    var stock1=document.getElementById("stock1");
    var numstock1=Number(stock1.textContent);
    var quantitycadbury=document.getElementById("quantitytemptations");
    var cadbury=Number(quantitycadbury.textContent);
    if(cadbury<10){
        totalItems++;
        updateNoItems();
        quantitycadbury.textContent=cadbury+1;
        stock1.textContent=numstock1-1;
        quantity1++;
    }
}

function addrost() {
  var addrost = document.getElementById("addrost").parentElement;
  addrost.innerHTML = `<div class="plusminus"><button class="minus" id="minus2" onclick="minus2();addproduct2();buynow()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantityrost">0</span>
    <button class="plus" id="plus2" onclick="plus2();addproduct2();buynow()"><i class="fa-solid fa-plus"></i></button></div>`;
}

function minus2(){
  var quantityrost=document.getElementById('quantityrost');
  var rost=Number(quantityrost.textContent);
  var stock2=document.getElementById('stock2');
  var numstock2=Number(stock2.textContent);
  if(rost>0){
    totalItems--;
    updateNoItems();
    quantityrost.textContent=rost-1;
    stock2.textContent=numstock2+1;
    quantity2--;
  }
}
function plus2(){
     var stock2=document.getElementById('stock2');
     var numstock2=Number(stock2.textContent);
     var quantityrost=document.getElementById('quantityrost')
     var rost=Number(quantityrost.textContent)
     if(rost<10){
        totalItems++;
        updateNoItems();
        quantityrost.textContent=rost+1;
        stock2.textContent=numstock2-1;
        quantity2++;
     }
}

function addkitkat(){
    var addkitkat=document.getElementById('addkitkat').parentElement;
    addkitkat.innerHTML=`<div class="plusminus">
    <button class="minus" id="minus3" onclick="minus3();addproduct3();buynow()">
    <i class="fa-solid fa-minus"></i>
    </button>
    <span id="quantitykitkat">0</span>
    <button class="plus" id="plus3" onclick="plus3(); addproduct3(); buynow()">
    <i class="fa-solid fa-plus"></i>
    </button>
    </div>`
}

function minus3(){
    var quantitykitkat=document.getElementById('quantitykitkat');
    var kitkat=Number(quantitykitkat.textContent);
    var stock3=document.getElementById('stock3');
    var numstock3=Number(stock3.textContent)
    if(kitkat>0){
        totalItems--;
        updateNoItems();
        quantitykitkat.textContent=kitkat-1;
        stock3.textContent=numstock3+1;
        quantity3--;
    }
}

function plus3(){
    var stock3=document.getElementById('stock3');
    var quantitykitkat=document.getElementById('quantitykitkat');
    var kitkat=Number(quantitykitkat.textContent);
    var numstock3=Number(stock3.textContent);
    if(kitkat<10){
        totalItems++;
        updateNoItems();
        quantitykitkat.textContent=kitkat+1;
        stock3.textContent=numstock3-1;
        quantity3++;
    }
}

function addmilkybar(){
  var addmilkybar=document.getElementById('addmilkybar').parentElement;
  addmilkybar.innerHTML=`<div class="plusminus"><button class="minus" id="minus14" onclick="minus14();addproduct4();buynow()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitymilkybar">0</span>
    <button class="plus" id="plus14" onclick="plus14();addproduct4();buynow()"><i class="fa-solid fa-plus"></i></button></div>`;
}

function minus14(){
    var stock4=document.getElementById('stock4');
    var numstock4=Number(stock4.textContent);
    var quantitymilkybar=document.getElementById('quantitymilkybar');
    var milkybar=Number(quantitymilkybar.textContent);
    if(milkybar>0){
        totalItems--;
        updateNoItems();
        stock4.textContent=numstock4+1;
        quantitymilkybar.textContent=milkybar-1;
        quantity4--;
    }
}

function plus14(){
    var stock4=document.getElementById('stock4');
    var nustock4=Number(stock4.textContent);
    var quantitymilkybar=document.getElementById('quantitymilkybar');
    var milkybar=Number(quantitymilkybar.textContent);
    if(milkybar<10){
        totalItems++;
        updateNoItems();
        stock4.textContent=nustock4-1;
        quantitymilkybar.textContent=milkybar+1;
        quantity4++;
    }
}