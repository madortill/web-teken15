// כששמים שמות של נושאים לשים בין מילים מקף! שלא יהיה רווחים בכלל, זה יצור לבד רווחים במקום המתאים
let objInfo = {
    // נושא1-----------------------------------------------------------------------------------------------------------------------
    "נושא-1" : {
        pic : `../assets/images/grapics/home-page/antiallergic-button.svg`,
        color : `pink`,

        "תת-נושא1" : {
            discription : `כאן יכנס תיאור של תת נושא 1 שמתאר את כול תתי הנושאים שלו`,
            "תת-תת-נושא-פסקאות" : {
                type : "text",
                content: ["פסקה ראשונה", "פסקה שניה", "פסקה שלישית"], // מערך של תוכן לפי פסקאות
            },
        },
        "תת-נושא2" : {
            discription : ``,
            "תת-תת-נושא-רשימה-נקודות" : {
                type : "listDots",
                content: ["פסקה ראשונה", "פסקה שניה", "פסקה שלישית"], // מערך של תוכן לפי פסקאות
            },
            "תת-תת-נושא-רשימה-מספרים" : {
                type : "listNumbers",
                content: ["פסקה ראשונה", "פסקה שניה", "פסקה שלישית"], // מערך של תוכן לפי פסקאות
            },
        },
    },
    // נושא2-----------------------------------------------------------------------------------------------------------------------
    "נושא-2" : {
        pic : `../assets/images/grapics/home-page/chronic-diseases-button.svg`,
        color : `mediumaquamarine`,
        
        "תת-נושא-1" : {
            discription : ``,
            '.' : {
                type : "listDots",
                content: [], // מערך של תוכן לפי פסקאות
            },
            "תת-תת-נושא-רשימה-מספרים" : {
                type : "listNumbers",
                content: ["פסקה ראשונה", "פסקה שניה", "פסקה שלישית"], // מערך של תוכן לפי פסקאות
            },
        },
        "תת-נושא-2" : {
            discription : ``,
            "תת-תת-נושא-תמונה" : {
                type : "textAndPic",
                pic : `../assets/images/grapics/home-page/chronic-diseases-button.svg`,
                content: ["פסקה ראשונה", "פסקה שניה", "פסקה שלישית"], // מערך של תוכן לפי פסקאות
            },
            discription : ``,
            "תת-תת-נושא-תמונות" : {
                type : "textAndPics",
                pic : [`../assets/images/grapics/home-page/chronic-diseases-button.svg`, `../assets/images/grapics/home-page/chronic-diseases-button.svg`,`../assets/images/grapics/home-page/chronic-diseases-button.svg`],
                content: ["פסקה ראשונה", "פסקה שניה", "פסקה שלישית"], // מערך של תוכן לפי פסקאות
            },
            "תת-תת-נושא-סרטון" : {
                type : "textAndVideo",
                video : `https://www.youtube.com/embed/mqSp2XCo7DE`,
                content: ["פסקה ראשונה", "פסקה שניה", "פסקה שלישית"], // מערך של תוכן לפי פסקאות
                content: "",
            },
        },
        "תת-נושא-3" : {
            discription : ``,
            "תת-תת-נושא-תמונה" : {
                type : "textAndPic",
                pic : `../assets/images/grapics/home-page/chronic-diseases-button.svg`,
                content: ["פסקה ראשונה", "פסקה שניה", "פסקה שלישית"], // מערך של תוכן לפי פסקאות
            },
            discription : ``,
            "תת-תת-נושא-תמונות" : {
                type : "textAndPics",
                pic : [`../assets/images/grapics/home-page/chronic-diseases-button.svg`, `../assets/images/grapics/home-page/chronic-diseases-button.svg`,`../assets/images/grapics/home-page/chronic-diseases-button.svg`],
                content: ["פסקה ראשונה", "פסקה שניה", "פסקה שלישית"], // מערך של תוכן לפי פסקאות
            },
            "תת-תת-נושא-סרטון" : {
                type : "textAndVideo",
                video : `https://www.youtube.com/embed/mqSp2XCo7DE`,
                content: ["פסקה ראשונה", "פסקה שניה", "פסקה שלישית"], // מערך של תוכן לפי פסקאות
                content: "",
            },
        },
    },
}

