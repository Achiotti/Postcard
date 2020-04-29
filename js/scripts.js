$(document).ready(function() {
  var height = parseInt(prompt("Enter your height in inches,"));



  if (height >= 61) {
    $("#tall").show();
  }
    else {
      $("#short").show();
    }
  
});
