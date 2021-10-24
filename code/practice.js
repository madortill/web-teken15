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
                sentence: `שאלה שבא לי לנסות אותה`,
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
let currentTestQuestion = 0;
let strClickedPracticeQuestion;
let arrExamQuestions = [];
let arrExamChosenAnswer = [];
let strUserName;

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
    if (strcurrentPage === "practicePage") {
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
    } else {
        if (arrExamQuestions[currentTestQuestion].type === "binary") {
            // מוריד סימנים קודמים
            if (strClickedPracticeQuestion) {
                document.querySelector(`.false`).style.backgroundColor = "white";
            } else {
                document.querySelector(`.true`).style.backgroundColor = "white";
            }
            document.querySelector(`.${strClickedPracticeQuestion}`).style.backgroundColor = "#79bee0bb";
        } else {
            // מוריד סימונים קודמים
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
            }
            // משנה תמונה של תשובה למסומנת
            document.querySelector(`.examQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
        }
        arrExamChosenAnswer.push(strClickedPracticeQuestion);
        strcurrentPage = "examQuestion";
        document.querySelector(`.testArrowRight`).addEventListener("click", startExam);
        document.querySelector(`.testArrowLeft`).addEventListener("click", startExam);
    }
}

/* onClickPracticeCheck
--------------------------------------------------------------
Description: */
const onClickPracticeCheck = () => {
    // בלחיצה על המשך
    if (document.querySelector(`.practiceBottomButton`).getAttribute("src") === "../assets/images/grapics/practice/practice_continue_button.svg") {
        // משנה צבע של כפתור בדיקה
        document.querySelector(`.practiceBottomButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i} img`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        }
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

/* onClickExam
--------------------------------------------------------------
Description: */
const onClickExam = () => {
    strcurrentPage = "examPrePage";
    document.querySelector(`.examQuestionContainer`).classList.add("hidden"); 
    // מעלים מדפים, סמלים בכותרת וכפתורים למטה
    document.querySelector(`.${strCurrentMedType}Shelf`).classList.add("hidden");
    document.querySelector(`.medTypeSymbol`).classList.add("hidden");
    document.querySelector(`.shelfsButtons`).classList.add("hidden");
    // משנה מאפיינים של כותרת
    document.querySelector(`.title`).classList.remove("titleMedShelfs");
    document.querySelector(`.title`).innerHTML = "מבחן";
    // כפתור עליון
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    // משנה חזרה צבעים לכחול
    document.querySelector(`.wave`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.topButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.searchBoxHolder`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.shelfsButtons .homeButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
    // מראה דף לפני מבחן
    document.querySelector(`.examPage`).classList.remove("hidden");
    document.querySelector(`.beforeExamPage`).classList.remove("hidden");  
    // הופך כפתור התחלה לאפור 
    document.querySelector(`.stratTest`).classList.add("gray");
    // שומר של משתמש ומוודא שהוא יותר מתו אחד 
    document.querySelector('.examNameInput').addEventListener("input", () => {
        strUserName = document.querySelector('.examNameInput').value;
        if (strUserName.length > 1) {
            document.querySelector(`.stratTest`).classList.remove("gray");
            document.querySelector(`.stratTest`).addEventListener("click", startExam);
        }
    });
    // שומר שאלות למבחן
    for(key of Object.keys(DATA)) {
        // שומר את השאלות מהנושא הנוכחי במערך ומכניס למערך של השאלות למבחן
        let arrPracticeQuestion = shuffle(DATA[key]["questionsPractice"]);
        for (let i = 0; i < DATA[key].amountOfQuestions; i++) {
            arrExamQuestions.push(arrPracticeQuestion[i]);
        }
        // שומר את השאלות למבחן מהנושא הנוכחי במערך ומכניס למערך של השאלות למבחן
        let arrSubjExamQuestion = shuffle(DATA[key]["questionsExam"]);
        for (let j = 0; j < DATA[key]["questionsExam"].length; j++) {
            arrExamQuestions.push(arrSubjExamQuestion[j]);
        }
    }
}

/* startExam
--------------------------------------------------------------
Description: */
const startExam = (event) => {
    if (strcurrentPage === "examPrePage") {
        // מעלים דף של לפני מבחן
        document.querySelector(`.beforeExamPage`).classList.add("hidden"); 
        // מראה מבחן
        document.querySelector(`.examQuestionContainer`).classList.remove("hidden"); 
        // משנה גל, מעלים כפתור עליון
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/test/test-wave.svg");
        document.querySelector('.topButton').classList.add("hidden");
    } else if (strcurrentPage === "examQuestion"){
        if (event.currentTarget.classList[1] === "testArrowRight") {
            currentTestQuestion++;
        } else if (event.currentTarget.classList[1] === "testArrowLeft") {
            currentTestQuestion--;
        }
        if (arrExamQuestions[currentTestQuestion].type === "binary") {
            // מוריד סימנים קודמים
            if (arrExamChosenAnswer[currentTestQuestion]) {
                document.querySelector(`.false`).style.backgroundColor = "white";
            } else {
                document.querySelector(`.true`).style.backgroundColor = "white";
            }
            document.querySelector(`.${arrExamChosenAnswer[currentTestQuestion]}`).style.backgroundColor = "#79bee0bb";
        } else {
            // מוריד סימונים קודמים
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
            }
            // משנה תמונה של תשובה למסומנת
            document.querySelector(`.examQuestionSqure${arrExamChosenAnswer[currentTestQuestion].slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
        }
    }
    if (currentTestQuestion > 1 && currentTestQuestion < 15) {
        document.querySelector(`.testArrowRight`).classList.remove("hidden"); 
        document.querySelector(`.question${currentTestQuestion}`).classList.add("hidden");
    }
    strcurrentPage = "examPage";

    // מראה את סימוני השאלה הנוכחית
    document.querySelector('.testCurrentQuestionDisplay').innerHTML = `שאלה מספר ${currentTestQuestion + 1}`;
    document.querySelector(`.answerPill${currentTestQuestion + 1}`).style.backgroundColor = "#79BEE0";
    // מראה את השאלה הנוכחית ומכניס אליה את התוכן
    document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.remove("hidden");
    document.querySelector('.examQuestionContainer .question').innerHTML = arrExamQuestions[currentTestQuestion].question;
    for (let i = 1; i <= 4; i++) {
        document.querySelector(`.examQuestionContainer .ans${i} div`).innerHTML = arrExamQuestions[currentTestQuestion][`ans${i}`];
        document.querySelector(`.examQuestionContainer .ans${i}`).addEventListener("click", onClickAnswer);
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