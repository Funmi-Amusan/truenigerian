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
let states = Array.from(document.querySelectorAll(".states"));




secondBtn.addEventListener('click', letsPlay)
function letsPlay() {

    let player = userName.value;
    sessionStorage.setItem("playerName", userName.value)

    theName.innerHTML = player;
    theState.innerHTML = userState.value;
    theStateAgain.innerHTML = userState.value;

    states.forEach(state => {
        let currentQuestion = {}
        const indexNumber = state.dataset['number']
        Index = indexNumber
        const capital = state.dataset['capital']
        /* console.log(Index) */
        let availableQuestions = capital
        let availableQuestion = availableQuestions
        console.log(availableQuestions) 
        currentQuestion = availableQuestions[Index]
        console.log(availableQuestions[Index])
        
       
        theCapital.innerHTML = currentQuestion

    
    })

  
    console.log(availableQuestions)
    
    firstPage.hidden = true;
    secondPage.hidden = true;
    thirdPage.hidden = false;
}

letsPlay()







/*------ Hidden Home Pages -------*/


  
firstBtn.onclick = function() {
    firstPage.hidden = true;
    secondPage.hidden = false;
  }