// varubal
let strCurrentSubject;
let strMedTypeFromSearch;
let strcurrentPage = "homePage";
let bSearchScreen = false;
let QUESTIONS = [];

// const
const HEADLINE = "שם לומדה";

/* loading function
--------------------------------------------------------------
Description: */
window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("fade");
    // place listeners on search button, about button and med buttons
    document.querySelector('.searchButton').addEventListener('click', onClickSearch);
    document.querySelector('.aboutButton').addEventListener('click', onClickAbout);
    createHomePageButtons();
});

/* createHomePageButtons
--------------------------------------------------------------
Description: Adds about page */
const createHomePageButtons = () => {
        let buttons = El("div", {cls: "homePageButtons"},
        El("div", {cls: "homePageButtonsScroll"},),
        El("img",
        {attributes: {class: `testButton buttons`, 
        src : `../assets/images/grapics/med-shelfs/test-button.svg`},}),
    );
    document.querySelector('.homePage').append(buttons);

    for(let subjects of Object.keys(objInfo)) {
        let subjectButton;
        if (Object.keys(objInfo).indexOf(subjects) % 2 === 0) {
            subjectButton = El("div",{classes: ["mainPageButton", subjects]},
                El("img",
                {attributes: {class: `mainPagePic`, 
                src : objInfo[subjects].pic},}),
                El("div", {cls: "medHeadline"}, addSpace(subjects))
            );
        }
        else {
            subjectButton = El("div", {classes: ["mainPageButton", subjects]},
                El("div", {cls: "medHeadline"}, addSpace(subjects)),
                El("img",
                {attributes: {class: `mainPagePic picLeft`, 
                src : objInfo[subjects].pic},}),
            );
        }
        document.querySelector('.homePageButtonsScroll').append(subjectButton);
    }

    let arrMedsButtons = document.querySelectorAll('.mainPageButton');
    for (let i = 0; i < arrMedsButtons.length; i++) {
        arrMedsButtons[i].addEventListener('click', creatMedShelfs);
    };
    document.querySelector(`.testButton`).addEventListener("click", onClickExam);

}

/* onClickAbout
--------------------------------------------------------------
Description: Adds about page */
const onClickAbout = () => {
    // מראה דף אודות ומעלים כפתור אודות ודף בית 
    document.querySelector('.aboutPage').classList.remove("hidden");
    document.querySelector('.aboutButton').classList.add("hidden");
    document.querySelector('.homePageButtons').classList.add("hidden");
    // משנה את התמונה של הכפתור העליון
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    strcurrentPage = "aboutPage"
}

