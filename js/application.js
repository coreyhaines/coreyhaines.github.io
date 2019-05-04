// Your JavaScript
    function getColor() {
      var urlParams = new URLSearchParams(window.location.search);
      if(urlParams.has('color')) {
        return "#" + urlParams.get('color');
      }else{
        return "#000000";
      }
    }
    function getSize() {
      var urlParams = new URLSearchParams(window.location.search);
      if(urlParams.has('size')) {
        return urlParams.get('size');
      }else{
        return "100";
      }
    }
function draw() {
  const size = getSize();
  const canvas = document.getElementById('canvas');
  canvas.width = size;
  canvas.height = size;
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = getColor();
    ctx.fillRect(0, 0, size, size);
  }
}
