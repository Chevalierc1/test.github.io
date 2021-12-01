let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.jpg') {
      myImage.setAttribute('src', 'images/firefox2.jpg');
      } else {
        myImage.setAttribute('src', 'images/firefox-icon.jpg');
      }
  }); /* En cours, n'arrive pas à charger la deuxième image */
  
  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Bienvenue à vous, ' + myName;
  }
  
  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Bienvenue à vous, ' + storedName;
  }
  
  myButton.addEventListener('click', function() {
    setUserName();
  });




