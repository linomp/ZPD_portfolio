$("#events").on("click", function(){
    $(this).css("color", "purple"); 
}); 


/*
(function ($, window, document, undefined) {

  $(function () {
    $("#navbar_div").load("navbar.html");
    $("#footer_div").load("footer.html");
  });

})(jQuery, window, document);
*/


$(document).ready(function(){
    $( "#navbar_div" ).load( "./navbar.html");
    $("#footer_div").load("./footer.html");
});