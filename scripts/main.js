let myHeading = document.querySelector('h1');

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/OneHandCut.jpg') {
      myImage.setAttribute('src', 'images/Waterwheel.jpg');
    } else {
      myImage.setAttribute('src', 'images/OneHandCut.jpg');
    }
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Enter your name:');
    if(!myName) {
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Hello ' + myName + '!';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello ' + storedName + '!';
}

myButton.onclick = function() {
    setUserName();
}