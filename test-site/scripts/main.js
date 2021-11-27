let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mayBom1.jfif') {
      myImage.setAttribute('src','images/mayBom2.jpg');
    } else {
      myImage.setAttribute('src','images/mayBom1.jfif');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Chào bạn, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Chào bạn, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}