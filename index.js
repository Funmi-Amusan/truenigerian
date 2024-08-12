import { states } from "./states";

const firstBtn = document.getElementById("playbtn");
const secondBtn = document.querySelector("#storevar");
const firstPage = document.getElementById("firstpage");
const secondPage = document.getElementById("secondpage");
const thirdPage = document.getElementById("thirdpage");
let userName = document.querySelector("#username");
let theName = document.querySelector("#thename");
let userState = document.querySelector("#userstate");
let theState = document.querySelector("#thestate");
let theStateAgain = document.querySelector("#thestateagain");
let theCapital = document.querySelector("#thecapital");

secondBtn.addEventListener("click", letsPlay);
function letsPlay() {
    let player = userName.value;
    sessionStorage.setItem("playerName", userName.value);

    let playerState = userState.value;
    sessionStorage.setItem("playerState", userState.value);

    const getCapital = states.find(
        (stateObj) => playerState === stateObj.state
    );

    theName.innerHTML = player;
    theState.innerHTML = playerState;
    theCapital.innerHTML = getCapital.capital;
    theStateAgain.innerHTML = playerState;

    firstPage.hidden = true;
    secondPage.hidden = true;
    thirdPage.hidden = false;
}

firstBtn.onclick = function () {
    firstPage.hidden = true;
    secondPage.hidden = false;
};
