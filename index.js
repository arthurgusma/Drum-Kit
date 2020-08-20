var key = document.querySelectorAll(".drum");

for (var i = 0; i < key.length; i++)
  key[i].addEventListener("click", function() {
      var buttonInnerHtml = this.innerHTML;
      playSound(buttonInnerHtml);
  });


document.addEventListener("keydown", function(press) {
  var keyPressed = press.key;
  playSound(keyPressed);
});


function playSound(event) {
  switch (event) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio("sounds/tom-1.mp3");
      audio4.play();
      break;
    case "j":
      var audioCrash = new Audio("sounds/crash.mp3");
      audioCrash.play();
      break;
    case "k":
      var audioKick = new Audio("sounds/kick-bass.mp3");
      audioKick.play();
      break;
    case "l":
      var audioSnare = new Audio("sounds/snare.mp3");
      audioSnare.play();
      break;
    default:
      console.log(event)
    }
  }
