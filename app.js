const menu=document.querySelector('.ham');
const options=document.querySelector('.links');
menu.addEventListener('click',()=>{
    options.classList.toggle("hidden_Menu");
})