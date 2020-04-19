function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById('category-login').innerHTML = "Login";
    } else {
    
        document.getElementById('category-login').innerHTML = "Categori";
    }
  }
  
  var x = window.matchMedia("(max-width: 600px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)