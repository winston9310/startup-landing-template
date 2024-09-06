(function() {
  "use strict"; // inicio de use strict

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    // colapse
    var collapseNavbar = function() {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // colapsa sila pagina no esta top
    collapseNavbar();
    // colapsa cuando esta scroll
    document.addEventListener("scroll", collapseNavbar);
  }

})(); // finalt

