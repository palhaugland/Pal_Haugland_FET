$(document).ready(function() {

    function contactBtn() {

      var email = prompt("Please enter your email address:");
      var phoneNumber = prompt("Please enter your telephone number:");
      var address = prompt("Please enter your address:");
  

      var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!emailRegex.test(email)) {
        alert("Invalid email address!");
        return;
      }

      var phoneNumberRegex = /^\d{8}$/;
      if(!phoneNumberRegex.test(phoneNumber)) {
        alert("Invalid phone number!");
        return;
      }
  
      $("#contactDetails .col-md-4:nth-child(2) p").text(email);
      $("#contactDetails .col-md-4:nth-child(1) p").text(phoneNumber);
      $("#contactDetails .col-md-4:nth-child(3) p").text(address);
  
      console.log("From: " + email);
      console.log("Contact: " + phoneNumber);
      console.log("Address: " + address);
    }
  
    $("#contact button").on("click", contactBtn);
  });
  