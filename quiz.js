const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll("#option"));
const scoreText = document.querySelector('#score');
const timerText = document.querySelector("#timer");
const skipBtn = document.querySelector("#skipquestion");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionsCounter = 0
let availableQuestions = []
let timerCounter

let questions = [
    {
        question: "Abia",
        choice1: "Osogbo",
        choice2: "Yola",
        choice3: "Umuahia",
        choice4: "Uyo",
        answer: 3,
    },
    {
        question: "Adamawa",
        choice1: "Awka",
        choice2: "Asaba",
        choice3: "Yola",
        choice4: "Gusau",
        answer: 3,
    },
    {
        question: "Oyo",
        choice1: "Jalingo",
        choice2: "Minna",
        choice3: "Bauchi",
        choice4: "Ibadan",
        answer: 4,
    },
    {
        question: "Edo",
        choice1: "Ado-Ekiti",
        choice2: "Enugu",
        choice3: "Benin-city",
        choice4: "Dutse",
        answer: 3,
    },
    {
        question: "Abia",
        choice1: "Osogbo",
        choice2: "Yola",
        choice3: "Umuahia",
        choice4: "Uyo",
        answer: 3,
    },
    {
        question : "Yobe",
        choice1 : "Abakaliki",
        choice2 : "Yenogoa",
        choice3 : "Makurdi",
        choice4 : "Damaturu",
        answer : 4,
    },
    {
        question: "Benue",
        choice1: "Calabar",
        choice2: "Owerri",
        choice3: "Birnin Kebbi",
        choice4: "Makurdi",
        answer: 4,
    },
    {
        question: "Kwara",
        choice1: "Minna",
        choice2: "Ilorin",
        choice3: "Ikeja",
        choice4: "Lafia",
        answer: 2,
    },
    {
        question: "Anambra",
        choice1: "Bauchi",
        choice2: "Jos",
        choice3: "Awka",
        choice4: "Port Harcourt",
        answer: 3,
    },
    {
        question: "Zamfara",
        choice1: "Gusau",
        choice2: "Jalingo",
        choice3: "Akure",
        choice4: "Minna",
        answer: 1,
    },
    {
        question: "Plateau",
        choice1: "Uyo",
        choice2: "Awka",
        choice3: "Jos",
        choice4: "Yenogoa",
        answer: 3,
    },
    {
        question: "Taraba",
        choice1: "Gusau",
        choice2: "Calabar",
        choice3: "Taraba",
        choice4: "Jalingo",
        answer: 4,
    },
    {
        question: "Sokoto",
        choice1: "Kaduna",
        choice2: "Ilorin",
        choice3: "Sokoto",
        choice4: "Lafia",
        answer: 3,
    },
    {
        question: "Osun",
        choice1: "Akure",
        choice2: "Abeokuta",
        choice3: "Ikeja",
        choice4: "Osogbo",
        answer: 4,
    },
    {
        question: "Ogun",
        choice1: "Akure",
        choice2: "Ilorin",
        choice3: "Abeokuta",
        choice4: "Birnin Kebbi",
        answer: 3,
    },
    {
        question: "Ekiti",
        choice1: "Ekiti",
        choice2: "Birnin Ekiti",
        choice3: "Ado Ekiti",
        choice4: "Ekiti City",
        answer: 3,
    },
    {
        question: "Enugu",
        choice1: "Abakaliki",
        choice2: "Owerri",
        choice3: "Enugu",
        choice4: "Asaba",
        answer: 3,
    },
    {
        question: "Kwara",
        choice1: "Kwara",
        choice2: "Lafia",
        choice3: "Ikeja",
        choice4: "Ilorin",
        answer: 4,
    },
    {
        question: "Delta",
        choice1: "Maiduguri",
        choice2: "Bayelsa",
        choice3: "Makurdi",
        choice4: "Asaba",
        answer: 4,
    },
    {
        question: "Cross River",
        choice1: "Calabar",
        choice2: "Port Harcourt",
        choice3: "Jos",
        choice4: "Uyo",
        answer: 1,
    },
    {
        question: "Bayelsa",
        choice1: "Bauchi",
        choice2: "Yenagoa",
        choice3: "Umuahia",
        choice4: "Yola",
        answer: 2,
    },
    {
        question: "Benue",
        choice1: "Benue",
        choice2: "Makurdi",
        choice3: "Jos",
        choice4: "Calabar",
        answer: 2,
    },
    {
        question: "Borno",
        choice1: "Uyo",
        choice2: "Makurdi",
        choice3: "Awka",
        choice4: "Maiduguri",
        answer: 4,
    },
    {
        question: "Gombe",
        choice1: "Lokoja",
        choice2: "Ilorin",
        choice3: "Dutse",
        choice4: "Gombe",
        answer: 4,
    },
    {
        question: "Kaduna",
        choice1: "Minna",
        choice3: "Ikeja",
        choice2: "Kaduna",
        choice4: "Benin City",
        answer: 3,
    },
    {
        question: "Kano",
        choice1: "Birnin Kano",
        choice2: "Ilorin",
        choice3: "Katsina",
        choice4: "Kano",
        answer: 4,
    },
    {
        question: "Katsina",
        choice1: "Birnin Kebbi",
        choice2: "Lafia",
        choice3: "Katsina",
        choice4: "Abeokuta",
        answer: 3,
    },
    {
        question: "Kogi",
        choice1: "Kogi",
        choice2: "Asaba",
        choice3: "Umuahia",
        choice4: "Lokoja",
        answer: 4,
    },
    {
        question: "Niger",
        choice1: "Minna",
        choice2: "Ilorin",
        choice3: "Gombe",
        choice4: "Yenagoa",
        answer: 1,
    },
    {
        question: "Ebonyi",
        choice1: "Enugu",
        choice2: "Abakaliki",
        choice3: "Owerri",
        choice4: "Ebonyi",
        answer: 2,
    },
    {
        question: "Jigawa",
        choice1: "Abeokuta",
        choice2: "Kaduna",
        choice3: "Dutse",
        choice4: "Jigawa",
        answer: 3,
    },
    {
        question: "Taraba",
        choice1: "Taraba",
        choice2: "Jalingo",
        choice3: "Damaturu",
        choice4: "Gusau",
        answer: 2,
    },
    {
        question: "Plateau",
        choice1: "Bauchi",
        choice2: "Jos",
        choice3: "Uyo",
        choice4: "Yola",
        answer: 2,
    },
    {
        question: "Kogi",
        choice1: "Lokoja",
        choice2: "Ilorin",
        choice3: "Ikeja",
        choice4: "Jalingo",
        answer: 1,
    },
    {
        question: "Bauchi",
        choice1: "Benin City",
        choice2: "Abakaliki",
        choice3: "Bauchi",
        choice4: "Asaba",
        answer: 3,
    },
    {
        question: "Imo",
        choice1: "Onitsha",
        choice2: "Calabar",
        choice3: "Benin City",
        choice4: "Owerri",
        answer: 4,
    },
    {
        question: "Lagos",
        choice1: "Ikeja",
        choice2: "Lagos",
        choice3: "Lekki",
        choice4: "Eko",
        answer: 1,
    },
    {
        question: "Ondo",
        choice1: "Abeokuta",
        choice2: "Akure",
        choice3: "Idanre",
        choice4: "Ondo",
        answer: 2,
    },
    {
        question: "Rivers",
        choice1: "Owerri",
        choice2: "Onitsha",
        choice3: "Osogbo",
        choice4: "Port Harcourt",
        answer: 4,
    },
    {
        question: "Kebbi",
        choice1: "Benin City",
        choice2: "Onitsha",
        choice3: "Birnin Kebbi",
        choice4: "Kebbi",
        answer: 3,
    },
]

const SCORE_POINTS = 10


startGame = () => {
    console.log('started')
    questionsCounter = 0
    score = 0
    startTimer(60)
    availableQuestions = [...questions]
    getNewquestions()
}

getNewquestions = () => {
    console.log('next question')

    questionsCounter++

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
        console.log(number)
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        
        
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 
        'wrong'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.classList.add(classToApply)
        

        setTimeout(() => {
            selectedChoice.classList.remove(classToApply)
            getNewquestions()
        }, 500) 
        })

    })

    incrementScore = num => {
        score +=num
        scoreText.innerText = score
    }

    skipBtn.addEventListener("click", () => {
        getNewquestions()
    
    })

    function startTimer(time) {
        timerCounter = setInterval(timer, 1000);
        function timer() {
            timerText.innerText = time;
            time--;
            if(time < 0) {
                clearInterval(timerCounter);
                timerText.innerText = "00"
                console.log("time up")
                localStorage.setItem('mostRecentScore', score)

                return window.location.assign('/end.html')
            }
        }
    }


    window.onload = startGame()

  
