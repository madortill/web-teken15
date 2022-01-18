const DATA = { 
    // שימו לב!!! שמות בנושאים צריכים להיות תואמים לשמות הנושאים בקובץ התוכן
    // נושא1
    "נושא-1": {
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
            {
                type: `binary`,
                question: ``,
                correctAns: "true"
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `שאלה לדוגמא`,
                ans1: `תשובה לדוגמא`,
                ans2: `תשובה לדוגמא`,
                ans3: `תשובה לדוגמא`,
                ans4: `תשובה לדוגמא`,
                correctAns: `ans1`
            },
            {
                type: `binary`,
                question: `שאלה לדוגמא`,
                correctAns: "true"
            },
        ],
        "amountOfQuestions": 1, // כמה שאלות מנושא זה הולכות למבחן
    },
    // נושא2
    "נושא-2": {
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
        {
            type: `binary`,
            question: ``,
            correctAns: "true"
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
            question: ``,
            correctAns: "true"
        },
    ],
    "amountOfQuestions": 1, // כמה שאלות מנושא זה הולכות למבחן
    },
    // נושא3
    "נושא-3": {
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
            question: ``,
            correctAns: "true"
        },
    ],
    "amountOfQuestions": 1, // כמה שאלות מנושא זה הולכות למבחן
    },
    // נושא4
    "נושא-4": {
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
                question: ``,
                correctAns: "true"
            },
        ],
        "amountOfQuestions": 1, // כמה שאלות מנושא זה הולכות למבחן
    },
};

// varubals
let currentQuestion = 0;
let nPracticeCorrectAnswer = 0;
let currentTestQuestion = 0;
let nExamCorrectAnswer = 0;
let strClickedPracticeQuestion;
let arrExamQuestions = [];
let arrExamChosenAnswer = [];
let strUserName;
let formerTestQuestion;
let bTimerListener = true;
// timer
let examTimer;
let timerMinutes;
let timerSecondes;
let sec = 0;
// const
const AMOUNT_OF_QUESTION_PRACTICE = 10;
const AMOUNT_OF_QUESTION_EXAM = 15;
const PASSING_GRADE = 50;

