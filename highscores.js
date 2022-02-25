const highScoresList = document.querySelector('#highScoresList')
const totalScores = JSON.parse(localStorage.getItem("highScores")) || []
const filter = document.querySelector('input')
const red = document.querySelector('input:checked[type="checkbox"]')
let toggle, highScores = totalScores
// console.log(filter.checked)

const playerState = sessionStorage.getItem("playerState");
console.log(playerState)
let stateScores = totalScores.filter(score => score.state == playerState)
filter.addEventListener( "click", () => {
    toggle =filter.checked
    highScores = toggle ? stateScores: totalScores
    console.log(highScores)
    highScoresList.innerHTML =
highScores.map(score => {
    return `<div class="high-score"> <div> ${score.name} </div> <div> ${score.state} </div>  <div> ${score.score} </div> <div> ${score.timeAgo} </div> </div>`
}).join("")
})




       
console.log(stateScores)






highScoresList.innerHTML =
highScores.map(score => {
    return `<div class="high-score"> <div> ${score.name} </div> <div> ${score.state} </div>  <div> ${score.score} </div> <div> ${score.timeAgo} </div> </div>`
}).join("")








console.log("space")
console.log(highScores)

console.log("space")

let allScores = highScores.map(score => {
    return `${score.score}`
})
console.log(allScores)




let arrangedScores = allScores.sort()

console.log(arrangedScores)
