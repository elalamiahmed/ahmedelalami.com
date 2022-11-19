
const menuBtn = document.querySelector('#menu-btn');
const close = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');


menuBtn.addEventListener('click',() =>
{
 menu.style.display = 'block';
 menuBtn.style.display = 'none';
 close.style.display = 'inline-block';
})
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 close.addEventListener('click',()=>{
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    close.style.display = 'none';
 })


 const navItems = menu.querySelectorAll('li');
 const  changeActiveItem = () =>{
    navItems.forEach(item=>{
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
 }

 navItems.forEach(item =>
    {
    const link = item.querySelector('a');
    link.addEventListener('click',()=>{
        changeActiveItem();
       link.classList.add('active');
 })
    
 })

 