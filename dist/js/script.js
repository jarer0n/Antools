
;
let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};;

let menuArrow = document.querySelector(".menu-arrow");
let menuItem = document.querySelector('.submenu_list');
if(menuArrow){
    menuArrow.addEventListener('click', function(e){
        menuArrow.classList.toggle('active');
        menuItem.classList.toggle('active')
    })
}
window.onclick = function(e) {
    if (!e.target.matches('.menu-arrow',)) {
      let myDropdown = document.querySelector(".submenu_list");
        if (myDropdown.classList.contains('active')) {
          myDropdown.classList.remove('active');
          menuArrow.classList.remove('active');
        }
    }
  }


  //!BURGER                            //

const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    })
}


// //!CARDS likes..........................//

let like = document.querySelectorAll('.icon_like');

like.forEach(function(getLike){
  getLike.addEventListener('click', function(e){
    getLike.classList.toggle('active');
  })
})






