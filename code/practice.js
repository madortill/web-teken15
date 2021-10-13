const DATA = { 
    // נוגדי אלרגיה
    "antiallergic": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `שאלה 1 מסתבר`,
                ans1: `תשובה לדוגמא`,
                ans2: `תשובה לדוגמא`,
                ans3: `תשובה לדוגמא`,
                ans4: `תשובה לדוגמא`,
                correctAns: `ans2`
            },
            {
                type: `multiple`,
                question: `שאלה 2 כנראה`,
                ans1: `תשובה נכונה`,
                ans2: `תשובה לא נכונה`,
                ans3: `אולי ;)`,
                ans4: `כדאי ללחוץ עליי`,
                correctAns: `ans1`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: ``,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: `ans1`
            },
            {
                type: `binary`,
                sentence: ``,
                trueOrFalse: false
            },
        ],
        "amountOfQuestions": 3,
    },
    // אנטיביוטיקה
    "antibiotics": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: ``,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: `ans1`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: ``,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: `ans1`
            },
            {
                type: `binary`,
                sentence: ``,
                trueOrFalse: false
            },
        ],
        "amountOfQuestions": 3,
    },
    // נשימה
    "breathing": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: ``,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: `ans1`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: ``,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: `ans1`
            },
            {
                type: `binary`,
                sentence: ``,
                trueOrFalse: false
            },
        ],
        "amountOfQuestions": 3,
    },
    // מחלות כרוניות
    "chronicDiseases": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: ``,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: `ans1`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: ``,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: `ans1`
            },
            {
                type: `binary`,
                sentence: ``,
                trueOrFalse: false
            },
        ],
        "amountOfQuestions": 3
    },
    // עיכול
    "digestion": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: ``,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: `ans1`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: ``,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: `ans1`
            },
            {
                type: `binary`,
                sentence: ``,
                trueOrFalse: false
            },
        ],
        "amountOfQuestions": 3
    },
    // משככי כאבים
    "painkillers": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: ``,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: `ans1`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: ``,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: `ans1`
            },
            {
                type: `binary`,
                sentence: ``,
                trueOrFalse: false
            },
        ],
        "amountOfQuestions": 3
    },
    // תרופות אחרות
    "otherMeds": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: ``,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: `ans1`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: ``,
                ans1: ``,
                ans2: ``,
                ans3: ``,
                ans4: ``,
                correctAns: `ans1`
            },
            {
                type: `binary`,
                sentence: ``,
                trueOrFalse: false
            },
        ],
        "amountOfQuestions": 3
    },
};

// varubals
let QUESTIONS = [];

/* onClickPractice
--------------------------------------------------------------
Description: */
const onClickPractice  = () => {
    strcurrentPage = "practicePage";
    console.log(strCurrentMedType);
    // מעלים מדפים, סמלים בכותרת וכפתורים למטה
    document.querySelector(`.${strCurrentMedType}Shelf`).classList.add("hidden");
    document.querySelector(`.medTypeSymbol`).classList.add("hidden");
    document.querySelector(`.shelfsButtons`).classList.add("hidden");
    // משנה מאפיינים של כותרת
    document.querySelector(`.title`).classList.remove("titleMedShelfs");
    document.querySelector(`.titleConeiner`).classList.add("titleContainerPractice");
    document.querySelector(`.title`).innerHTML = "תרגול";
    // משנה גל וכפתור עליון
    document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/practice/practice-wave.svg");
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    document.querySelector('.topButton').classList.add("topButtonPractice");
    // מראה דמות ושאלה
    document.querySelector('.practicePage').classList.remove("hidden");

    QUESTIONS = shuffle(DATA[strCurrentMedType]["questionsPractice"]);
    console.log(QUESTIONS);
    document.querySelector('.question').innerHTML = QUESTIONS[1]["question"];
    // משנה צבע של הריבועי תשובות
    for (let i = 1; i <= 4; i++) {
        document.querySelector(`.ans${i} img`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.ans${i} div`).innerHTML = QUESTIONS[1][`ans${i}`];
        document.querySelector(`.ans${i}`).addEventListener("click", onClickAnswer);
    }
}

/* onClickAnswer
--------------------------------------------------------------
Description: */
const onClickAnswer = (event) => {
    if (QUESTIONS[1][`correctAns`] == event.currentTarget.classList[1]) {
        console.log("התשובה נכונה");
        document.querySelector(`.${event.currentTarget.classList[1]} div`).classList.add("correctAnswer");
    } else {
        document.querySelector(`.${event.currentTarget.classList[1]} div`).classList.add("wrongAnswer");
    }
}

/*
shuffle
------------------------------------------------
Description: take orgnaiz array and shffel it
Parameters: array.
------------------------------------------------
Programer: Gal
------------------------------------------------
*/
function shuffle(arr) {
    let tmp = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * tmp.length);
        arr[i] = tmp[index];
        tmp = tmp.slice(0, index).concat(tmp.slice(index + 1));
    }
    return arr;
}