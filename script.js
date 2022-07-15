
setInterval(ball, 20);
  var keys = {}
  
  $(document).keydown(function(e) {
      keys[e.keyCode] = true;
  });
  
  $(document).keyup(function(e) {
      delete keys[e.keyCode];
  });
  
  function ball() {
      for (var direction in keys) {
          if (!keys.hasOwnProperty(direction)) continue;
          if (direction == 37) {
              $("#home").animate({left: "-=5"}, 0);                
          }
          if (direction == 38) {
              $("#home").animate({top: "-=5"}, 0);  
          }
          if (direction == 39) {
              $("#home").animate({left: "+=5"}, 0);  
          }
          if (direction == 40) {
              $("#home").animate({top: "+=5"}, 0);  
          }
      }
  }
    

    