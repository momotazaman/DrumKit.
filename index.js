var choosebutton = document.querySelectorAll(".drum");
for (var i = 0; i < choosebutton.length; i++) {
  choosebutton[i].addEventListener("click", function() {
    var buttonhtml = this.innerHTML;
    makesound(buttonhtml);
    buttonanimation(buttonhtml);
  });
}
document.addEventListener("keydown", function(event) {
  makesound(event.key);
  buttonanimation(event.key);
});
function makesound(key){
  switch (key) {
    case "w":
      crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;
    case "s":
      snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(buttonhtml);
  }
}
function buttonanimation(currentkey){
var activebutton = document.querySelector("."+ currentkey);
    activebutton.classList.add("pressed");
setTimeout(function(){
  activebutton.classList.remove("pressed");
}, 100);

}
