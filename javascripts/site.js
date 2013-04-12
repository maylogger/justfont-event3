$(function() {

$("body").click(function () {
  $(this).toggleClass("hide-grid");
});

init();

$(window).resize(function(){
  init();
});

});

function init(){
  var baseWidth = $(".square").width()
  $(".square").css( "height", baseWidth );
  $(".left-top").css( "border-width", baseWidth + "px " + baseWidth + "px 0 0");
  $(".circle-top").css( "height", baseWidth / 2 );
}