/* onClickSearch
--------------------------------------------------------------
Description: Adds search box and listener to input */
const onClickSearch = () => {
    if (strcurrentPage === "aboutPage") {
        sendToHomePage();
    } else if (strcurrentPage === "practicePage") {
        if(strClickedPracticeQuestion !== undefined) {
            if(QUESTIONS[currentQuestion].type === "binary") {
                // מוריד סימנים קודמים
                document.querySelector(`.prcticeQuestionContainer .false`).style.backgroundColor = "white";
                document.querySelector(`.prcticeQuestionContainer .true`).style.backgroundColor = "white";
            } else {
                for (let i = 1; i <= 4; i++) {
                    document.querySelector(`.ans${i} img`).classList.remove(objInfo[strCurrentSubject].color);
                    document.querySelector(`.practiceQuestionSqure${i}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
                }
            }
            // מוריד סימונים מהשאלות
            if (QUESTIONS[currentQuestion][`correctAns`] !== strClickedPracticeQuestion) {
                document.querySelector(`.practicePage .${strClickedPracticeQuestion} div`).classList.remove("wrongAnswer");
            }
            document.querySelector(`.${QUESTIONS[currentQuestion][`correctAns`]} div`).classList.remove("correctAnswer");
        }
            // משנה צבע של כפתור בדיקה ושל ריבועי התשובות
            document.querySelector(`.practiceBottomButton`).classList.remove(objInfo[strCurrentSubject].color);
            // משנה חזרה כפתור בדיקה
            document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/check_button.svg");
        currentQuestion = 0;
        creatMedShelfs();
    } else if (strcurrentPage === "examPrePage" || strcurrentPage === "endOfTest") {
        sendToHomePage();
    } else if (strcurrentPage !== "medId") {
        // מראה את תיבת החיפוש
        document.querySelector('.searchBoxHolder').classList.remove("hidden");
        document.querySelector('.searchBox').classList.remove("hidden");
        // מעלים כותרת וכפתורים ומשנה גל
        document.querySelector('.title').classList.add("hidden");
        document.querySelector('.aboutButton').classList.add("hidden");
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/search-wave.svg");
        // הופך את המסך לשחור
        document.querySelector('.searchScren').classList.add("darkScreen");
        if (strcurrentPage === "medShelf") {
            document.querySelector('.medTypeSymbol').classList.add("hidden");
        }
        document.querySelector('.darkScreen').addEventListener("click", () => {
            // מעלים מסך חיפוש
            document.querySelector('.searchBoxHolder').classList.add("hidden");
            document.querySelector('.searchBox').classList.add("hidden");
            document.querySelector('.dropDown').classList.add("hidden");
            document.querySelector('.searchScren').classList.remove("darkScreen");
            // מחזיר כותרת ומשנה בחזרה גל
            document.querySelector('.title').classList.remove("hidden");
            document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
            if (strcurrentPage === "medShelf") {
                // מחזיר מדפי תרופות
                document.querySelector('.medTypeSymbol').classList.remove("hidden");
            } else {
                // מחזיר מסך בית
                document.querySelector('.aboutButton').classList.remove("hidden");
            }
        });
        document.querySelector('.searchBox').addEventListener('input', onSearch);
    } 
}

/* onSearch
--------------------------------------------------------------
Description: cheack for search match and creat dropdown accordingly */
const onSearch = () => {
    document.querySelector('.dropDown').style.pointerEvents = "all";
    // Saves user input in a varuble and resets the dropdown html.
    let strUserInput = document.querySelector('.searchBox').value;
    document.querySelector('.dropDown').innerHTML = "";
    document.querySelector('.dropDown').style.zIndex = "2";
    document.querySelector('.dropDown').classList.remove("hidden");
    // Goes over the object to check for a search match.
    for (let subject of Object.keys(objInfo)){
        for(let subSubject of Object.keys(objInfo[subject])){
            for(let key of Object.keys(objInfo[subject][subSubject])){
                //Push the current match to it.
                if(key.includes(strUserInput) && strUserInput !== "" && key !== "discription"){
                    let div = document.createElement("div");
                    div.innerHTML = addSpace(key);
                    div.classList.add("dropDownItem", key, subSubject, subject);
                    document.querySelector('.dropDown').append(div);
                    document.querySelector(`.${key}`).addEventListener("click", creatMedID);
                }
            }
        }
    }
    bSearchScreen = true
}

/* creatMedID
--------------------------------------------------------------
Description: Shows medicine id, hides privios div and adds listener to retern button*/
const creatMedID = (event) => {
    // שומר את התת תת נושא הנוכחי ואת האובייקט שלו
    let strCurrentMed =  event.currentTarget.classList[1];
    let strCurrentSubSubject = event.currentTarget.classList[2];
    let objCurrentMed =  objInfo[event.currentTarget.classList[3]][strCurrentSubSubject][strCurrentMed];
    // מראה את הדיב של התת תת נושא
    document.querySelector(`.medicineId`).classList.remove("hidden");
    // משנה מסך בהתאם למסך ממנו באנו
    if (strcurrentPage === "medShelf") {
        // מעלים תתי נושאים
        let shelf = document.querySelector(`.${strCurrentSubject}Shelf`);
        document.querySelector(`.shelfsPage`).removeChild(shelf);
        document.querySelector(`.shelfsButtons`).classList.add("hidden");
    } else {
        // מעלים את המסך בית
        document.querySelector('.homePageButtons').classList.add("hidden");
        document.querySelector('.aboutButton').classList.add("hidden");
    }
    if (bSearchScreen) {
        // מעלים מסך חיפוש
        document.querySelector('.searchBoxHolder').classList.add("hidden");
        document.querySelector('.searchBox').classList.add("hidden");
        document.querySelector('.dropDown').classList.add("hidden");
        document.querySelector('.searchScren').classList.remove("darkScreen");
        document.querySelector('.title').classList.remove("hidden");
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
        document.querySelector('.dropDown').style.pointerEvents = "none";
         // משנה צבע
         if (strCurrentSubject !== undefined) {
            document.querySelector(`.wave`).classList.remove(objInfo[strCurrentSubject].color);
            document.querySelector(`.topButton`).classList.remove(objInfo[strCurrentSubject].color);
        }
        strCurrentSubject = event.currentTarget.classList[3];
        // שומר סוג תרופה
        strMedTypeFromSearch = objInfo[event.currentTarget.classList[3]].color;
        // משנה צבע של הגל והכפתור
        document.querySelector(`.wave`).classList.add(strMedTypeFromSearch);
        document.querySelector(`.topButton`).classList.add(strMedTypeFromSearch);
    }
    // משנה כפתור עליון
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    // מחזיר מאזיני לחיצה, מאתחל גלילה ומוחק תעודות זהות קודמות
    document.querySelector('.medicineId').style.pointerEvents = "all";
    document.querySelector('.medicineId').innerHTML = "";
    document.querySelector('.medicineId').scrollTop = 0;
    // משנה כותרת
    document.querySelector(`.title`).classList.add("titelMedId");
    document.querySelector(`.title`).innerHTML = addSpace(strCurrentMed);
    // משכפל טמפלט ומכניס את התעודת זהות
    let template = document.querySelector(`.${objCurrentMed.type}`);
    let clon = template.content.cloneNode(true);
    document.querySelector('.medicineId').appendChild(clon);
    insertInfoToId(objCurrentMed, strCurrentMed);
    // שם מאזין לחץ חזור לפי הדף שהיה קודם
    if (strcurrentPage === "medShelf") {
        document.querySelector('.topButton').addEventListener("click", creatMedShelfs);
    } else {
        document.querySelector('.topButton').addEventListener("click", sendToHomePage);
    }
    // שומר את העמוד הנוכחי
    strcurrentPage = "medId"
}

/* insertInfoToId
--------------------------------------------------------------
Description: */
const insertInfoToId = (objCurrentMed, strCurrentMed) => {
    // Check which type and change html accordingly
    document.querySelector(`.medicineId .sub-titles`).innerHTML = addSpace(strCurrentMed);
    switch (objCurrentMed.type) {
        case 'text':
            for(let i = 0; i < objCurrentMed.content.length; i++){
                let parah = El("div", {cls : "IdParah"}, objCurrentMed.content[i]);
                document.querySelector(`.content`).append(parah); 
            }
            break;
        case 'listDots': case 'listNumbers':
            for(let i = 0; i < objCurrentMed.content.length; i++){
                let parah = El("li", {cls : "listItem"}, objCurrentMed.content[i]);
                document.querySelector(`.content`).append(parah); 
            }
            break;
        case 'textAndPic':
            for(let i = 0; i < objCurrentMed.content.length; i++){
                let parah = El("div", {cls : "IdParah"}, objCurrentMed.content[i]);
                document.querySelector(`.content`).append(parah); 
            }
            document.querySelector(`.idPic`).setAttribute("src", objCurrentMed.pic); 
            break;
        case 'textAndPics':
            for(let i = 0; i < objCurrentMed.content.length; i++){
                let parah = El("div", {cls : "IdParah"}, objCurrentMed.content[i]);
                document.querySelector(`.content`).append(parah); 
            }
            for(let i = 0; i < objCurrentMed.pic.length; i++){
                let parah = El("img", {cls : "picId", attributes : {src : objCurrentMed.pic[i]}});
                document.querySelector(`.idPicContainer`).append(parah); 
            }
            break;
        case 'textAndVideo':
            for(let i = 0; i < objCurrentMed.content.length; i++){
                let parah = El("div", {cls : "IdParah"}, objCurrentMed.content[i]);
                document.querySelector(`.content`).append(parah); 
            }
            document.querySelector(`.youtubeVideo`).setAttribute("src", objCurrentMed.video); 
            break;
        default: console.log("default");
    }

}

/* addSpace
--------------------------------------------------------------
Description: change hyphen to space */
const addSpace = (phrase) => {
    return phrase.replace(/-/g, ' ');
}

/* creatMedShelfs
--------------------------------------------------------------
Description: */
const creatMedShelfs = (event) => {
    if (strcurrentPage === "medId") {
        //  מעלים תעודת זהות, משנה מאפיינים לכותרת ומראה סמל
        document.querySelector('.medicineId').classList.add("hidden");
        document.querySelector(`.title`).classList.remove("titelMedId");
        // משנה את הכפתור העליון ושם לו מאזין  
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
        document.querySelector('.topButton').removeEventListener("click", creatMedShelfs);
        // משנה צבע של הגל והכפתור
        if (strMedTypeFromSearch !== undefined) {
            document.querySelector(`.wave`).classList.remove(objInfo[strCurrentSubject].color);
            document.querySelector(`.topButton`).classList.remove(objInfo[strCurrentSubject].color);
        }
    } else if (strcurrentPage === "homePage") {
        // שומר את סוג התרופות ומעלים מסך בית
        strCurrentSubject = event.currentTarget.classList[1]
        document.querySelector('.homePageButtons').classList.add("hidden");
        document.querySelector('.aboutButton').classList.add("hidden");
    } else if (strcurrentPage === "practicePage") {
        // משנה מאפיינים של כותרת
        document.querySelector(`.titleConeiner`).classList.remove("titleContainerPractice");
        // משנה גל וכפתור עליון
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
        document.querySelector('.topButton').classList.remove("topButtonPractice");
        // מעלים דמות ושאלה
        document.querySelector('.practicePage').classList.add("hidden");
        // משנה צבע של חלונית תשובות ושל כפתור סיום
        document.querySelector(`.practiceBottomButton`).classList.remove(objInfo[strCurrentSubject].color);
        document.querySelector(`.practiceRightAnswersConteiner`).classList.remove(objInfo[strCurrentSubject].color);
        // מחליף תמונה של כפתור סיום לכפתור בדיקה
        document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/check_button.svg");
        // מעלים שאלות ומראה תשובות נכונות
        document.querySelector(`.practiceRightAnswersConteiner`).classList.add("hidden");
        document.querySelector(`.answersContainer`).classList.remove("hidden");
    }
   
    // שומר את העמוד הנוכחי
    strcurrentPage = "medShelf"
    // משנה צבע לפי הסוג
    document.querySelector(`.wave`).classList.add(objInfo[strCurrentSubject].color);
    document.querySelector(`.topButton`).classList.add(objInfo[strCurrentSubject].color);
    document.querySelector(`.searchBoxHolder`).classList.add(objInfo[strCurrentSubject].color);
    document.querySelector(`.shelfsButtons .homeButton`).classList.add(objInfo[strCurrentSubject].color);
    document.querySelector(`.practiceButton`).classList.add(objInfo[strCurrentSubject].color);
    // משנה כותרת
    document.querySelector(`.title`).innerHTML = addSpace(strCurrentSubject);
    document.querySelector(`.title`).classList.add("titleMedShelfs");
    // יוצר קונטיינר למדפים
    let shelfContent = El("div", {classes : [`${strCurrentSubject}Shelf`, "medShelf"]},
    El("img", {attributes: {src: objInfo[strCurrentSubject].pic , class: "medTypeSymbol"}})
    );
    document.querySelector(`.shelfsPage`).append(shelfContent);
    // שומר אינדקס למדפים ויוצר מדפים לפי מספר תתי הנושאים
    let index = 1;
    for(let key of Object.keys(objInfo[strCurrentSubject])) {
        if(key !== "pic" && key !== "color"){
            let shelf = El("div", {classes : [`shelfs`, `shelf${index}`], listeners : {click : controlShelfsDropDown}},
                El("div", {cls : `shelfHedline`},
                    addSpace(key),
                    El("img", {attributes : {src: `../assets/images/grapics/med-shelfs/down-button.svg`}, classes : ["downButton", objInfo[strCurrentSubject].color]})
                ),
                El("img", {attributes : {src: `../assets/images/grapics/med-shelfs/shelf.svg`}, classes : ["shelf", objInfo[strCurrentSubject].color]})
            );
            document.querySelector(`.${strCurrentSubject}Shelf`).append(shelf);
            
            let shelfDropDown = El("div", {classes : [`shelf${index}dropDown`, `shelfsdropDown`, `hidden`]},
            El("div", {cls : `shelfDiscriptionSection`}),
            El("div", {cls : `shelfPicSection`}),
            );
            document.querySelector(`.${strCurrentSubject}Shelf`).append(shelfDropDown);
            for(let subSubject of Object.keys(objInfo[strCurrentSubject][key])) {
                if(subSubject !== "discription"){
                    let dropDownPic = El("div", {classes : [`shelfMedPicContainer`, subSubject, key, strCurrentSubject]},
                    // El("img", {attributes : {src: `../assets/images/grapics/med-shelfs/down-button.svg`}, classes : ["shelfMedPic"]}),
                    addSpace(subSubject),
                    );
                    document.querySelector(`.shelf${index}dropDown > .shelfPicSection`).append(dropDownPic);
                } else {
                    document.querySelector(`.shelf${index}dropDown > .shelfDiscriptionSection`).append(objInfo[strCurrentSubject][key].discription);                    
                }
            }
            index++;
        }
    }
    // מראה סמל בכותרת וכפתורים למטה
    document.querySelector(`.shelfsButtons`).classList.remove("hidden");
    document.querySelector(`.homeButton`).addEventListener("click", sendToHomePage);
    // שומר שאלות ושולח לתרגול
    QUESTIONS = shuffle(DATA[strCurrentSubject]["questionsPractice"]);
    document.querySelector(`.practiceButton`).addEventListener("click", onClickPractice);
    bSearchScreen = false;
}

/* controlShelfsDropDown
--------------------------------------------------------------
Description: */
const controlShelfsDropDown = (event) => {
    // שומר מדף שנלחץ
    let strChosenShelf = event.currentTarget.classList[1];
    // סוגר מדף
    if (document.querySelector(`.${strCurrentSubject}Shelf >  .${strChosenShelf} .downButton`).getAttribute("src").includes("up")) {
        document.querySelector(`.${strCurrentSubject}Shelf >  .${strChosenShelf} .downButton`).setAttribute("src", "../assets/images/grapics/med-shelfs/down-button.svg");
        document.querySelector(`.${strCurrentSubject}Shelf >  .${strChosenShelf}dropDown`).classList.add("hidden");
    }else { // פותח מדף
        let arrMedIdButtons = document.querySelectorAll(`.${strCurrentSubject}Shelf >  .${strChosenShelf}dropDown .shelfMedPicContainer`);
        for (let i = 0; i < arrMedIdButtons.length; i++) {
            arrMedIdButtons[i].addEventListener('click', creatMedID);
        }
        document.querySelector(`.${strCurrentSubject}Shelf >  .${strChosenShelf}dropDown`).classList.remove("hidden");
        document.querySelector(`.${strCurrentSubject}Shelf >  .${strChosenShelf} .downButton`).setAttribute("src", "../assets/images/grapics/med-shelfs/up-button.svg");
    }
}

/* sendToHomePage
--------------------------------------------------------------
Description: */
const sendToHomePage = () => {
    if (strcurrentPage === "medId") {
        // מוריד צבע של הגל והכפתור
        document.querySelector(`.wave`).classList.remove(objInfo[strCurrentSubject].color);
        document.querySelector(`.topButton`).classList.remove(objInfo[strCurrentSubject].color);
        // לא מאפשר מאזיני לחיצה, מעלים תעודת זהות ומאפיינים של הכותרת
        document.querySelector('.medicineId').style.pointerEvents = "none";
        document.querySelector('.medicineId').classList.add("hidden");
        document.querySelector(`.title`).classList.remove("titelMedId");
        // משנה כפתור חץ לחיפוש ומוריד ממנו מאזין
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
        document.querySelector('.topButton').removeEventListener("click", sendToHomePage);
    } else if (strcurrentPage === "medShelf") {
        // מעלים מדפים, סמלים בכותרת וכפתורים למטה    
        let shelf = document.querySelector(`.${strCurrentSubject}Shelf`)
        document.querySelector(`.shelfsPage`).removeChild(shelf);
        document.querySelector(`.shelfsButtons`).classList.add("hidden");
        // משנה מאפיינים של כותרת
        document.querySelector(`.title`).classList.remove("titleMedShelfs");
        // משנה חזרה צבעים לכחול
        document.querySelector(`.wave`).classList.remove(objInfo[strCurrentSubject].color);
        document.querySelector(`.topButton`).classList.remove(objInfo[strCurrentSubject].color);
        document.querySelector(`.searchBoxHolder`).classList.remove(objInfo[strCurrentSubject].color);
        document.querySelector(`.shelfsButtons .homeButton`).classList.remove(objInfo[strCurrentSubject].color);
        document.querySelector(`.practiceButton`).classList.remove(objInfo[strCurrentSubject].color);
    } else if (strcurrentPage === "examPrePage") {
        // מעלים דף התחלת מבחן, ומשנה כפתור עליו לחיפוש 
        document.querySelector(`.examPage`).classList.add("hidden");
        document.querySelector(`.beforeExamPage`).classList.add("hidden"); 
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
    }  else if (strcurrentPage === "endOfTest") {
        // מעלים דף סיום מבחן, ומשנה כפתור עליו לחיפוש 
        document.querySelector(`.afterExamPage`).classList.add("hidden");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
    } else {
        // מעלים דף אודות, ומשנה כפתור עליו לחיפוש 
        document.querySelector('.aboutPage').classList.add("hidden");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
    }
    // משנה כותרת, מראה דף בית וכפתור אודות 
    document.querySelector(`.title`).innerHTML = addSpace(HEADLINE);
    document.querySelector('.homePage').classList.remove("hidden");
    document.querySelector('.aboutButton').classList.remove("hidden");
    document.querySelector('.homePageButtons').classList.remove("hidden");
  
    // שומר דף נוכחי
    strcurrentPage = "homePage"
}


//   @template T
//   @param {keyof HTMLElementTagNameMap} tagName 
//   @param {{classes?: string[], cls?: string, id?: string, attributes: {[index: string]: string | { toString(): string }}, listeners: Listeners}} options 
//   @param  {...string | Node} children 
function El(tagName, options = {}, ...children) {
    let el = Object.assign(document.createElement(tagName), options.fields || {});
    if (options.classes && options.classes.length) el.classList.add(...options.classes);
    else if (options.cls) el.classList.add(options.cls);
    if (options.id) el.id = options.id;
    el.append(...children.filter(el => el));
    for (let listenerName of Object.keys(options.listeners || {}))
        if (options.listeners[listenerName]) el.addEventListener(listenerName, options.listeners[listenerName], false);
    for (let attributeName of Object.keys(options.attributes || {})) {
        if (options.attributes[attributeName] !== undefined) el.setAttribute(attributeName, options.attributes[attributeName]);
    }
    return el;
}