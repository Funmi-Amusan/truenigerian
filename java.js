/* ------------- Name and State  -------------*/

const firstBtn = document.getElementById('playbtn');
const secondBtn = document.querySelector("#storevar");
const firstPage = document.getElementById('firstpage');
const secondPage = document.getElementById('secondpage');
const thirdPage = document.getElementById('thirdpage');
let userName = document.querySelector("#username");
let theName = document.querySelector("#thename");
let userState = document.querySelector("#userstate");
let theState = document.querySelector("#thestate");
let theStateAgain = document.querySelector("#thestateagain");
let theCapital = document.querySelector("#thecapital");

secondBtn.addEventListener('click', letsPlay)
function letsPlay() {
    theName.innerHTML = userName.value;
    theState.innerHTML = userState.value;
    theStateAgain.innerHTML = userState.value;
    theCapital.innerHTML = userState.dataset['capital'];

    firstPage.hidden = true;
    secondPage.hidden = true;
    thirdPage.hidden = false;
}

/*------ Hidden Home Pages -------*/


  
firstBtn.onclick = function() {
    firstPage.hidden = true;
    secondPage.hidden = false;
  }
