function myFunction(x) {
    if (x.matches) {
     $(".categoryRes").removeAttr('data-toggle','dropdown');
      var iconCL = $('#iconCL').removeClass("fa-th-large");
      iconCL.addClass("fa-sign-in-alt");
      document.getElementById('txtCategory-login').innerHTML = "Login";
    } else {
      $(".categoryRes").attr('data-toggle','dropdown');
        var iconCL = $('#iconCL').removeClass("fa-sign-in-alt");
        iconCL.addClass("fa-th-large");
        document.getElementById('txtCategory-login').innerHTML = "Category";
    }
  }
  
  var x = window.matchMedia("(max-width: 992px)")
  myFunction(x)
  x.addListener(myFunction)
  
  