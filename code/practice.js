const DATA = { 
    // נוגדי אלרגיה
    "antiallergic": {
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


const onClickPractice  = () => {
    console.log(strCurrentMedType);
    // מעלים מדפים, סמלים בכותרת וכפתורים למטה
    document.querySelector(`.${strCurrentMedType}Shelf`).classList.add("hidden");
    document.querySelector(`.medTypeSymbol`).classList.add("hidden");
    document.querySelector(`.shelfsButtons`).classList.add("hidden");
    // משנה מאפיינים של כותרת
    document.querySelector(`.title`).classList.remove("titleMedShelfs");
    document.querySelector(`.title`).innerHTML = "תרגול";
    // משנה גל וכפתור עליון
    document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/practice/practice-wave.svg");
    document.querySelector('.topButton').classList.add("topButtonPractice");
    // מראה דמות ושאלה
    document.querySelector('.practicePage').classList.remove("hidden");
    // משנה צבע של הריבועי תשובות
    for (let i = 1; i <= 4; i++) {
        document.querySelector(`.ans${i} img`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    }
}