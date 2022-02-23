const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

finalScore.innerText = mostRecentScore


saveHighScores = () => {

    console.log("show my score");
    
    const player = sessionStorage.getItem("playerName");
    const playerState = sessionStorage.getItem("playerState");
    
    const score = {
        score: mostRecentScore,
        name: player,
        state: playerState,
        timeAgo: "Sometime Ago"
    }


    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(20)

    localStorage.setItem('highScores', JSON.stringify(highScores))

    
}

saveHighScores()