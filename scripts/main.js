const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/images/firefox-icon.png") {
    myImage.setAttribute("src", "/images/GQXO4915.JPG");
  } else {
    myImage.setAttribute("src", "/images/firefox-icon.png");
  }
}

/*Selecting the html button and h1 tag */
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/* Function to set user's name in local storage and update the heading. This function first checks if theres no "name" value saved in local storage. If there isnt, the prompt wont close until a name is entered */
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
  localStorage.setItem("name", myName);
  myHeading.textContent =`Mozilla is cool, ${myName}`;
  }
}

/* initialization code, as it structures the app when it first loads. */
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};