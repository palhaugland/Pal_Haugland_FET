$(document).ready(function() {
    $(".about p").text("I love a fresh new brew");
    $(".about p:last").text("In my opinion, a cup of coffee is best enjoyed outside");
    $(".aboutme").text("I am Pål Haugland, the code master");

    $("#about").on({
        click: function(){
            $(this).css("background-color", "powderblue");
            $(this).css("color", "white");
        }
    })
});

