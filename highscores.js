const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

highScores.sort()
console.log("highScores.sort()")


highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")

let allScores = highScores.map(score => {
    return `${score.score}`
})
console.log(allScores)

let arrangedScores = allScores.sort()

console.log(arrangedScores)

