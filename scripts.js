$(window).mousemove(function(event) {
  var translateX = -((event.pageX - 1000) * 0.3);
  var translateY = -((event.pageY - 1000) * 0.3);
  $("#block").css({
    "transform": "translate(" + translateX + "px, " + translateY + "px)"
  });
});

function openSideNav() {
  $("#offCanvasNav").css({
    "width": "250px",
    "border-left": "5px solid #000000"
  });
  $("#grayBlock").css({
    "display": "block"
  });
}

function closeSideNav() {
  $("#offCanvasNav").css({
    "width": "0px",
    "border": "none"
  });
  $("#grayBlock").css({
    "display": "none"
  });
}
