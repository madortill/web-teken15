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
let currentQuestion = 0;
let strClickedPracticeQuestion;

/* onClickPractice
--------------------------------------------------------------
Description: */
const onClickPractice  = () => {
    if (currentQuestion === DATA[strCurrentMedType]["questionsPractice"].length) {
        currentQuestion = 0;
        creatMedShelfs();
    } else {
        strcurrentPage = "practicePage";
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
        document.querySelector('.question').innerHTML = QUESTIONS[currentQuestion]["question"];
        // הופך כפתור בדיקה לאפור
        document.querySelector(`.practiceBottomButton`).classList.add("gray");
        // משנה צבע של הריבועי תשובות, מכניס תשובות ושם עליהם מאזין
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i} img`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
            document.querySelector(`.ans${i} div`).innerHTML = QUESTIONS[currentQuestion][`ans${i}`];
            document.querySelector(`.ans${i}`).addEventListener("click", onClickAnswer);
        }
    }
}

/* onClickAnswer
--------------------------------------------------------------
Description: */
const onClickAnswer = (event) => {
    // שומר תשובה שנלחצה
    strClickedPracticeQuestion = event.currentTarget.classList[1];
    // מוריד סימונים קודמים
    for (let i = 1; i <= 4; i++) {
        document.querySelector(`.ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
    }
    // משנה תמונה של תשובה למסומנת
    document.querySelector(`.practiceQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
    // משנה צבע של כפתור בדיקה ושם עליו מאזין
    document.querySelector(`.practiceBottomButton`).classList.remove("gray");
    document.querySelector(`.practiceBottomButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.practiceBottomButton`).addEventListener("click", onClickPracticeCheck);
}

/* onClickPracticeCheck
--------------------------------------------------------------
Description: */
const onClickPracticeCheck = () => {
    // בלחיצה על המשך
    if (document.querySelector(`.practiceBottomButton`).getAttribute("src") === "../assets/images/grapics/practice/practice_continue_button.svg") {
        // מוריד סימונים מהשאלות
        if (QUESTIONS[currentQuestion][`correctAns`] !== strClickedPracticeQuestion) {
            document.querySelector(`.${strClickedPracticeQuestion} div`).classList.remove("wrongAnswer");
        }
        document.querySelector(`.${QUESTIONS[currentQuestion][`correctAns`]} div`).classList.remove("correctAnswer");
        document.querySelector(`.practiceQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        // משנה חזרה כפתור בדיקה
        document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/check_button.svg");
        // משנה שאלה נוכחית ושולח לפונקציה שיוצרת שאלה
        currentQuestion++;
        onClickPractice();
    } else { //בלחיצה על בדיקה
        // מוריד מאזינים מהתשובות
        // משנה צבע של הריבועי תשובות, מכניס תשובות ושם עליהם מאזין
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i}`).removeEventListener("click", onClickAnswer);
        }
        // בודק אם נלחצה תשובה לא נכונה ואם כן מסמן שהיא לא נכונה
        if (QUESTIONS[currentQuestion][`correctAns`] !== strClickedPracticeQuestion) {
            document.querySelector(`.${strClickedPracticeQuestion} div`).classList.add("wrongAnswer");
        }
        // מסמן תשובה נכונה בירוק
        document.querySelector(`.${QUESTIONS[currentQuestion][`correctAns`]} div`).classList.add("correctAnswer");
        // משנה כפתור בדיקה להמשך 
        document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/practice_continue_button.svg");
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