const humburger = document.querySelector('.header .nav-bar .nav-list .humburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header =  document.querySelector('.header');

humburger.addEventListener('click',()=> {
    humburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if(top > 250) {
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }
}
menu_item.forEach(item=>{
    item.addEventListener('click',()=> {
        humburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})
