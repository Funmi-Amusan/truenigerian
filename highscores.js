const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []




highScoresList.innerHTML =
highScores.map(score => {
    return `<div class="high-score"> <div> ${score.name} </div> <div> ${score.state} </div>  <div> ${score.score} </div> <div> ${score.timeAgo} </div> </div>`
}).join("")

let allScores = highScores.map(score => {
    return `${score.score}`
})
console.log(allScores)

let arrangedScores = allScores.sort()

console.log(arrangedScores)
