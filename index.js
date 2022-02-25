
const states = [
    {
        state: "Abia",
        capital: "Umuahia"
    },
    {
        state: "Adamawa",
        capital: "Yola"
    },
    {
        state: "Akwa Ibom",
        capital: "Uyo"
    },
    {
        state: "Anambra",
        capital: "Awka"
    },
    {
        state: "Bauchi",
        capital: "Bauchi"
    },
    {
        state: "Bayelsa",
        capital: "Yenagoa"
    },
    {
        state: "Benue",
        capital: "Makurdi"
    },
    {
        state: "Borno",
        capital: "Maiduguri"
    },
    {
        state: "Cross River",
        capital: "Calabar"
    },
    {
        state: "Delta",
        capital: "Asaba"
    },
    {
        state: "Ebonyi",
        capital: "Abakaliki"
    },
    {
        state: "Edo",
        capital: "Benin City"
    },
    {
        state: "Ekiti",
        capital: "Ado - Ekiti"
    },
    {
        state: "Enugu",
        capital: "Enugu"
    },
    {
        state: "Gombe",
        capital: "Gombe"
    },
    {
        state: "Imo",
        capital: "Owerri"
    },
    {
        state: "Jigawa",
        capital: "Dutse"
    },
    {
        state: "Kaduna",
        capital: "Kaduna"
    },
    {
        state: "Kano",
        capital: "Kano"
    },
    {
        state: "Katsina",
        capital: "Katsina"
    },
    {
        state: "Kebbi",
        capital: "Birnin Kebbi"
    },
    {
        state: "Kogi",
        capital: "Lokoja"
    },
    {
        state: "Kwara",
        capital: "Ilorin"
    },
    {
        state: "Lagos",
        capital: "Ikeja"
    },
    {
        state: "Nasarawa",
        capital: "Lafia"
    },
    {
        state: "Niger",
        capital: "Minna"
    },
    {
        state: "Ogun",
        capital: "Abeokuta"
    },
    {
        state: "Ondo",
        capital: "Akure"
    },
    {
        state: "Osun",
        capital: "Osogbo"
    },
    {
        state: "Oyo",
        capital: "Ibadan"
    },
    {
        state: "Plateau",
        capital: "Jos"
    },
    {
        state: "Rivers",
        capital: "Port Harcourt"
    },
    {
        state: "Sokoto",
        capital: "Sokoto"
    },
    {
        state: "Taraba",
        capital: "Jalingo"
    },
    {
        state: "Yobe",
        capital: "Damaturu"
    },
    {
        state: "Zamfara",
        capital: "Gusau"
    },
]

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
// let states = Array.from(document.querySelectorAll(".states").data("number"));




secondBtn.addEventListener('click', letsPlay)
function letsPlay() {



    let player = userName.value;
    sessionStorage.setItem("playerName", userName.value)

    let playerState = userState.value;
    sessionStorage.setItem("playerState", userState.value)

    const getCapital = states.find(stateObj => playerState === stateObj.state )
    console.log("capital of player is", getCapital)

    


    console.log("This is the player state ", playerState)
    
    theName.innerHTML = player;
    theState.innerHTML = playerState;
    theCapital.innerHTML = getCapital.capital;
    theStateAgain.innerHTML = playerState;

    console.log("this is the list of the states",states)
      

   
    
    
    firstPage.hidden = true;
    secondPage.hidden = true;
    thirdPage.hidden = false;
}



/*------ Hidden Home Pages -------*/


  
firstBtn.onclick = function() {
    firstPage.hidden = true;
    secondPage.hidden = false;
  }

