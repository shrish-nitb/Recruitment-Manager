// navbar shrink script starts here
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  let nav = document.getElementsByTagName("nav")[0].style;
  let logo1 = document.getElementById("logo-1").style;
 
  let navItem = document.getElementsByClassName("nav-items")[0].style;

  if(window.innerWidth>1110){
   
  
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      nav.height = "94px";
      logo1.height = "60px";
      logo1.width = "60px";
    
      navItem.marginTop = "22px";
    
     
      
    } else {
      nav.height = "132px";
      logo1.height = "94px";
      logo1.width = "94px";
      
      navItem.marginTop = "45px";
     
      
      
    }
  }

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.backgroundColor="rgb(20 20 20)";
     
      
  } else {
    nav.backgroundColor = "rgba(217, 217, 217, 0.03)";
         
  }
}


