const menuBtn = document.querySelector('.menu'); 
// console.log('menuBtn', menuBtn)
const navItem = document.querySelector('.nav-items');
// console.log('navItem', navItem)
menuBtn.addEventListener("click", function(){
    // alert('Menu button clicked');
    // console.log('hello click')
    navItem.classList.toggle('show');
    if(navItem.classList.contains('show')) {
        menuBtn.src = './photos/icons/cross.svg';
    } else {
        menuBtn.src = './photos/icons/menu.svg';
    }

})