$(document).ready(function() {
  function toggleTextSize() {
    var isToggleOn = $("#accessToggle").is(":checked");
    if (isToggleOn) {
      $("p").css("font-size", "120%");
    } else {
      $("p").css("font-size", "");
    }
  }
  $("#accessToggle").on("change", toggleTextSize);
});