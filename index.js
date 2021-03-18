var userName = prompt("Please write your name here:");
document.write(
  "<h2>Hallo " + userName + " i hope you will enjoy reading this article</h2>"
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
  var userFontNum = parseInt(userFontSize);
  document.getElementById("first-title").style.fontSize = userFontSize + "px";
});

var favouriteLanguage = prompt(
  "Beteen Python and javascript What do you prefer:"
);

if (favouriteLanguage === "Python") {
  document.write(
    "<img src='https://cdn.pixabay.com/photo/2015/12/09/15/51/code-1084923__340.png' alt=" +
      favouriteLanguage +
      "/>"
  );
} else {
  document.write(
    "<img src='https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__340.png' alt=" +
      favouriteLanguage +
      "/>"
  );
}
