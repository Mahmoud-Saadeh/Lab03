var userName = prompt("Please write your name here:");
document.write(
  "<h2>Hello " + userName + " i hope you will enjoy reading this article</h2>"
);
document.getElementById("body").style.backgroundColor = "white";

var userColor = prompt("Choose a color for the background of the page:");
document.getElementById("body").style.backgroundColor = userColor;

document.getElementById("button").addEventListener("click", function () {
  var userFontSize = prompt(
    "Change the size of the Structural Engineering title:"
  );
  console.log(userFontSize);
  console.log(typeof parseInt(userFontSize));
  document.getElementById("first-title").style.fontSize = userFontSize + "px";
});

var favouriteLanguage = prompt(
  "Between Python and Javascript What do you prefer:"
);
while (favouriteLanguage !== "Python" && favouriteLanguage !== "Javascript") {
  var favouriteLanguage = prompt("Please choose Python or Javascript");
}
var languageImage = "";
if (favouriteLanguage === "Python") {
  languageImage =
    "<img src='https://cdn.pixabay.com/photo/2015/12/09/15/51/code-1084923__340.png' alt=" +
    favouriteLanguage +
    "/><br/>";
} else if (favouriteLanguage === "Javascript") {
  languageImage =
    "<img src='https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__340.png' alt=" +
    favouriteLanguage +
    "/><br/>";
}

document.write(languageImage);

// https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg

var count = prompt("How many buildings do you want:");
var imageCount = "";
for (var i = 0; i < count; i++) {
  imageCount +=
    "<img src='https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg' alt=building/><br/>" +
    (i + 1) +
    "<br/>";
}

document.write(imageCount);
