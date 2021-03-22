var userName = prompt("Please write your name here:");

document.getElementById("body").style.backgroundColor = "white";

var userColor = prompt("Choose a color for the background of the page:");

greetingHandler(userName);

backgroundColorHandler(userColor);

document.getElementById("button").addEventListener("click", function () {
  var userFontSize = prompt(
    "Change the size of the Structural Engineering title:"
  );
  document.getElementById("first-title").style.fontSize = userFontSize + "px";
});

document.write(favouriteLanguageHandler());

// https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg

function counterHandler() {
  var count = prompt("How many buildings do you want:");
  var imageCount = "";
  for (var i = 0; i < count; i++) {
    imageCount +=
      "<img class='imageCount' src='https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg' alt=building/><br/>" +
      "<p class='imageCount'>" +
      (i + 1) +
      "</p>" +
      "<br/>";
  }
  return imageCount;
}

document.write(counterHandler());

function greetingHandler(userName) {
  document.write(
    "<h2>Hello " + userName + " i hope you will enjoy reading this article</h2>"
  );
}

function backgroundColorHandler(userColor) {
  document.getElementById("body").style.backgroundColor = userColor;
}

function favouriteLanguageHandler() {
  var favouriteLanguage = prompt(
    "Between Python and Javascript What do you prefer:"
  );
  while (favouriteLanguage !== "Python" && favouriteLanguage !== "Javascript") {
    var favouriteLanguage = prompt("Please choose Python or Javascript");
  }

  if (favouriteLanguage === "Python") {
    return (
      "<img src='https://cdn.pixabay.com/photo/2015/12/09/15/51/code-1084923__340.png' alt=" +
      favouriteLanguage +
      "/><br/>"
    );
  } else if (favouriteLanguage === "Javascript") {
    return (
      "<img src='https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__340.png' alt=" +
      favouriteLanguage +
      "/><br/>"
    );
  }
}
