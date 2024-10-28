//mmenu

document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector( "#menu" )
        );

        const navigator = menu.navigation();
        const drawer = menu.offcanvas();

        document.querySelector( 'a[href="#menu"]' )
            .addEventListener( 'click', ( evnt ) => {
                evnt.preventDefault();
                drawer.open();
            });
    }
);



// function removeClassOnResize() {
//     const element = document.querySelector('.my_card_clip'); 
//     const className = "bg-transparent"; 
  
//     if (window.innerWidth >= 750) {
//       element.classList.remove(className);
//     }
//     else {
//         element.classList.add(className);
//       }
//   }
  
//   removeClassOnResize();

//   window.addEventListener("resize", removeClassOnResize);
  

//set height for train




//document.addEventListener('onload', myfunc=()=>{
//     var train_height=document.querySelector('.train_bg');
// train_height.style.height=document.querySelector('.abs_container').clientHeight+"px";
//})

//outter_price_bg height
// var train_height=document.querySelector('.outter_price_bg');
// train_height.style.height=document.querySelector('.cards_pricing').clientHeight+180+"px";
//pack and g0
// var train_height=document.querySelector('.bg_container');
// train_height.style.height=document.querySelector('.container_outter_pack_go').clientHeight-110+"px";

//go explore height
// var train_height=document.querySelector('.go_explore');
// train_height.style.height=document.querySelector('.container_outter_pack_go').clientHeight+"px";