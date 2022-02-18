var a = ["w", "a", "s", "d", "j", "k", "l"];
for (var x = 0; x <= a.length - 1; x++) {
  document.querySelectorAll("button.drum")[x].addEventListener("click", play);
  function play() {
    this.style.color = "white";
    var buttonClicked = this.innerHTML;
    makesound(buttonClicked);
  }
}

document.addEventListener("keypress", function (event) {
  console.log("called");
  alert("hi");
  makesound(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(innerHTML);
  }
}
