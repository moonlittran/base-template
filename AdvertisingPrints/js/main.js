//--------------------------- crop and bleed -----------------------------------

Array.prototype.slice.call(document.querySelectorAll('.page'))
  .forEach(function(page){
    var parser = new DOMParser();
    page.style.cssText = 'overflow: hidden; position: relative; height: 100vh; width: 100vw';

    //var cropString = '<div class="crop-marks"><div class="crop top-left"> <div class="bottom"></div> <div class="right"></div> </div> <div class="crop top-right"> <div class="bottom"></div> <div class="left"></div> </div> <div class="crop bottom-right"> <div class="top"></div> <div class="left"></div> </div> <div class="crop bottom-left"> <div class="top"></div> <div class="right"></div> </div></div>'
    
    var cropString = (
      '<div class="crop-marks">' + 
        '<img style="position: absolute; top: 0; left: 0;" src="crop.svg">' + 
        '<img style="transform: rotate(90deg); position: absolute; top: 0; right: 0;" src="crop.svg">' + 
        '<img style="transform: rotate(180deg); position: absolute; bottom: 0; right: 0;" src="crop.svg">' + 
        '<img style="transform: rotate(270deg); position: absolute; bottom: 0; left: 0;" src="crop.svg">' + 
      '</div>'
    )
  
    var cropNode = parser.parseFromString(cropString, "text/html").body.firstChild;
    !!window.showCrop && page.insertBefore(cropNode, null);
});

Array.prototype.slice.call(document.querySelectorAll('.bleed'))
  .forEach(function(bleed){
    bleed.style.cssText = !!window.showCrop ?
    'position: absolute; top: 4.41mm; right: 4.41mm; bottom: 4.41mm; left: 4.41mm;'
    :
    'position: absolute; top: -3mm; right: -3mm; bottom: -3mm; left: -3mm'
});

//--------------------------- scalable text -----------------------------------

window.addEventListener("resize", setSize);
function setSize(){
  var vw   = (showCrop ? window.innerWidth : window.innerWidth + 56) / 100
  var vh   = (showCrop ? window.innerHeight : window.innerHeight + 56) / 100
  var vmin = Math.min(vw, vh)
  var vmax = Math.max(vw, vh)
  document.documentElement.style.fontSize = ((vmin * 2) + (vmax * 1.4) + (vh * 2)) + "px";
};

setSize();
