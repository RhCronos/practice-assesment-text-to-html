// navbar scroll background change code start
//const navbar = document.querySelector('#navbar');
//window.onscroll = () => {
 //   if (window.scrollY > 100) {
 //       navbar.classList.add('nav-active');
   // } else {
   //     navbar.classList.remove('nav-active');
   // }
//};
// navbar scroll background change code end


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 0px";
    document.getElementById("logo").style.height = "49px";
	document.getElementById("logo").style.width = "50px";
  } else {
    document.getElementById("navbar").style.padding = "100px 10px";
    document.getElementById("logo").style.height = "170px";
	document.getElementById("logo").style.width = "173px";

  }
}
