const startButton = document.getElementById("startButton");
const introContainer = document.getElementById("introContainer");
const introText = document.getElementById("introText");
const questionContainer = document.getElementById("questionContainer");
const question = document.getElementById("question");
const answersList = document.getElementById("answers");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
const americaHymnButton = document.getElementById("americaHymn");
const stopHymnButton = document.getElementById("stopHymn");


const americaHymnAudio = new Audio("zvuklesa.mp3"); 

americaHymnButton.addEventListener("click", () => {
    americaHymnAudio.play();
});


stopHymnButton.addEventListener("click", () => {
    americaHymnAudio.pause();
});



const questions = [
    {
        questionText: "Co je hlavním cílem ochrany přírody a krajiny?",
        answers: [
            { text: "Ochrana biodiverzity a přirozeného prostředí", correct: true },
            { text: "Rozvoj průmyslu", correct: false },
            { text: "Zvyšování turistického ruchu", correct: false },
            { text: "Budování městské infrastruktury", correct: false }
        ]
    },
    {
        questionText: "Jaký je význam chráněných území pro přírodu?",
        answers: [
            { text: "Chráněná území slouží k ochraně ohrožených druhů a ekosystémů, umožňují vědecký výzkum a poskytují rekreační možnosti pro veřejnost.", correct: true },
            { text: "Chráněná území jsou určena pouze pro rekreaci a zábavu.", correct: false }
        ]
    },
    {
        questionText: "Kdy byl v České republice založeno první národní park?",
        answers: [
            { text: "1. března 1956", correct: true },
            { text: "15. června 1960", correct: false },
            { text: "22. září 1973", correct: false },
            { text: "10. května 1985", correct: false }
        ]
    },
    {
        questionText: "Jaký je význam mokřadů pro životní prostředí?",
        answers: [
            { text: "Mokřady jsou vhodné pro výstavbu nových obytných čtvrtí.", correct: false },
            { text: "Mokřady zadržují vodu, filtrují znečištění a poskytují stanoviště pro různé druhy rostlin a živočichů.", correct: true }
        ]
    },
    {
        questionText: "Jaké jsou hlavní příčiny ztráty biodiverzity?",
        answers: [
            { text: "Zvýšená turistická návštěvnost a urbanizace.", correct: false },
            { text: "Zemědělství, odlesňování, změna klimatu, znečištění a invazivní druhy.", correct: true }
        ]
    },
    {
        questionText: "Kdo je zodpovědný za ochranu přírody v České republice?",
        answers: [
            { text: "Ministerstvo životního prostředí", correct: true },
            { text: "Ministerstvo obrany", correct: false },
            { text: "Ministerstvo průmyslu a obchodu", correct: false },
            { text: "Ministerstvo dopravy", correct: false }
        ]
    },
    {
        questionText: "Jaký je význam recyklace pro ochranu přírody?",
        answers: [
            { text: "Recyklace zvyšuje spotřebu energie.", correct: false },
            { text: "Recyklace snižuje množství odpadu, šetří přírodní zdroje a snižuje znečištění životního prostředí.", correct: true }
        ]
    },
    {
        questionText: "Co je Natura 2000?",
        answers: [
            { text: "Evropská síť chráněných území zaměřená na ochranu nejcennějších a nejohroženějších druhů a stanovišť.", correct: true },
            { text: "Mezinárodní smlouva o ochraně klimatu.", correct: false }
        ]
    },
    {
        questionText: "Proč je důležitá ochrana lesů?",
        answers: [
            { text: "Lesy jsou důležité pouze pro těžbu dřeva.", correct: false },
            { text: "Lesy produkují kyslík, zadržují uhlík, poskytují stanoviště pro různé druhy a regulují vodní režim.", correct: true }
        ]
    },
    {
        questionText: "Co je ekosystémová služba?",
        answers: [
            { text: "Přínosy, které ekosystémy poskytují lidem, jako je čistá voda, opylování plodin a rekreace.", correct: true },
            { text: "Služby poskytované lidmi pro údržbu ekosystémů.", correct: false }
        ]
    },
    {
        questionText: "Které z následujících opatření napomáhá ochraně přírody?",
        answers: [
            { text: "Vysazování invazivních druhů rostlin", correct: false },
            { text: "Snížení používání plastů a chemikálií", correct: true },
            { text: "Odvodňování mokřadů", correct: false },
            { text: "Masivní odlesňování", correct: false }
        ]
    },
    {
        questionText: "Co je cílem programů pro obnovu krajiny?",
        answers: [
            { text: "Obnovit poškozené ekosystémy, zvýšit biodiverzitu a zlepšit kvalitu života místních obyvatel.", correct: true },
            { text: "Zvýšit urbanizaci a průmyslovou činnost.", correct: false }
        ]
    },
    {
        questionText: "Jak může jednotlivec přispět k ochraně přírody?",
        answers: [
            { text: "Recyklací, šetřením energie a vody, podporou ochrany přírody a udržitelným způsobem života.", correct: true },
            { text: "Zvýšenou spotřebou a produkcí odpadu.", correct: false }
        ]
    },
    {
        questionText: "Co je biologická rozmanitost (biodiverzita)?",
        answers: [
            { text: "Biodiverzita je rozmanitost všech živých organismů včetně rostlin, živočichů, hub a mikroorganismů v ekosystémech.", correct: true },
            { text: "Biodiverzita je počet druhů zvířat v zoo.", correct: false }
        ]
    },
    {
        questionText: "Jaký je význam chráněných druhů pro ekosystémy?",
        answers: [
            { text: "Chráněné druhy často hrají klíčovou roli v udržování stability a funkčnosti ekosystémů.", correct: true },
            { text: "Chráněné druhy nemají žádný význam pro ekosystémy.", correct: false }
        ]
    },
    {
        questionText: "Proč je důležité omezit používání plastů?",
        answers: [
            { text: "Plasty se rozkládají velmi pomalu, způsobují znečištění životního prostředí a ohrožují mořský život.", correct: true },
            { text: "Plasty jsou biologicky rozložitelné a neškodné.", correct: false }
        ]
    },
    {
        questionText: "Jak mohou zemědělské praktiky ovlivnit ochranu přírody?",
        answers: [
            { text: "Intenzivní zemědělství nemá žádný vliv na přírodu.", correct: false },
            { text: "Šetrné zemědělské praktiky mohou podporovat ochranu půdy, vody a biodiverzity.", correct: true }
        ]
    },
    {
        questionText: "Co je to ekologická stopa?",
        answers: [
            { text: "Měření dopadu lidských činností na životní prostředí, zahrnující spotřebu zdrojů a produkci odpadu.", correct: true },
            { text: "Délka cesty, kterou člověk ujde za den.", correct: false }
        ]
    },
    {
        questionText: "Jaké jsou důsledky klimatických změn na přírodní ekosystémy?",
        answers: [
            { text: "Klimatické změny nemají žádný vliv na ekosystémy.", correct: false },
            { text: "Klimatické změny mohou vést k extrémním počasovým jevům, ztrátě stanovišť, migraci druhů a ohrožení biodiverzity.", correct: true }
        ]
    },
    {
        questionText: "Proč je důležité chránit ohrožené druhy?",
        answers: [
            { text: "Ohrožené druhy nemají žádný význam pro přírodu.", correct: false },
            { text: "Ohrožené druhy jsou klíčové pro udržení ekologické rovnováhy a zdraví ekosystémů.", correct: true }
        ]
    },
    {
        questionText: "Co je to udržitelný rozvoj?",
        answers: [
            { text: "Udržitelný rozvoj je způsob rozvoje, který uspokojuje současné potřeby bez ohrožení schopnosti budoucích generací uspokojit své vlastní potřeby.", correct: true },
            { text: "Udržitelný rozvoj je zvyšování spotřeby přírodních zdrojů.", correct: false }
        ]
    },
    {
        questionText: "Jaký je vztah mezi ochranou přírody a lidským zdravím?",
        answers: [
            { text: "Ochrana přírody nemá žádný vliv na lidské zdraví.", correct: false },
            { text: "Zdravé ekosystémy poskytují čistou vodu, vzduch a potraviny, a tím přispívají k lidskému zdraví a pohodě.", correct: true }
        ]
    }
];


