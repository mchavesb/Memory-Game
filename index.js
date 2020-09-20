// Procedure to get the game functionality.
var imgLength = document.querySelectorAll(".col-4").length;

for (var i = 0; i < imgLength; i++) {
  document.querySelectorAll(".col-4")[i].addEventListener("click", function() {
    var img = this;
    // Generate a Random Number.
    var randomNumber = Math.floor(Math.random() * 3) + 1;

    // Change the image.
    var randomimage = img.setAttribute("src", "images/" + randomNumber + ".png")

  });

}

document.querySelector("#container").addEventListener("click", function(event) {
  var imgSrc = event.target.getAttribute("src");
  prueba(imgSrc);
});

var panda = [];

var racoon = [];

var tiger = [];

function prueba(x) {
  switch (x) {
    case "images/1.png":
      panda.push(x);

      if (panda.length === 2) {
        alert("funciona");
      }
      break;

    case "images/2.png":
      racoon.push(x);

      if (racoon.length === 2) {
        alert("funciona");
      }
      break;

    case "images/3.png":
      tiger.push(x);

      if (tiger.length === 2) {
        alert("funciona");
      }
      break;


    default:

  }
}
