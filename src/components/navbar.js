
  import $ from "jquery";

export default function Navbar(){
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
    function disableScroll() {
        // Get the current page scroll position
      const  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
       const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      
            // if any scroll is attempted,
            // set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }
      
    function enableScroll() {
        window.onscroll = function() {};
    }
  
    const toggleBurger =() => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-items');
        const navLinks = document.querySelectorAll('.nav-link');
        nav.classList.toggle('nav-active');
        // Animate links
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = '';
          }
          else {
   
            link.style.animation = 'navLinkFade 0.5s ease forwards  1';
   
          }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
        if(burger.classList.contains("toggle")){
          disableScroll();
        }
        else {
            enableScroll();
        }

    }
   const closeNav=(event) =>{
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-items');
        if(window.innerWidth<1110){
          nav.classList.remove("nav-active");
          burger.classList.remove('toggle');
          window.onscroll= function () {};
        }
        console.log(event)
         // Make sure this.hash has a value before overriding default behavior
      
          // Prevent default anchor click behavior
          event.preventDefault();
          
          // Store hash
          var hash = "#"+event.target.href.split("#")[1];

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
     
      }
    
    
    return(
        <nav
        style={{
          opacity: 1,
          background: "rgba(217, 217, 217, 0.03)",
          boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.1)",
        }}
      >
        <a href="https://www.ecellnitb.com">
          <img className="logo" id="logo-1" src="Images/logo.png" />
        </a>
        <ul className="nav nav-items" style={{ textTransform: "uppercase" }}>
          <li className="nav-link">
            <a href="#large-header" onClick={closeNav}>home</a>
          </li>
          <li className="nav-link">
            <a href="#section-2" onClick={closeNav}>About Us</a>
          </li>
          <li className="nav-link">
            <a href="#section-5" onClick={closeNav}>Timeline</a>
          </li>
          <li className="nav-link">
            <a href="#section-4" onClick={closeNav}>Verticals</a>
          </li>
          <li className="nav-link">
            <a href="#section-form" onClick={closeNav}>Register Now</a>
          </li>
        </ul>
        <div className="burger" onClick={toggleBurger}>
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </nav>
    )
}