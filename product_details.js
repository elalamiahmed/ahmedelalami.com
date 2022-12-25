

let product = null;
window.onload = function()

{
    product = localStorage.product

    if(product){
        product=JSON.parse(product);
        Loadproduct();
    }
}

function Loadproduct()
{
    document.getElementById('titleli').innerHTML = product.ProductTitle;
    //document.getElementById('catlink').innerHTML = product.ProductTitle;
    //document.getElementById('points').innerHTML = product.Points;
    document.getElementById('bigimg').src = product.LinksOfImagesArray[0];
    document.getElementById('title').innerHTML = product.ProductTitle;
    document.getElementById('description').innerHTML = product.Description;
   document.getElementById('price').innerHTML = + product.Price + `&nbsp;` + "MAD";
   if(product.Quntite<1)document.getElementById('btnDiv').innerHTML = '<h3 class="text-warning">Out Of Stock</h3>';
   GeneratLi();
   GenImages();
    
}

function GeneratLi()
{
  product.Points.forEach(html => {
    if(html.length>1){
        var li  = document.createComment('li');
        li.innerHTML = html;
        document.getElementById('points').append(li);
    }
  });
}

function GenImages()
{
    let i = 1; 
    let html = '';
    product.LinksOfImagesArray.forEach(imagelink=>
        {
        let img = document.createElement('img');
        img.src = imagelink;
        img.classList.add("smimgs","mr-2","mb-2");
        img.id='im'+ (i++);
        img.addEventListener('click',ChangeBigImg);
        document.getElementById('smlimgDiv').append(img);
    })
}

function ChangeBigImg(event)
{
    let elemt  = document.getElementById(event.target.id);
    document.getElementById('bigimg').src = elemt.src;
}

// Upload Orders



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


//const ProductTilee = product.ProductTitle;

const name = document.getElementById('name');
const phone = document.getElementById('phone');
const adress = document.getElementById('adress');
const fulladress = document.getElementById('fulladresse');
const btn_add_product =  document.getElementById('add_product');




btn_add_product.addEventListener('click',IseMPTY);




function IseMPTY()
{
    if (name.value=="" || phone.value=="" || adress.value==""|| fulladress.value=="") 
    {
        alert("Please Fill All Required Field");
        
    }

    if(phone.value.length<10 || phone.value.length>10)
    {
        alert("Invalid number");
    }

    else{
        UploadOrder();
    }
}


 


    
      
    
function UploadOrder()
 {
    
    set (ref(realdb,"Orders/"+getShortTitle()),
    {
        

        name : name.value,
        phone  : phone.value,
        adress  : adress.value,
        fulladress  : fulladress.value,
        ProductTilee : product.ProductTitle,
        ProductPrice : product.Price,
        ProductImg : product.LinksOfImagesArray[0],
        
       

    });
   
    
    
    alert("Thank you for your Purshase");
 }


 let counter = 0;

 function getShortTitle(orders)
 {

 
   
      return --counter;
      
    
    
}




 
