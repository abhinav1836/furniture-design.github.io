// ?FUNCTION FOR NAVBAR SCROLL FEATURE
const elem=document.querySelectorAll(".bar");
$(document).ready(function(){
  $(window).bind('scroll',function(){
    var gap=50;
    if($(window).scrollTop()>gap){
      $('header').addClass('active');
      for(let i=0;i<elem.length;i++){
        elem[i].style.backgroundColor = "white";
      }

    }else{
      $('header').removeClass('active');
      for(let i=0;i<elem.length;i++){
        elem[i].style.backgroundColor = "black";
      }
    }
  });
});
  
// ? FOR HAMBURGER
const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".list-items");
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle ("active-ham");
  list.classList.toggle ("active-ham");
})

// ?add event listener to all links inside hamburger menu
const links = document.querySelectorAll(".list-items a");
links.forEach(link => {
  link.addEventListener("click", () => {
    // close hamburger menu
    hamburger.classList.remove("active-ham");
    list.classList.remove("active-ham");
  });
});