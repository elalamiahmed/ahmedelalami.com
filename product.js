const title =document.getElementById('title');
function getShortTitle()
{
    if(title.length > 49) title  = title.substring(0.47);
    else return title;
    return title+"...";
    
}


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoOXW6Gitu27SFKwdOUt8V7POKK6Ljq5k",
  authDomain: "landingpage-c37de.firebaseapp.com",
  databaseURL: "https://landingpage-c37de-default-rtdb.firebaseio.com",
  projectId: "landingpage-c37de",
  storageBucket: "landingpage-c37de.appspot.com",
  messagingSenderId: "415817260457",
  appId: "1:415817260457:web:8e2f068214923f59c0f8b8"
};

const app = initializeApp(firebaseConfig);
const realdb = getDatabase(app);

import{getStorage, ref as sRef , uploadBytesResumable,getDownloadURL}from
"https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js";

import{getDatabase,ref , set, child,get}from
"https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

//datbs

var OuterDiv = document.getElementById('productsDiv');
var ArreyOfProduct = [];

window.addEventListener('load',GetAllProduct);

function GetAllProduct(){

    const  dbref =  ref(realdb);
    get(child(dbref,"TheproductRealtimeDb"))
    .then((snapshot)=>
    {
        snapshot.forEach(prod => {
              
            ArreyOfProduct.push(prod.val());
        });
        AddAllProducts();
    })
    

}

function AddAllProducts()
{
    let i = 0;
    ArreyOfProduct.forEach(prod => {
        AddAproduct(prod,i++);
    });
    AssignAllEvents();
}

function AddAproduct(product,index)
{
    let html =
    `
    <img src="`+ product.LinksOfImagesArray[0]+`" class="thumb mt-2" id="thumb-`+ index +`">

    <p class="title" id="title-`+index+`">`+product.ProductTitle+`</p>

    `+

    GetUl(product.Points)
    +
    GenerateStockLabel(product.Quantite)

    +
    `

    <h5 class="price">`+product.Price+` MAD</h5>
    <button class="detbtn btn" id="detbtn-`+index+`">View Details</button>
    `

    let newProd = document.createElement('div');
    newProd.classList.add('productcard');
    newProd.innerHTML =  html ; 
    OuterDiv.append(newProd);''
}
function GenerateStockLabel(stock){
    let stocklabel = document.createElement('h5');
    stocklabel.classList.add('stock');

    if(stock > 0){
        stocklabel.innerHTML = 'IN STOCK';
        stocklabel.classList.add('text-success');
    }
    else{
        stocklabel.innerHTML = 'OUT OF STOCK';
        stocklabel.classList.add('text-warning');
    }
    return stocklabel.outerHTML;

 }
 


function GetUl(array){
    let ul = document.createElement('ul');
    ul.classList.add('points');

    array.forEach(element => {
        let li = document.createElement('li');
        li.innerText = element;
        ul.append(li);
    });

    return ul.outerHTML;

}

function GetProductIndex(id)
{
  var indstart = id.indexOf('-') +1;
  var indend = id.length;
  return Number(id.substring(indstart,indend));
}

function GotProductDetails(event){
    var index = GetProductIndex(event.target.id);
    localStorage.product= JSON.stringify(ArreyOfProduct[index]);
    console.log(ArreyOfProduct[index]);
    window.location = "product_details.html";
}
function AssignAllEvents(){
    var btns =  document.getElementsByClassName('detbtn');
    var titles = document.getElementsByClassName('title');
    var thumbs = document.getElementsByClassName('thumb');


    for(let i = 0; i<btns.length; i++){
        btns[i].addEventListener('click',GotProductDetails);
        titles[i].addEventListener('click',GotProductDetails);
        thumbs[i].addEventListener('click',GotProductDetails);
    }


}