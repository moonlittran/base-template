window.addEventListener("resize", setSize);
function setSize(){
  var vw   = window.innerWidth / 100
  var vh   = window.innerHeight / 100
  var vmin = Math.min(vw, vh)
  var vmax = Math.max(vw, vh)
  document.documentElement.style.fontSize = ((vmin * 2) + (vmax * 1.4) + (vh * 2)) + "px";
};

setSize();