let currentQuestionIndex = 0;
let correctAnswers = 0;

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    introContainer.style.display = "block";
    introContainer.style.animation = "fadeIn 2s";
    

    setTimeout(() => {
        introContainer.style.animation = ""; 
        introContainer.style.display = "none";
        questionContainer.style.display = "block";
        questionContainer.style.animation = "slideIn 1s"; 
        
        setTimeout(() => {
            showQuestion(currentQuestionIndex);
        }, 1000); 
    }, 20000); 
});

function showQuestion(questionIndex) {
    questionContainer.style.animation = "slideIn 1s";
    const currentQuestion = questions[questionIndex];
    question.innerText = currentQuestion.questionText;
    answersList.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const answerItem = document.createElement("li");
        answerItem.innerHTML = `<input type="radio" name="answer" value="${index}"> ${answer.text}`;
        answersList.appendChild(answerItem);
    });

    checkButton.disabled = false;
}

checkButton.addEventListener("click", () => {
    const selectedAnswerInput = document.querySelector("input[name='answer']:checked");

    if (!selectedAnswerInput) {
        result.textContent = "Vyberte odpověď.";
        return;
    }

    const selectedAnswerIndex = parseInt(selectedAnswerInput.value);
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.answers[selectedAnswerIndex].correct) {
        correctAnswers++;
        result.textContent = "Správně!";
    } else {
        result.textContent = "Chyba, správná odpověď je: " + currentQuestion.answers.find(answer => answer.correct).text;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        checkButton.disabled = true;
        const totalQuestions = questions.length;

        let finalMessage = `Konec hry! Správných odpovědí: ${correctAnswers}/${totalQuestions}. `;

        if (correctAnswers <= 10) {
            finalMessage += "Něco o životním prostředí víš, ale chce to ještě trénovat.";
        } else if (correctAnswers > 10 && correctAnswers <= 15) {
            finalMessage += "Jsi na tom dobře, víš o životním prostředí celkem dost, ale můžeš být ještě lepší.";
        } else if (correctAnswers > 15 && correctAnswers <= 20) {
            finalMessage += "Jsi fakt špička. O životním prostředí toho víš hodně moc, a patří ti velká gratulace.";
        } else if (correctAnswers === 22) {
            finalMessage += "Jsi doslova hacker. Ani jedna špatná odpověď. Máš znalosti o kterých si ostatní můžou nechat zdát.";
        }

        result.textContent = finalMessage;
    }
});


startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    introContainer.style.display = "block";
    introText.innerText = "Cítím vůni lesa. Tak teď musíme dělat vše proto, abychom si ten les udrželi. Zodpovězte tedy, co víte o ochraně krajiny.";
    setTimeout(() => {
        introContainer.style.display = "none";
        questionContainer.style.display = "block";
        showQuestion(currentQuestionIndex);
    }, 10000); // 10000 ms = 10 sekund
});
