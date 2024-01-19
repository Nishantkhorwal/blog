// const { options } = require("nodemon/lib/config");
// const dropdowns = document.querySelectorAll('.dropdown');
// dropdowns.forEach(dropdown =>{
//     const select = dropdown.querySelector('.select'); 
//     // const caret = dropdown.querySelector('.caret'); 
//     const menu = dropdown.querySelector('.menu'); 
//     const options = dropdown.querySelectorAll('.menu li'); 
//     const selected = dropdown.querySelector('.selected');
    
//     select.addEventListener( 'click', ()=>{
//       select.classList.toggle('select-clicked');
//       select.classList.toggle('menu-open');
// });
//     options.forEach(option =>{
//       option.addEventListener( 'click', ()=>{
//           selected.innerText= option.innerText;
//           select.classList.remove('select-clicked');
//           menu.classList.remove('menu-open');
//           options.forEach(option =>{
//             option.classList.remove('active');
//           });
//           option.classList.add('active');
//       });
//    });
// });
let subMenu = document.getElementById("submenu");
function toggleMenu(){
  subMenu.classList.toggle("menu-open");
}
let ang = document.getElementById("ang");
function rotate(){
  ang.classList.toggle("rotate");
}