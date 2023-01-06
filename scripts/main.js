// Click image
let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png')
        myImage.setAttribute('src', 'images/firefox2.png');
    else
        myImage.setAttribute('src', 'images/firefox-icon.png');
});

// Click button
let myHeading = document.querySelector('h1');

function setUserName(myName) {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('nom'))
    setUserName(prompt('Enter your name'));
else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

document.querySelector('button').addEventListener('click', function() {
    setUserName(prompt('Enter your name'));
});