/* onClickPractice
--------------------------------------------------------------
Description: */
const onClickPractice  = () => {
    if (currentQuestion === AMOUNT_OF_QUESTION_PRACTICE) {
        currentQuestion = 9;
        endofPractice();
    } else {
        document.querySelector(`.practiceBottomButton`).removeEventListener("click", onClickPracticeCheck);
        if( strcurrentPage === "medShelf") {
            // מעלים מדפים, סמלים בכותרת וכפתורים למטה
            let shelf = document.querySelector(`.${strCurrentSubject}Shelf`);
            document.querySelector(`.shelfsPage`).removeChild(shelf);
            document.querySelector(`.shelfsButtons`).classList.add("hidden");
        }
        strcurrentPage = "practicePage";
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
        if(QUESTIONS[currentQuestion].type === "multiple") {
            document.querySelector(`.practicePage .binary`).classList.add("hidden");
            document.querySelector(`.practicePage .answersContainer`).classList.remove("hidden");
            // משנה צבע של הריבועי תשובות, מכניס תשובות ושם עליהם מאזין
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.ans${i} img`).classList.add(objInfo[strCurrentSubject].color);
                document.querySelector(`.ans${i} div`).innerHTML = QUESTIONS[currentQuestion][`ans${i}`];
                document.querySelector(`.ans${i}`).addEventListener("click", onClickAnswer);
            }
        } else {
            // מעלים אמריקאי מראה נכון לא נכון
            document.querySelector(`.practicePage .answersContainer`).classList.add("hidden");
            document.querySelector(`.practicePage .binary`).classList.remove("hidden");
            // שם מאזינים לתשובות
            document.querySelector(`.prcticeQuestionContainer .false`).addEventListener("click", onClickAnswer);
            document.querySelector(`.prcticeQuestionContainer .true`).addEventListener("click", onClickAnswer);

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

        if (QUESTIONS[currentQuestion].type === "binary") {
            // מוריד סימנים קודמים
            if (strClickedPracticeQuestion === "true") {
                document.querySelector(`.prcticeQuestionContainer .false`).style.backgroundColor = "white";
            } else {
                document.querySelector(`.prcticeQuestionContainer .true`).style.backgroundColor = "white";
            }
            document.querySelector(`.prcticeQuestionContainer .${strClickedPracticeQuestion}`).style.backgroundColor = objInfo[strCurrentSubject].color
        } else {
            // מוריד סימונים קודמים
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
            }
            // משנה תמונה של תשובה למסומנת
            document.querySelector(`.practiceQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
        }

   
        // משנה צבע של כפתור בדיקה ושם עליו מאזין
        document.querySelector(`.practiceBottomButton`).classList.remove("gray");
        document.querySelector(`.practiceBottomButton`).classList.add(objInfo[strCurrentSubject].color);
        document.querySelector(`.practiceBottomButton`).addEventListener("click", onClickPracticeCheck);
    } else if (strcurrentPage !== "reviewTest") {
        // מסמן שענו כבר על השאלה
        document.querySelector(`.answerPill${currentTestQuestion + 1}`).style.backgroundColor = "white";
        if (arrExamQuestions[currentTestQuestion].type === "binary") {
            // מוריד סימנים קודמים
            if (strClickedPracticeQuestion === "true") {
                document.querySelector(`.examQuestionContainer .false`).style.backgroundColor = "white";
            } else {
                document.querySelector(`.examQuestionContainer .true`).style.backgroundColor = "white";
            }
            document.querySelector(`.examQuestionContainer .${strClickedPracticeQuestion}`).style.backgroundColor = "#79bee0bb";
        } else {
            // מוריד סימונים קודמים
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
            }
            // משנה תמונה של תשובה למסומנת
            document.querySelector(`.examQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
        }
        arrExamChosenAnswer[currentTestQuestion] = strClickedPracticeQuestion;
       
        // בודק אם כול השאלות נענו
        let bTestComplete = true;
        for (let j = 0; j < AMOUNT_OF_QUESTION_EXAM; j++){
            if (arrExamChosenAnswer[j] === undefined) {
                bTestComplete = false;
            }
        }
        // אם כול השאלות נענו מאפשר כפתור הגש
        if (bTestComplete) {
            // מוריד פילטר מכפתור הגש ושם עליו מאזין
            document.querySelector(`.examSubmit`).classList.remove("gray");
            document.querySelector(`.examSubmit`).addEventListener("click", submitionPopUp);
        } else {
            // שם פילטר מכפתור הגש ומוריד מאזין
            document.querySelector(`.examSubmit`).classList.add("gray");
            document.querySelector(`.examSubmit`).removeEventListener("click", submitionPopUp);
        }
    }
}

/* onClickPracticeCheck
--------------------------------------------------------------
Description: */
const onClickPracticeCheck = () => {
    // בלחיצה על המשך
    if (document.querySelector(`.practiceBottomButton`).getAttribute("src") === "../assets/images/grapics/practice/practice_continue_button.svg") {
        // משנה צבע של כפתור בדיקה
        document.querySelector(`.practiceBottomButton`).classList.remove(objInfo[strCurrentSubject].color);
        if(QUESTIONS[currentQuestion].type === "binary") {
            // מוריד סימנים קודמים
            document.querySelector(`.prcticeQuestionContainer .false`).style.backgroundColor = "white";
            document.querySelector(`.prcticeQuestionContainer .true`).style.backgroundColor = "white";
        } else {
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.ans${i} img`).classList.remove(objInfo[strCurrentSubject].color);
            }
            document.querySelector(`.practiceQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        }
        // מוריד סימונים מהשאלות
        if (QUESTIONS[currentQuestion][`correctAns`] !== strClickedPracticeQuestion) {
            document.querySelector(`.${strClickedPracticeQuestion} div`).classList.remove("wrongAnswer");
        }
        document.querySelector(`.${QUESTIONS[currentQuestion][`correctAns`]} div`).classList.remove("correctAnswer");
        // משנה חזרה כפתור בדיקה
        document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/check_button.svg");
        // משנה שאלה נוכחית ושולח לפונקציה שיוצרת שאלה
        currentQuestion++;
        onClickPractice();
    } else if (document.querySelector(`.practiceBottomButton`).getAttribute("src") === "../assets/images/grapics/practice/check_button.svg") { //בלחיצה על בדיקה
        if(QUESTIONS[currentQuestion].type === "binary") {
            // מוריד מאזינים מהתשובות
            document.querySelector(`.prcticeQuestionContainer .false`).removeEventListener("click", onClickAnswer);
            document.querySelector(`.prcticeQuestionContainer .true`).removeEventListener("click", onClickAnswer);

        } else {
            // מוריד מאזינים מהתשובות
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.ans${i}`).removeEventListener("click", onClickAnswer);
            }
        }
        // מסמן תשובה נכונה בירוק
        document.querySelector(`.${QUESTIONS[currentQuestion][`correctAns`]} div`).classList.add("correctAnswer");
        // משנה כפתור בדיקה להמשך 
        document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/practice_continue_button.svg");
        // בודק אם נלחצה תשובה לא נכונה ואם כן מסמן שהיא לא נכונה
        if (QUESTIONS[currentQuestion][`correctAns`] !== strClickedPracticeQuestion) {
            document.querySelector(`.${strClickedPracticeQuestion} div`).classList.add("wrongAnswer");
        } else {
            nPracticeCorrectAnswer++;
        }
    } else {
        nPracticeCorrectAnswer = 0;
        currentQuestion = 0;
        creatMedShelfs();
    }
}

