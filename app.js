document.addEventListener('mousemove', (e) => {
    var eyes = document.querySelectorAll(".eye");
    eyes.forEach(eye => {
      var rect = eye.getBoundingClientRect();
      var x = rect.left + (rect.width / 2);
      var y = rect.top + (rect.height / 2);
      var rad = Math.atan2(e.x - x, e.y - y);
      var deg = (rad * (180 / Math.PI) * -1) + 180;
      eye.style.transform="rotate(" + deg + "deg)";
    });
    
    
  });