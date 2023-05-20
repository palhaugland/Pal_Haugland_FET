$(document).ready(function(){
    $("#liveToastBtn").click(function(){
        $('#liveToast').toast("show");
    });
});

$("#boredBtn").click(function(){
    $.ajax({
        type: "GET",
        url: 'https://www.boredapi.com/api/activity/', 
        success: function(response){
            console.log(response)
        }
    })
  });