/* endofPractice
--------------------------------------------------------------
Description: change hyphen to space */
const endofPractice = () => {
    // מעלים שאלות ומראה תשובות נכונות
    document.querySelector(`.practiceRightAnswersConteiner`).classList.remove("hidden");
    document.querySelector(`.answersContainer`).classList.add("hidden");
    // מכניס טקסט סיום
    document.querySelector('.question').innerHTML ="השלמתם את התרגול בנושא זה. מוזמנים להמשיך לתרגל עם שאלות נוספות או להמשיך למבחן. בהצלחה";
    document.querySelector(`.practiceRightAnswers`).innerHTML = `${nPracticeCorrectAnswer}/${AMOUNT_OF_QUESTION_PRACTICE}`;
    // משנה צבע של חלונית תשובות ושל כפתור סיום
    document.querySelector(`.practiceBottomButton`).classList.add(objInfo[strCurrentSubject].color);
    document.querySelector(`.practiceRightAnswersConteiner`).classList.add(objInfo[strCurrentSubject].color);
    // מחליף תמונה של כפתור בדיקה לכפתור סיום
    document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/endPracticeButton.svg");
}

/* onClickExam
--------------------------------------------------------------
Description: */
const onClickExam = () => {
    // מאפס משתנים
    currentTestQuestion = 0;
    nExamCorrectAnswer = 0;
    arrExamQuestions = [];
    arrExamChosenAnswer = [];
    sec = 0;
    // שומר עמוד נוכחי
    strcurrentPage = "examPrePage";
    document.querySelector(`.examQuestionContainer`).classList.add("hidden"); 
    // מעלים דף פתיחה וכפתור אודות
    document.querySelector(`.homePageButtons`).classList.add("hidden");
    document.querySelector(`.aboutButton`).classList.add("hidden");
    // משנה מאפיינים של כותרת
    document.querySelector(`.title`).innerHTML = "מבחן";
    // כפתור עליון
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    // מראה דף לפני מבחן
    document.querySelector(`.examPage`).classList.remove("hidden");
    document.querySelector(`.beforeExamPage`).classList.remove("hidden");  
    // הופך כפתור התחלה לאפור 
    document.querySelector(`.stratTest`).classList.add("gray");
    // שומר של משתמש ומוודא שהוא יותר מתו אחד 
    strUserName = document.querySelector('.examNameInput').value;
    if (strUserName.length > 1) {
        document.querySelector(`.stratTest`).classList.remove("gray");
    }
    document.querySelector('.examNameInput').addEventListener("input", () => {
        strUserName = document.querySelector('.examNameInput').value;
        if (strUserName.length > 1) {
            document.querySelector(`.stratTest`).classList.remove("gray");
            document.querySelector(`.stratTest`).addEventListener("click", startExam);
            if (bTimerListener) {// קורה רק פעם אחת
                bTimerListener = false;
                document.querySelector(`.stratTest`).addEventListener("click", () => {
                        // מתחיל טיימר
                        examTimer = setInterval(startTimerExam, 1000);
                        let arrAnswerPill = document.querySelectorAll('.answerPill');
                        for (let i = 0; i < arrAnswerPill.length; i++) {
                            // מסמן שלא ענו על השאלה
                            document.querySelector(`.answerPill${i + 1}`).style.backgroundColor = "#f4f4f4b8";
                            arrAnswerPill[i].addEventListener('click', () => {
                                currentTestQuestion = i;
                                startExam();
                        });
                    };
                });
            }
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
    arrExamQuestions = shuffle(arrExamQuestions);
}

/* startExam
--------------------------------------------------------------
Description: */
const startExam = (event) => {
    console.log(event)
    if (strcurrentPage === "examPrePage") {
        // מעלים דף של לפני מבחן
        document.querySelector(`.beforeExamPage`).classList.add("hidden"); 
        // מראה מבחן
        document.querySelector(`.examQuestionContainer`).classList.remove("hidden"); 
        // משנה גל, מעלים כפתור עליון
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/test/test-wave.svg");
        document.querySelector('.topButton').classList.add("hidden");
        strcurrentPage = "examQuestion";
        formerTestQuestion = currentTestQuestion;
        // מוריד סימונים קודמים
        document.querySelector(`.false`).style.backgroundColor = "white";
        document.querySelector(`.true`).style.backgroundColor = "white";
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        }
    } else {
        if (arrExamChosenAnswer[formerTestQuestion] === undefined) {
            // מסמן שלא ענו על השאלה
            document.querySelector(`.answerPill${formerTestQuestion + 1}`).style.backgroundColor = "#f4f4f4b8";
        } else {
            // מסמן שענו כבר על השאלה
            document.querySelector(`.answerPill${formerTestQuestion + 1}`).style.backgroundColor = "white";
        }
        // מעלים שאלה קודמת
        if (event !== undefined) {
            document.querySelector(`.examQuestionContainer .${arrExamQuestions[currentTestQuestion].type}`).classList.add("hidden");
            if (strcurrentPage === "reviewTest") {
                // בודק אם נלחצה תשובה לא נכונה ואם כן מוריד סימון תשובה לא נכונה
                if (arrExamChosenAnswer[currentTestQuestion] !== String(arrExamQuestions[currentTestQuestion]["correctAns"])) {
                    document.querySelector(`.answersContainers .${arrExamChosenAnswer[currentTestQuestion]} div`).classList.remove("wrongAnswer");
                }
                // מוריד סימון תשובה נכונה
                document.querySelector(`.answersContainers .${arrExamQuestions[currentTestQuestion]["correctAns"]} div`).classList.remove("correctAnswer");
            }
            if (event.currentTarget.classList[1] === "testArrowRight") {
                currentTestQuestion--;
            } else if (event.currentTarget.classList[1] === "testArrowLeft") {
                currentTestQuestion++;
            }
            formerTestQuestion = currentTestQuestion;
            document.querySelector(`.examQuestionContainer .${arrExamQuestions[currentTestQuestion].type}`).classList.remove("hidden");
        } else { // תזוזה בין השאלות על ידי כפתורים
            document.querySelector(`.examQuestionContainer .${arrExamQuestions[formerTestQuestion].type}`).classList.add("hidden");
            if (strcurrentPage === "reviewTest") {
                // בודק אם נלחצה תשובה לא נכונה ואם כן מוריד סימון תשובה לא נכונה
                if (arrExamChosenAnswer[formerTestQuestion] !== String(arrExamQuestions[formerTestQuestion]["correctAns"])) {
                   document.querySelector(`.answersContainers .${arrExamChosenAnswer[formerTestQuestion]} div`).classList.remove("wrongAnswer");
               }
               // מוריד סימון תשובה נכונה
               document.querySelector(`.answersContainers .${arrExamQuestions[formerTestQuestion]["correctAns"]} div`).classList.remove("correctAnswer");
            }
           //מעדכן מספר שאלה 
            formerTestQuestion = currentTestQuestion;
            document.querySelector(`.examQuestionContainer .${arrExamQuestions[currentTestQuestion].type}`).classList.remove("hidden");
        }
        if (arrExamQuestions[currentTestQuestion].type === "binary") {
            // מוריד סימנים קודמים
            document.querySelector(`.examQuestionContainer .false`).style.backgroundColor = "white";
            document.querySelector(`.examQuestionContainer .true`).style.backgroundColor = "white";
            if (arrExamChosenAnswer[currentTestQuestion] !== undefined) {
                // משנה תמונה של תשובה למסומנת
                document.querySelector(`.examQuestionContainer .${arrExamChosenAnswer[currentTestQuestion]}`).style.backgroundColor = "#79bee0bb";
            }
        } else {
            // מוריד סימונים קודמים
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
            }
            if (arrExamChosenAnswer[currentTestQuestion] !== undefined) {
                // משנה תמונה של תשובה למסומנת
                document.querySelector(`.examQuestionSqure${arrExamChosenAnswer[currentTestQuestion].slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
            }
        }
    }
    // מוריד חצים בשאלה הראשונה והאחרונה
    if (currentTestQuestion > 0 && currentTestQuestion < AMOUNT_OF_QUESTION_EXAM - 1) {
        // מראה חץ אחורה וקדימה
        document.querySelector(`.testArrowRight`).classList.remove("hidden"); 
        document.querySelector(`.testArrowLeft`).classList.remove("hidden");
    } else if (currentTestQuestion === AMOUNT_OF_QUESTION_EXAM - 1) {
        // מעלים חץ קדימה
        document.querySelector(`.testArrowLeft`).classList.add("hidden");
    } else {
        // מראה את השאלה
        document.querySelector(`.examQuestionContainer .${arrExamQuestions[currentTestQuestion].type}`).classList.remove("hidden");
        // מעלים חץ אחורה
        document.querySelector(`.testArrowRight`).classList.add("hidden"); 
        document.querySelector(`.testArrowLeft`).classList.remove("hidden");
    }
    
    // מראה את סימוני השאלה הנוכחית
    document.querySelector('.testCurrentQuestionDisplay').innerHTML = `שאלה מספר ${currentTestQuestion + 1}`;
    document.querySelector(`.answerPill${currentTestQuestion + 1}`).style.backgroundColor = "#a3a2a2";
    // מראה את השאלה הנוכחית ומכניס אליה את התוכן
    document.querySelector('.examQuestionContainer .question').innerHTML = arrExamQuestions[currentTestQuestion].question;
    if (arrExamQuestions[currentTestQuestion].type === "binary") {
        // שם מאזינים לתשובות
        document.querySelector(`.examQuestionContainer .binary .true`).addEventListener("click", onClickAnswer);
        document.querySelector(`.examQuestionContainer .binary .false`).addEventListener("click", onClickAnswer);
    } else {
        for (let i = 1; i <= 4; i++) {
            // מכניס תוכן לתשובות ושם עליהן מאזין
            document.querySelector(`.examQuestionContainer .ans${i} div`).innerHTML = arrExamQuestions[currentTestQuestion][`ans${i}`];
            document.querySelector(`.examQuestionContainer .ans${i}`).addEventListener("click", onClickAnswer);
        }
    }
    // שם מאזינים לחצים
    document.querySelector(`.testArrowRight`).addEventListener("click", startExam);
    document.querySelector(`.testArrowLeft`).addEventListener("click", startExam);

    if (strcurrentPage === "reviewTest") {
        // בודק אם נלחצה תשובה לא נכונה ואם כן מסמן שהיא לא נכונה
        if (arrExamChosenAnswer[currentTestQuestion] !== String(arrExamQuestions[currentTestQuestion]["correctAns"])) {
            document.querySelector(`.answersContainers .${arrExamChosenAnswer[currentTestQuestion]} div`).classList.add("wrongAnswer");
        }
        // מסמן תשובה נכונה בירוק
        document.querySelector(`.answersContainers .${arrExamQuestions[currentTestQuestion]["correctAns"]} div`).classList.add("correctAnswer");
    }
}


/* submitionPopUp
--------------------------------------------------------------
Description:  */
const submitionPopUp = () => {
    if (strcurrentPage === "reviewTest") {
        endOfTest();
    } else {
       // מראה פופ אפ ושם מאזינים לכפתורים בפופ אפ
       document.querySelector(`.examSubmitionPopUp`).classList.remove("hidden");
       document.querySelector(`.popUpSubmit`).addEventListener("click", endOfTest);
       document.querySelector(`.popUpBackToExam`).addEventListener("click", () => {
           // מעלים פופ אפ
           document.querySelector(`.examSubmitionPopUp`).classList.add("hidden");
       });
    }
}

/* endOfTest
--------------------------------------------------------------
Description:  */
const endOfTest = () => {
    if (strcurrentPage === "reviewTest") {
        // בודק אם נלחצה תשובה לא נכונה ואם כן מוריד סימון תשובה לא נכונה
        if (arrExamChosenAnswer[formerTestQuestion] !== String(arrExamQuestions[formerTestQuestion]["correctAns"])) {
            document.querySelector(`.answersContainers .${arrExamChosenAnswer[formerTestQuestion]} div`).classList.remove("wrongAnswer");
        }
        // מוריד סימון תשובה נכונה
        document.querySelector(`.answersContainers .${arrExamQuestions[formerTestQuestion]["correctAns"]} div`).classList.remove("correctAnswer");
        document.querySelector(`.examQuestionContainer .${arrExamQuestions[currentTestQuestion].type}`).classList.add("hidden");
        // משנה כפתור סיום להגש
        document.querySelector('.examSubmit').setAttribute("src", "../assets/images/grapics/test/submit-button.svg");
    } else {
        // עוצר טיימר
        clearInterval(examTimer)
        // שם מאזינים לכפתורים
        document.querySelector(`.reviewTest`).addEventListener("click", reviewTest);
        // בודק כמה שאלות נענו נכון
        nExamCorrectAnswer = 0;
        for (let j = 0; j < AMOUNT_OF_QUESTION_EXAM; j++){
            if (arrExamChosenAnswer[j] === arrExamQuestions[j]["correctAns"]) {
                nExamCorrectAnswer++;
            }
        }
        // מחשב ציון
        let nGrade = Math.round((nExamCorrectAnswer/AMOUNT_OF_QUESTION_EXAM) * 100);
        // מכניס שם משתמש
        document.querySelector(`.userNameBig`).innerHTML = strUserName;
        document.querySelector(`.userNameSmall`).innerHTML = strUserName;
        // מכניס תשובות נכונות וציון
        document.querySelector(`.ExamgradeBig`).innerHTML = nGrade;
        document.querySelector(`.ExamgradeSmall`).innerHTML = nGrade;
        document.querySelector(`.rightAnswers`).innerHTML = `${nExamCorrectAnswer}/15`;
        // נותן משוב ויוזאלי לפי הציון
        if (nGrade < PASSING_GRADE) {
            document.querySelector(`.examVerbalGrade`).innerHTML = "לא נורא אולי פעם הבאה";
            document.querySelector('.ExamgradeConteiner').style.backgroundImage = `url("../assets/images/grapics/test/sad-smiley-face.svg")`;
        } else {
            document.querySelector(`.examVerbalGrade`).innerHTML = "כל הכבוד";
            document.querySelector('.ExamgradeConteiner').style.backgroundImage = `url("../assets/images/grapics/test/happy-smiley-face.svg")`;
        }
        // שומר תאריך ושעה
        let date = new Date();
        let todayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        let currTime = date.getHours() + ":" + date.getMinutes();
        // מכניס תאריך ושעה
        document.querySelector(`.date`).innerHTML = todayDate;
        document.querySelector(`.time`).innerHTML = currTime;
        // מכניס אורך מבחן
        document.querySelector(`.timerConteiner`).innerHTML = `${timerSecondes} : ${timerMinutes}`;
    }
    document.querySelector(`.examQuestionContainer .${arrExamQuestions[formerTestQuestion].type}`).classList.add("hidden");
    strcurrentPage = "endOfTest";
    // מעלים פופ אפ ואת המבחן ומראה את דף הסיום
    document.querySelector(`.examSubmitionPopUp`).classList.add("hidden");
    document.querySelector(`.examQuestionContainer`).classList.add("hidden");
    document.querySelector(`.afterExamPage`).classList.remove("hidden");
    // משנה גל ומראה כפתור חזור
    document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    document.querySelector(`.topButton`).classList.remove("hidden");
}

/* reviewTest
--------------------------------------------------------------
Description:  */
const reviewTest = (event) => {
    // מעלים את הדף סיום ומראה את המבחן
    document.querySelector(`.examQuestionContainer`).classList.remove("hidden");
    document.querySelector(`.afterExamPage`).classList.add("hidden");
    // משנה גל ומעלים כפתור חזור
    document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/test/test-wave.svg");
    document.querySelector(`.topButton`).classList.add("hidden");
    // משנה כפתור הגש לסיום
    document.querySelector('.examSubmit').setAttribute("src", "../assets/images/grapics/test/test-review-end-button.svg");
    strcurrentPage = "reviewTest";
    currentTestQuestion = 0;
    startExam();
}

/* pad
--------------------------------------------------------------
Description:  */
const pad = (val) => {
    let valString = val + "";
    if(valString.length < 2)
    {
        return "0" + valString;
    }
    else
    {
        return valString;
    }
}

/* startTimerExam
--------------------------------------------------------------
Description:  */
const startTimerExam = () => {
    sec++;
    timerSecondes = pad(sec%60);
    timerMinutes = pad(parseInt(sec/60));
    // document.querySelector(`.testCurrentQuestionDisplay`).innerHTML = `${timerSecondes} : ${timerMinutes}`;
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
