function myFunction(x) {
    if (x.matches) { // If media query matches
      var iconCL = $('#iconCL').removeClass("fa-th-large");
      iconCL.addClass("fa-sign-in-alt");
      document.getElementById('txtCategory-login').innerHTML = "Login";
    } else {
        var iconCL = $('#iconCL').removeClass("fa-sign-in-alt");
        iconCL.addClass("fa-th-large");
        document.getElementById('txtCategory-login').innerHTML = "Category";
    }
  }
  
  var x = window.matchMedia("(max-width: 600px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)