$(document).ready(function() {

    function contactBtn() {

      var email = prompt("Please enter your email address:");
      var telephone_number = prompt("Please enter your telephone number:");
      var address = prompt("Please enter your address:");
  

      var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!emailRegex.test(email)) {
        alert("Invalid email address!");
        return;
      }
  
      $("#contactDetails .col-md-4:nth-child(2) p").text(email);
      $("#contactDetails .col-md-4:nth-child(1) p").text(telephone_number);
      $("#contactDetails .col-md-4:nth-child(3) p").text(address);
  
      console.log("From: " + email);
      console.log("Contact: " + telephone_number);
      console.log("Address: " + address);
    }
  
    $("#contact button").on("click", contactBtn);
  });
  