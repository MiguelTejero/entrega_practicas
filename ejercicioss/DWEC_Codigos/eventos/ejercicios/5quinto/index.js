pablo.onmousedown = function(event) {
    pablo.style.position = 'absolute';
    pablo.style.zIndex = 1000;
  
    document.body.append(pablo);
  
    function moveAt(pageX, pageY) {
      pablo.style.left = pageX - pablo.offsetWidth / 2 + 'px';
      pablo.style.top = pageY - pablo.offsetHeight / 2 + 'px';
    }
  
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    document.addEventListener('mousemove', onMouseMove);
  
    pablo.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      pablo.onmouseup = null;
    };
  
  };