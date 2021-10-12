let objMedInfo = {
    // antiallergic-----------------------------------------------------------------------------------------------------------------------
    // אנטיהיסטמינים – נוגדי אלרגיה
    "Loratadine-Desloratadine": {
        type : "withoutMechanism",
        pic : "antiallergic/aerius", 
        genericName : "Loratadine-Desloratadine",
        commercialName : "Allergyx<br>Aerius",
        indication : "נזלת אלרגית<br>אורטיקריה (פריחה המתבטאת בנגעים אדומים בולטים בצורות שונות ומגרדות)",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "ישנוניות במינונים גבוהים",
        patientGuidelines : "שימוש מעבר למינון המקובל עלול לגרום לישנוניות",
    },
    "Azelastine": {
        type : "withoutMechanism",
        pic : "antiallergic/optilast", 
        genericName : "Azelastine",
        commercialName : "Optilast<br>Astelin",
        indication : "נזלת אלרגית<br>דלקת עיניים אלרגית<br>Vasomotor Rhinitis – נזלת כתוצאה מהרחבת כלי דם בריריות האף",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "ישנוניות (בשימוש דרך האף)<br>התקף אסטמה(בשימוש דרך האף, נדיר)",
        patientGuidelines : "לפני שימוש בטיפות עיניים יש להקפיד על שטיפת ידיים<br>בזמן שימוש בטיפות עיניים אין לגעת בפיית הבקבוקון בעין<br>אין לבצע פעולות הדורשות ערנות לאחר שימוש בתרופה דרך האף",
    },
    // סטרואידים – מדכאי תגובה חיסונית 
    "Predisone": {
        type : "withoutMechanism",
        pic : "antiallergic/Predninsone", 
        genericName : "Predisone",
        commercialName : "Predisone",
        indication : "דלקת חמורה (עקב זיהום/גידול/אחר)<br>הפרעות הורמונליות",
        contraindication : "אלרגיה לתרופה<br>זיהומים חמורים ספציפיים (זיהום פטרייתי בדם, זיהום הרפס בעין..)",
        sideEffect : "תופעות נוירולוגיות ופסיכיאטריות (פרכוסים, פסיכוזה, קשיי שינה ועוד..)<br>תופעות לבביות (אי ספיקת לב, הפרעות קצב לב, קרישי דם ועוד..)<br>תופעות במערכת העיכול (כאבי בטן, כיב קיבה, דלקת בלבלב ועוד..)<br>עלייה ברמות סוכר<br>עלייה בלחץ דם<br>הפרעות במאזן מלחים",
        patientGuidelines : "לא להפסיק את הטיפול בפתאומיות, אלא בהתאם להנחיות רופא בלבד<br>לקחת עם אוכל<br>להיות ערניים לפצעים/זיהומים שאינם מחלימים",
    },
    "Fluticasone-nasal": {
        type : "withoutMechanism",
        pic : "antiallergic/flixonase", 
        genericName : "Fluticasone",
        commercialName : "Flixonase",
        indication : "נזלת (אלרגית ולא אלרגית)",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "אין",
        patientGuidelines : "להימנע מריסוס לעיניים<br>לנער לפני שימוש",
    },
    "Betamethasone-משחה": {
        type : "withoutMechanism",
        pic : "antiallergic/betacorten", 
        genericName : "Betamethasone 0.1%",
        commercialName : "Betacaroten",
        indication : "נגעים דלקתיים בעור<br>פסוריאזיס (מחלת עור שמתבטאת בנגעים קשקשיים מרובים)",
        contraindication : "אלרגיה לתרופה ולסטרואידים אחרים",
        sideEffect : "אין",
        patientGuidelines : "לשימוש חיצוני בלבד<br>לשטוף ידיים אחרי המריחה<br>יש למרוח שכבה דקה בלי לעסות את אזור המריחה ולהמתין לספיגה<br>שמירה על היגיינת העור<br>להגיע לבדיקת רופא במידה ויש גירוי עור או זיהום משני של העור",
    },
    "Pseudoephedrine": {
        type : "withMechanism",
        pic : "antiallergic/sinufed", 
        genericName : "Pseudoephedrine",
        commercialName : "Sinufed",
        indication : "גודש באף",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "קשיי שינה, עצבנות<br>פלפיטציות (דפיקות לב)",
        patientGuidelines : "לא מומלץ לקחת שעתיים לפני השינה",
        mechanismOfAction : "כיווץ כלי דם באף ובכך הפחתת גודש",
    },
    "Oxymetazoline-nasal": {
        type : "withoutMechanism",
        pic : "antiallergic/otrivine", 
        genericName : "Oxymetazoline",
        commercialName : "Sinulen",
        indication : "גודש באף",
        contraindication : "אלרגיה לתרופה<br>אחרי ניתוח באזור האף/פה/לוע<br>יתר לחץ דם ומחלות לב/ כלי דם אחרות (התרופה גורמת לכיווץ כלי דם ולכן עלולה לגרום לעלייה בלחץ דם)",
        sideEffect : "יובש/צריבה בריריות האף והלוע<br>החמרת הגודש באף<br>נדיר – עלייה בלחץ דם ודפיקות לב (התרופה גורמת לכיווץ כלי דם ולכן עלולה לגרום לעלייה בלחץ דם)",
        patientGuidelines : "עד 2 טיפות לכל נחיר, 3 פעמים ביום, במידת הצורך<br>אין להשתמש יותר מ 3 ימים ברצף (עלולה להיווצר תלות פיזיולוגית בתרופה)",
    },
    // antibiotics-----------------------------------------------------------------------------------------------------------------------
    // אנטיביוטיקה
    "Penicillins": {
        type : "withMechanism",
        pic : "antibiotics/moxypen", 
        genericName : "Penicillins VK<br>Amoxicillin",
        commercialName : "Rafapen, Pen-Rafa<br>Moxypen",
        indication : "מגוון זיהומים חיידקיים",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "נפוצות:<br>כאבי בטן<br>שלשולים<br>פריחה<br>נדירות:<br>דיכויי ייצור תאי דם במח העצם<br>הפרעות במאזן המלחים בדם<br>תסמינים נורולוגיים (בלבול, ישנוניות ועוד..)(בעיקר בחולים עם אי ספיקה כלייתית, כי התרופה אינה מתפנה היטב בשתן)<br>פגיעה כבדית וכלייתית (בעיקר במינונים גבוהים ו/או טיפולים ממושכים)",
        patientGuidelines : "לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר<br>מומלץ לקחת אחרי אוכל, על בטן מלאה (כדי להפחית תופעות לוואי במערכת העיכול)<br>לפנות לבדיקה רפואית במקרה של שלשול ממושך (גם בשבועות שאחרי סיום הטיפול) – עלול להעיד על זיהום מסויים במעי הגס הדורש טיפול (CDAD)<br>לפנות לבדיקה רפואית אם מופיעה תגובה אלרגית, גם תגובה אלרגית קלה כמו פריחה",
        mechanismOfAction : "פגיעה בבניית דופן התא של החיידקים ועל כן הריגה של החיידקים",
    },
    "Cephalosporines": {
        type : "withMechanism",
        pic : "antibiotics/zinnat", 
        genericName : "Cephalexin<br>Cefuroxime",
        commercialName : "Ceforal, Cefovit<br>Zinnat",
        indication : "מגוון זיהומים חיידקיים",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "נפוצות:<br>כאבי בטן<br>שלשולים<br>פריחה<br>נדירות:<br>דיכויי ייצור תאי דם במח העצם<br>פגיעה כבדית (קלה) וכלייתית (בעיקר בחולים מבוגרים ו/או בעלי מחלה כלייתית כרונית)",
        patientGuidelines : "לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר<br>מומלץ לקחת אחרי אוכל, על בטן מלאה (כדי להפחית תופעות לוואי במערכת העיכול)<br>לפנות לבדיקה רפואית במקרה של שלשול ממושך (גם בשבועות שאחרי סיום הטיפול) – עלול להעיד על זיהום מסויים במעי הגס הדורש טיפול (CDAD)<br>לפנות לבדיקה רפואית אם מופיעה תגובה אלרגית, גם תגובה אלרגית קלה כמו פריחה",
        mechanismOfAction : "פגיעה בבניית דופן התא של החיידקים ועל כן הריגה של החיידקים",
    },
    "Macrolides": {
        type : "withMechanism",
        pic : "antibiotics/klaridex", 
        genericName : "Clarithromycin (TAB)<br>Roxythromycin (TAB)<br>Erythromycin",
        commercialName : "Klarin, Klaridex<br>Rulid, Roxo<br>Acnetrim, Acnemycin",
        indication : "מגוון זיהומים חיידקיים",
        contraindication : "אלרגיה לתרופה<br>תפקודי כבד לקויים בעבר עקב תרופה מהמשפחה",
        sideEffect : "מערכת העיכול – כאבי בטן, שלשולים ועוד<br>הפרעות בקצב לב<br>פריחה ורגישות מוגברת של העור לשמש",
        patientGuidelines : "לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר<br>אין הכרח לקחת אחרי האוכל, אבל זה יכול להפחית תופעות לוואי במערכת העיכול<br>לפנות לבדיקה רפואית במקרה של שלשול ממושך (גם בשבועות שאחרי סיום הטיפול) – עלול להעיד על זיהום מסויים במעי הגס הדורש טיפול (CDAD)<br>תמיסה Acnetrim/Acnemycin מיועדת לשימוש חיצוני בלבד, וטרם המריחה יש לשטוף פנים עם מים וסבון ולהמתין לייבוש",
        mechanismOfAction : "עיכוב בניית חלבונים בחיידקים. כתלות במינון נוצרת השפעה של הריגת החיידקים או עצירת התרבותם",
    },
    "Fluoroquinolones": {
        type : "withMechanism",
        pic : "antibiotics/ofloxacin", 
        genericName : "Ofloxacin",
        commercialName : "Oflodex",
        indication : "מגוון זיהומים חיידקיים",
        contraindication : "אלרגיה לתרופה<br>מחלה עצבית בשם Myasthenia Gravis",
        sideEffect : "מערכת העיכול – כאבי בטן, שלשולים ועוד<br>תופעות לוואי נוירולוגיות נפוצות (סחרחורות, כאבי ראש, קשיי שינה..) ונדירות (פרכוסים, הזיות, חולשת שרירים...)<br>פגיעה כבדית<br>דלקות וקרעים בגידים<br>רגישות מוגברת של העור לשמש<br>דיכוי יצירת תאי דם במח עצם",
        patientGuidelines : `לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר.<br>אין הכרח לקחת אחרי האוכל, אבל זה יכול להפחית תופעות לוואי במערכת העיכול<br>לפנות לבדיקה רפואית במקרה של שלשול ממושך (גם בשבועות שאחרי סיום הטיפול) – עלול להעיד על זיהום מסויים במעי הגס הדורש טיפול (CDAD)<br>אין לקחת ביחד עם סותרי חומצה וויטמינים.<br>להימנע מפעולות הדורשת ערנות וריכוז אחרי לקיחת התקופה (בגלל הסיכון לתופעות לוואי נוירולוגיות)<br>מניעה מחשיפה ממושכת לשמש ושימוש בקרם הגנה (התרופה מגבירה רגישות של העור לשמש)<br>לפנות לבדיקה רפואית אם מופיעה תגובה אלרגית, גם תגובה אלרגית קלה כמו פריחה. כנ"ל אם מופיעות תופעות לוואי נוירולוגיות משמעותיות.`,
        mechanismOfAction : "עיכוב שכפול החומר התורשתי (DNA) של חיידקים, ובכך פוגע בהתרבות החיידקים.",
    },
    "Tetracyclines": {
        type : "withMechanism",
        pic : "antibiotics/minocycline", 
        genericName : "Doxyxycline<br>Minocycline",
        commercialName : "Doxylin<br>Minocycline",
        indication : "מגוון זיהומים חיידקיים",
        contraindication : "אלרגיה לתרופה<br>הריון והנקה (התרופות עלולות לפגוע בעובר באופן בלתי הפיך)",
        sideEffect : "מערכת העיכול – כאבי בטן, שלשולים, פגיעה בריריות למשל בוושט ועוד.<br>רגישות מוגברת של העור לשמש.<br>שינוי צבע קבוע של השיניים (בעיקר בילדים).<br>דיכוי יצירת תאי דם במח עצם.<br>אי ספיקת כליות Minocycline))<br>עלייה בלחץ התוך גולגולתי.",
        patientGuidelines : "אין הכרח לקחת אחרי האוכל, אבל זה יכול להפחית תופעות לוואי במערכת העיכול.<br>לפנות לבדיקה רפואית במקרה של שלשול ממושך (גם בשבועות שאחרי סיום הטיפול) – עלול להעיד על זיהום מסויים במעי הגס הדורש טיפול (CDAD)<br>להרבות בשתיה ולקחת את התרופה עם כוס מים מלאה.<br>לא לשכב למשך כשעה אחרי נטילת התרופה (ישנה סכנה לפגיעה בריריות הוושט)<br>מניעה מחשיפה ממושכת לשמש ושימוש בקרם הגנה (בגלל שהתרופה מגבירה רגישות של העור לשמש)",
        mechanismOfAction : `עיכוב בניית חלבונים בחיידקים. בד"כ גורמים לעצירת ההתרבות של החיידקים , ולפעמים להריגתם.`,
    },
    // אנטיביוטיקה - אחר
    "Sulfamethoxazole-Trimethoprim": {
        type : "withMechanism",
        pic : "antibiotics/diseptyl", 
        genericName : "Sulfamethoxazole-Trimethoprim",
        commercialName : "Resprim<br>Diseptyl",
        indication : "מגוון זיהומים חיידקיים.",
        contraindication : "אלרגיה לתרופה <br>אי ספיקת כליות<br>פגיעה בתפקודי כבד.<br>אנמיה כתוצאה ממחסור בחומצה פולית",
        sideEffect : "כאבי בטן, שלשולים<br>פנקראטיטיס – דלקת בלבלב.<br>פגיעה כלייתית.<br>פגיעה כבדית שמובילה לצהבת.<br>דיכוי יצירת תאי דם במח עצם.<br>תגובות עוריות כמו פריחה.",
        patientGuidelines : "לא להפסיק את הטיפול באמצע, אלא לסיים את כולו, גם אם מרגישים טוב יותר.<br>שתיית מים מרובה.<br>לצמצם חשיפה לשמש ולהשתמש בקרם הגנה (התרופה עלולה להגביר את הרגישות של העור לשמש)<br>לפנות לבדיקה רפואית במידה ויש פריחה. היא עלולה להעיד על התחלה של אנאפילקסיס או תגובה מסוכנת אחרת לטיפול.",
        mechanismOfAction : "עיכוב ייצור חומצה פולית בחיידקים (חינוי להישרדותם) ובכך גורם להריגתם.",
    },
    "Mupirocin": {
        type : "withMechanism",
        pic : "antibiotics/bactorban", 
        genericName : "Mupirocin",
        commercialName : "Bactorban CRM",
        indication : "מגוון זיהומים חיידקיים בעור, כולל אימפטיגו.",
        contraindication : "אלרגיה לתרופה<br>פצעים פתוחים גדולים וכוויות נרחבות.",
        sideEffect : "גירוי מקומי של העור",
        patientGuidelines : "לשימוש חיצוני בלבד.<br>יש להימנע ממגע עם העיינים, במידה והתרופה חדרה לעין יש לשטוף באופן יסודי עם מים זורמים.<br>אין להשתמש בתכשירים עוריים אחרים באיזור הטיפול (כולל תכשירים קוסמטיים).<br>לחזור לבדיקת רופא במידה ואין שיפור או יש החרמה אחרי 3-5 ימים.",
        mechanismOfAction : "עיכוב בניית חלבונים בחיידקים",
    },
    "Chloramphenicol": {
        type : "withMechanism",
        pic : "antibiotics/synthomycine5", 
        genericName : "Chloramphenicol 3% \ 5%",
        commercialName : "Synthomycine",
        indication : "זיהומים חיידקיים בעור או בעיניים.",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "גירוי מקומי של העור או העיניים (בעיניים יכול להתבטא בהפרעה לראיה)",
        patientGuidelines : "לשטוף ידיים במים וסבון לפני ואחרי השימוש.<br>עיניים – לשים מעט משחה בעין כאשר הראש מוטה אחורנית, ולעצום את העין למשך דקה לפחות בשביל ספיגה מיטבית.<br>חבישה אחרי שימוש – לפי הוראות רופא פרטניות.",
        mechanismOfAction : "משחה אנטיביוטית לעור / לעיניים (קיים גם בצורת טיפות עיניים).",
    },
    "Gentamycin": {
        type : "withMechanism",
        pic : "antibiotics/lacromycin", 
        genericName : "Gentamycin",
        commercialName : "Lacromycin טיפות עיניים",
        indication : "מגוון זיהומים חיידקיים.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "גירוי מקומי של העיניים שמתבטא בגירוד, כאב, הפרעה לראיה וכו'.",
        patientGuidelines : "לשטוף ידיים במים וסבון לפני השימוש.<br>לטפטף לעין בזמן שהראש מוטה אחורנית מבלי לגעת בעין עם הבקבוקון.<br>לוודא שהראיה תקינה ולא מטושטשת לפני פעולות כמו נהיגה.",
        mechanismOfAction : "טיפות עיניים אנטיביוטיות.",
    },
    // תרופות אנטי-ויראליות
    "Acyclovir": {
        type : "withMechanism",
        pic : "antibiotics/zovirax", 
        genericName : " Acyclovir (TAB\CRM)",
        commercialName : "Zovirax",
        indication : "זיהומים ויראליים עוריים וגנטיליים (בעיקר הרפס) וגם אחרים.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "תסמינים נוירולוגיים – ירידה ברמת ההכרה, בלבול, הזיות, פרכוסים.<br>אי ספיקת כליות.<br>דיכוי יצירת תאי דם במח עצם<br>תגובה עורית (משחה – גירוי מקומי)",
        patientGuidelines : "התרופה לא מונעת הדבקת אחרים בהרפס ועל כן, יש להימנע ממגע ישיר או עקיף עם אנשים אחרים בזמן זיהום פעיל בשפתיים או באיברי המין.<br>זיהום הרפס נוטה להתפרץ שוב מספר פעמים במהלך החיים וכלל שמתחילים טיפול יותר מוקדם כך הטיפול יעיל יותר – תסמינים מקדימים להתפרצות הזיהום כוללים נימול ועקצוצים באיזור השפתיים או איברי המין (תלוי במיקום הזיהום).<br>מומלץ להרבות בשתיית מים.",
        mechanismOfAction : "עיכוב יצירת חומר תורשתי (DNA) בוירוסים ובכך עיכוב שכפול הוירוסים.",
    },
    // תרופות אנטי-פטרייתיות
    "Clotrimazole-VAG-CRM": {
        type : "withMechanism",
        pic : "antibiotics/agisten", 
        genericName : " Clotrimazole (VAG CRM)",
        commercialName : "Agisten (Vag. Tab.)",
        indication : "זיהום פטרייתי בנרתיק.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "גירוי מקומי",
        patientGuidelines : "זיהומים חוזרים או ממושכים ידרשו בירור רפואי נוסף.<br>להימנע מקיום יחסי מין בזמן הטיפול.<br>התרופה עלולה להכתים בגדים ועל כן, רצוי להשתמש בפד סופג בתחתון.<br>יש להמשיך את הטיפול גם בזמן מחזור.<br>לסיים את הטיפול ולא להפסיק באמצע, גם אם מרגישים טוב יותר.",
        mechanismOfAction : "פגיעה בדופן תאי הפטריות ובכך הריגתם או עיכוב התרבותם.",
    },
    "Clotrimazole-CRM": {
        type : "withMechanism",
        pic : "antibiotics/clotrimaderm", 
        genericName : " Clotrimazole (CRM)",
        commercialName : "Clotrimaderm, Pitrion (CRM)",
        indication : "זיהום פטרייתי עורי.",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "גירוי מקומי.",
        patientGuidelines : "שטיפת ידיים לפני ואחרי המריחה.<br>לנקות את האזור המזוהם עם מים וסבון לפני השימוש ולהמתין לייבוש לפני מריחת המשחה.<br>חבישה – לפי הוראות רופא פרטניות.",
        mechanismOfAction : "פגיעה בדופן תאי הפטריות ובכך הריגתם או עיכוב התרבותם.",
    },
    "Clotrimazole-Neomycin-Dexamethasone": {
        type : "withMechanism",
        pic : "antibiotics/polycutan-tevacutan", 
        genericName : " Clotrimazole + Neomycin + Dexamethasone (CRM)",
        commercialName : "Tevacutan CRM, Polycutan CRM",
        indication : "זיהום פטרייתי עורי שמשלב זיהום חיידקי.",
        contraindication : "אלרגיה לתרופה.<br>זיהום ויראלי בעור למשל הרפס.<br>שימוש באוזן החיצונית אסור אם יש קרע בעור התוף.",
        sideEffect : "גירוי מקומי.",
        patientGuidelines : "שטיפת ידיים לפני ואחרי המריחה.<br>לנקות את האיזור המזוהם עם מים וסבון לפני השימוש ולהמתין לייבוש לפני מריחת המשחה.<br>חבישה – לפי הוראות רופא פרטניות.",
        mechanismOfAction : "Clotrimazole – השפעה אנטי- פטרייתית.<br>Neomycin – השפעה אנטיביוטית.<br>Dexamethasone – סטרואידים, השפעה אנטי דלקתית.",
    },
    "Undeceonic-Acid": {
        type : "withoutMechanism",
        pic : "antibiotics/fungmon", 
        genericName : "Undeceonic Acid",
        commercialName : "Undecyl, Fungimon (אבקה/CRM)",
        indication : "פטרת בכפות הרגליים",
        contraindication : "אלרגיה לתרופה.",
        sideEffect : "גירוי מקומי.",
        patientGuidelines : "ניתן להשתמש עד 5 פעמים ביום, לאחר שטיפת כפות הרגליים במים וסבון וייבוש.<br>הדרכה בנוגע לשמירה על היגיינה של כפות הרגליים (שטיפה יומית עם מים וסבון, ייבוש גם בין האצבעות וכו')",
    },
    // breathing-----------------------------------------------------------------------------------------------------------------------
    // הרחבת דרכי נשימה
    "Salbutamol-Albuterol": {
        type : "withoutMechanism",
        pic : "breathing/ventolin-inhaler", 
        genericName : "Salbutamol / Albuterol",
        commercialName : "Ventolin (נוזל לאינהלציה או משאף)",
        indication : "טיפול ומניעת התקפי אסטמה (המונח הרפואי נקרא ברונכוספאזם, ברונכו = סמפונות, ספאזם = כיווץ)",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "טאכיקרדיה<br>רעד בידיים<br>ברונכוספאזם פרדוקסלי",
        patientGuidelines : "אם המטופל משתמש במספר משאפים – להמתין 2 דקות בין משאף למשאף<br>אם המטופל משתמש גם במשאף סטרואידים יש להשתמש קודם בVentolin וכעבור 5 דקות במשאף סטרואידים (המטרה קודם לגרום להרפייה והרחבה של דרכי הנשימה על מנת למקסם את יעילות המשאף השני)",
    },
    "Ipratropium-Bromide": {
        type : "withoutMechanism",
        pic : "breathing/Aerovent", 
        genericName : "Ipratropium Bromide ",
        commercialName : "aerovent (נוזל לאינהלציה או משאף)",
        indication : "התקפי אסטמה (ביחד עם Ventolin)<br>COPD (מחלת ריאות כרונית)<br>נזלת",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "יובש בפה ובריריות<br>טשטוש ראיה (במגע עם העיניים)",
        patientGuidelines : "התרופה לבדה לא מספיקה לטיפול בהתקפי אסטמה <br>להימנע ממגע עם העיניים<br>אם המטופל משתמש במספר משאפים – להמתין 2 דקות בין משאף למשאף<br>אם המטופל משתמש גם במשאף סטרואידים יש להשתמש קודם בVentolin וכעבור 5 דקות במשאף סטרואידים (המטרה קודם לגרום להרפייה והרחבה של דרכי הנשימה על מנת למקסם את יעילות המשאף השני)",
    },
    // דיכוי דלקת בדרכי הנשימה 
    "Budesonide": {
        type : "withoutMechanism",
        pic : "breathing/budecort", 
        genericName : "Budesonide",
        commercialName : "Budicort (משאף)",
        indication : "טיפול מניעתי (כרוני) לחולי אסטמה",
        contraindication : "אלרגיה לתרופה ולחלבוני חלב<br>תקופה של החמרה אקוטית משמעותית באסטמה",
        sideEffect : "יובש וזיהום פטרייי בפה<br>פרונכוספאזם פרדוקסלי",
        patientGuidelines : "התרופה לא נועדה לטפל בהתקפי אסטמה <br>שיפור משמעותי נצפה רק אחרי 1-2 שבועות מתחילת הטיפול<br>יש לשטוף את הפה אחרי השימוש במשאף",
    },
    "Bromhexine": {
        type : "withMechanism",
        pic : "breathing/mokes", 
        genericName : "Bromhexine",
        commercialName : "Movex",
        indication : "דלקת בדרכי הנשימה הגורמת להפרשות מרובות (צינון, ברונכיטיס ועוד..)",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "בחילות וכאבי בטן",
        patientGuidelines : "התרופה לא נועדה לשימוש ממושך <br>המשך/הופעה של חום ושיעול לחתי דורש בדיקת רופא על מנת לשלול דלקת ריאות",
        mechanismOfAction : "מדלל הפרשות בדרכי הנשימה (ככה יותר קל להוציא ליחה באמצעות שיעול)",
    },
    // chronic-diseases-----------------------------------------------------------------------------------------------------------------------
    // יתר לחץ דם 
    "Amlodipine": {
        type : "withMechanism",
        pic : "chronic-diseases/norvasc", 
        genericName : "Amlodipine",
        commercialName : "Norvasc<br>Amlodipine Teva",
        indication : "יתר לחץ דם<br>תעוקת חזה",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "ירידת לחץ דם שמתבטאת בסחרחורות, טאכיקרדיה ועוד<br>בצקת ריאות וקוצר נשימה",
        patientGuidelines : "מעקב עצמי אחר הלחץ דם<br>לא להפסיק את התרופה בפתאומיות (כדי לא לגרום לאפקט rebound שיכול להתבטא בלחץ דם גבוה, כאבים בחזה ועוד)",
        mechanismOfAction : "הרחבת כלי דם",
    },
    "Enalapril": {
        type : "withMechanism",
        pic : "chronic-diseases/enaladex20",
        genericName : "Enalapril",
        commercialName : "Enaladex",
        indication : "יתר לחץ דם<br>אי ספיקה לבבית",
        contraindication : "אלרגיה לתרופה <br>אי ספיקה כלייתית",
        sideEffect : "ירידת לחץ דם שמתבטאת בסחרחורות, טאכיקרדיה ועוד<br>הפרעה במאזן המלחים בדם",
        patientGuidelines : "מעקב עצמי אחר הלחץ דם<br>שינויי תנוחות איטיים (על מנת למנות צניחה פתאומית של הלחץ דם שתוביל לעלפון)<br>לשתות מספיק מים כדי להימנע מהתייבשות",
        mechanismOfAction : "הרחבת כלי דם + הגברת הפרשה ל מים ומלחים בשתן",
    },
    "Hydrochlorothiazide": {
        type : "withoutMechanism",
        pic : "chronic-diseases/disothiazide", 
        genericName : "Hydrochlorothiazide",
        commercialName : "Disothiazide",
        indication : "יתר לחץ דם<br>בצקות",
        contraindication : `אלרגיה לתרופה <br>אנאוריה ( היעדר מתן שתן, פחות מ50 מ"ל ליממה)`,
        sideEffect : "הפרעה במאזן המלחים בדם <br>דלקת ריאות <br>פריחה <br>דיכוי יצור תאי דם במח העצם <br>פנקראטיטיס ( דלקת בלבלב)<br>אי ספיקה כלייתית",
        patientGuidelines : "מעקב עצמי אחר הלחץ דם <br>שינויי תנוחות איטיים (על מנת למנות צניחה פתאומית של הלחץ דם שתוביל לעלפון)<br>לקחת בבוקר או צהריים עם ארוחה<br>שימוש בקרם הגנה בחשיפה לשמש",
    },
    // יתר שומנים בדם (היפרליפידיה) 
    "Simvastatin": {
        type : "withoutMechanism",
        pic : "chronic-diseases/simvastatin",  
        genericName : "Simvastatin",
        commercialName : "Simvacor<br>Simvaxon<br>Simvastatin Teva",
        indication : "רמת כולסטרול/שומנים גבוהה בדם <br>הפחתת סיכון לתמותה כתוצאה ממחלת לב וכלי דם",
        contraindication : "אלרגיה לתרופה<br>הפרעה בתפקוי כבד",
        sideEffect : "פירוק רקמת שריר<br>אי ספיקה כלייתית <br>פגיעה בכבד",
        patientGuidelines : "לקחת בערב (עיקר ייצור הכולסטרול בגוף מתקיים בשעות הלילה)<br>שמירה על אורח חיים בריא – תזונה נכונה, פעילות גופנית ועוד...",
    },
    // אנמיה
    "Ferrous-Calcium-Citrate": {
        type : "withoutMechanism",
        pic : "chronic-diseases/ferrocal", 
        genericName : "Ferrous Calcium Citrate",
        commercialName : "ferrocal",
        indication : "טיפול ומניעה של אנמיה ממחסור בברזל",
        contraindication : "אלרגיה לתרופה <br>כי בקיבה<br>חסימת מעיים/ בעיות אחרות במעיים",
        sideEffect : "כאבי בטן ועצירות/שלשולים<br>דימום במערכת העיכול ( במצבים חמורים)",
        patientGuidelines : "מומלץ לקחת על בטן ריקה אבל אם התרופה גורמת לכאבי בטן אז אפשרי לקחת עם אוכל<br>מיצי פירות העשירים בוויטמין C משפרים את ספיגת התרופה <br>אסור לקחת ביחד עם מוצרי חלב (להמתין שעתיים לפחות)",
    },
    "Folic-Acid-VitaminB9": {
        type : "withoutMechanism",
        pic : "chronic-diseases/polic-acid", 
        genericName : "Folic Acid (Vitamin B9)",
        commercialName : "Folic Acid",
        indication : "תוסף תזונה<br>טיפול ומניעה של אנמיה כתוצאה ממחסור בחומצה פולית <br>תוסף תזונתי בזמן הריון (הערה – מניעת מומים מולדים)",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "אין",
        patientGuidelines : "אסור לקחת ביחד עם תרופות נוגדות/סותרות חומצה (כמו רני)",
    },
    // דילול דם
    "Acetylsalicylic-Acid": {
        type : "withoutMechanism",
        pic : "chronic-diseases/aspirin-cardio",
        genericName : "Acetylsalicylic Acid",
        commercialName : "Aspirin",
        indication : "אוטם בשריר הלב (MI)<br>טיפול מניעתי בחולים עם מחלות לב וכלי דם <br>אירוע מוחי חסימתי (CVA) או אירוע מוחי חולף (TIA)<br>מניעת אירוע מוחי <br>אחרי ניתוח לב פתוח, צינתור, ניתוח עורקים קרוטידים<br>דלקות פרקים ומצבים דלקתיים אחרים<br>כאבים קלים/בנוניים<br>חום",
        contraindication : "אלרגיה לתרופה <br>חסר בG6PD<br>כיב בקיבה <br>מחלות דמם שמאופיינות בתפקוד קרישה לקוי או נטייה לדמם<br>הפרעות בתפקודי כבד",
        sideEffect : "דימומים – תוך גולגולתי, במערכת העיכול, גניקולוגי ועוד...<br>הפרעות בקצב לב<br>פנקראטיטיס ( דלקת בלבלב) והפטיטיס (דלקת בכבד)<br>הפרעות במאזן מלחים <br>דיכויי ייצור תאי דם המח העצם",
        patientGuidelines : "הקפדה יתרה על תזונה דלת מלח במטופלים האמורים להימנע מצריכת מלח משום שהתרופה מכילה המון נתרן <br>לא ללעוס או לרסק את הטבליות <br>אסור לשתות אלכוהול בסמוך לטיפול (שעתיים לפני ושעה אחרי)<br>לא להפסיק את הטיפול בלי הנחיה רפואית<br>להיות ערניים לסימנים של דימומים במערכות שונות בגוף <br>מומלץ להשתמש במברשת שיניים רכה ומכונת גילוח חשמלי על מנת מנוע דימום <br>שתיית מים מרובה",
    },
    // digestion-----------------------------------------------------------------------------------------------------------------------
    // סותרי חומצה 
    "Omeprazole": {
        type : "withMechanism",
        pic : "digestion/omepradex", 
        genericName : "Omeprazole",
        commercialName : "Omepra<br>Omepradex",
        indication : "צרבת <br>דלקת בוושט<br>כיב בקיבה/תריסריון<br>מחלות אחרות שמתבטאות בהפרשת יתר של חומצה בקיבה <br>זיהום חיידקתי בקיבה על ידי Helicobacter Pylori",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "חוסר בויטמין B12 (הערה – חלק מהחומרים המופרשים מדופן הקיבה מסייעים בספיגת B12, והתרופה מעכבת גם אותם)<br>חוסר במגנזיום והחלשות עצמות",
        patientGuidelines : "לא ללעוס או לרסק טבליות <br>לקחת 30-60 דקות לפני ארוחה, על בטן ריקה",
        mechanismOfAction : "עיכוב הפרשת חומצה מתאים בדופן הקיבה",
    },
    "Calcium-Magnesium-Carbonate": {
        type : "withMechanism",
        pic : "digestion/rennie", 
        genericName : "Calcium + Magnesium Carbonate",
        commercialName : "rennie",
        indication : "צרבת <br>מצבים אחרים של חומציות יתר בקיבה <br>הפרעות מסויימות במאזן נוזלים",
        contraindication : "אלרגיה לתרופה<br>אי ספיקת כליות",
        sideEffect : "שלשולים או עצירות<br>הפרעות במאזן המלחים",
        patientGuidelines : "טבליות למציצה ולא נועדו ללעיסה/בליעה<br.אפשר ליטול טבלית כל 3 שעות במידת הצורך",
        mechanismOfAction : "סתירת תוכן הקיבה החומצי באופן ישיר והפיכתו לבסיסי יותר",
    },
    // נוגדי הקאה 
    "Metoclopramide": {
        type : "withoutMechanism",
        pic : "digestion/pramin", 
        genericName : "Metoclopramide",
        commercialName : "Pramin",
        indication : "צרבת <br>טיפול ומניעה לבחילות והקאות <br>ריקון קיבה איטי מדי (לרוב קורה בגלל פגיעה עצבית)",
        contraindication : "אלרגיה לתרופה<br>פרכוסים ו/או תנועות לא רצוניות של שרירי הפנים <br>פיאוכרומוציטומה – גידול בבלוטת יותרת הכליה <br>דימום או חסימה במערכת העיכול",
        sideEffect : "פרכוסים ו/או תנועות לא רצוניות של שרירי הפנים <br>הפרעות בקצב לב <br>דיכוי ייצור תאי דם במח העצם",
        patientGuidelines : "יש לקחת חצי שעה לפני ארוחה על בטן ריקה ו/או לפני השינה <br>מומלץ שלא לבצע פעולות הדורשות ערנות שעתיים אחרי נטילת התרופה (התרופה עלולה לגרום לישנוניות ותופעות נוירולוגיות אחרות)<br>אין לשתות אלכוהול במקביל לטיפול",
    },
    // משלשלים
    "Bisacodyl": {
        type : "withMechanism",
        pic : "digestion/laxadin", 
        genericName : "Bisacodyl",
        commercialName : "Laxadin",
        indication : "עצירות<br>ריקון מעי לפני בדיקות, ניתוחים וכו..",
        contraindication : "אלרגיה לתרופה<br>דלקות במעי לרבות אפנדציטיס (דלקת בתוספתן) ודלקת במעי הגס <br>דימום ממערכת העיכול<br>חסימת מעיים <br>בחילות/הקאות",
        sideEffect : "שלשולים <br>כאבי בטן",
        patientGuidelines : "לא לרחת בסמוך לצריכת מוצרי חלב (הערה- חלב יגרום להתמוססות מהירה של התרופה ותופעות לוואי חמורות יותר)",
        mechanismOfAction : "הגברת תנועתיות במעי הגס והאצת הריקון",
    },
    "Sodium-Phoshate-PR": {
        type : "withMechanism",
        pic : "digestion/fleet", 
        genericName : "Sodium Phoshate",
        commercialName : "Fleet Enema",
        indication : "עצירות<br>ריקון מעי לפני בדיקות, ניתוחים וכו..",
        contraindication : "אלרגיה לתרופה<br>דלקות חמורות במעי הגס <br>דימום ממערכת העיכול<br>חסימת מעיים <br>בחילות/הקאות",
        sideEffect : "שלשולים <br>כאבי בטן<br>הפרעות במאזן המלחים",
        patientGuidelines : "לאחר החדרת החוקן יש להתאפק לפחות 5-10 דקות לפני ריקון בשירותים",
        mechanismOfAction : "ספיחת נוזלים לחלל המעי וריכוך תוכן מעי",
    },
    "Parrafin": {
        type : "withMechanism",
        pic : "digestion/liquid-parafin", 
        genericName : "Parrafin",
        commercialName : "Parrafin",
        indication : "עצירות<br>ריקון מעי לפני בדיקות, ניתוחים וכו..",
        contraindication : "אלרגיה לתרופה<br>דלקות במעי לרבות אפנדציטיס (דלקת בתוספתן) ודלקת במעי הגס <br>קושי בבליעה (הערה – סכנת אספירציה)<br>חסימת מעיים <br>בחילות/הקאות",
        sideEffect : "שלשולים <br>כאבי בטן",
        patientGuidelines : "יש לרחת שעה לפני האוכל או שעתיים אחרי ארוחה, על בטן ריקה <br>התרופה לא נועדה לשימוש ממושך מעל לשבוע<br>ניתן לתת עד פעמיים ביום, 2 כפיות בכל פעם",
        mechanismOfAction : "ריכוך הצואה באמצעות ספיחת מים ומניעת ספיגת מים מהמעי לדם",
    },
    // נוגדי שלשול
    "Loperamide": {
        type : "withMechanism",
        pic : "digestion/imodiom", 
        genericName : "Loperamide",
        commercialName : "Stopit<br>Imodium",
        indication : "שלשולים",
        contraindication : "אלרגיה לתרופה<br>עצירות <br>שלשול המלווה בחום גבוה<br>שלשול דמי או שלשול כתופעת לוואי של אנטיביוטיקה",
        sideEffect : "עצירות ובחילות <br>כאבי בטן",
        patientGuidelines : "שתיית מים מרובה ותזונה ייעודית (יבשה, דלת סיבים)<br>התרופה לא נועדה לשימוש ממושך <br>להתחיל מנטילת 2 קפסולות/טבליות באופן מיידי ואחת נוספת אחרי כל שלשול נוסף עד 4 סך הכל",
        mechanismOfAction : "האטת ריקון המעי הגס באמצעות האטה התנועתיות",
    },
    // אחר
    "Papaverine": {
        type : "withMechanism",
        pic : "digestion/stopit", 
        genericName : "Papaverine",
        commercialName : "Stopit<br>Imodium",
        indication : "כאבים הנובעים מעוויתיות בדרכי העיכול, שתן ומרה",
        contraindication : "אלרגיה לתרופה<br>הפרעות בקצב לב / רקע של אוטם בלב <br>לחץ תוך גולגלתי מוגבר",
        sideEffect : "עצירות <br>ירידת לחץ דם שמתבטאת בסחרחורות, עילפון ועוד..<br>הפרעות בקצב הלב, טאכיקרדיה",
        patientGuidelines : "מומלץ לקחת אחרי ארוחה, על בטן מלאה <br>להיזהר בשונויי תנוחות ופעולות הדורשות ערנות וריכוז (הערה – התרופה עלולה להוריד לחצי דם)",
        mechanismOfAction : "הרפיית שרירים והפסקת עוויתיות בדרכי העיכול, דרכי השתן, דרכי המרה וכלי דם",
    },
    "Benzocaine-Bismuth-Zinc": {
        type : "withMechanism",
        pic : "digestion/rectozoirn", 
        genericName : "Benzocaine + Bismuth + Zinc",
        commercialName : "Rectozorin (משחה)",
        indication : "כאבים הנובעים מעוויתיות בדרכי העיכול, שתן ומרה",
        contraindication : "אלרגיה לתרופה<br>דימום או פצע פתוח",
        sideEffect : "גירוי מקומי של העור",
        patientGuidelines : "יש למרוח כל בוקר וערב ובנוסף אחרי כל יציאה <br>במידה ומופיע דימום יש להפסיק למרוח ולפנות לבדיקת רופא",
        mechanismOfAction : "שיכוך כאבים וגרד הנובעים מטחורים, באופן מקומי (Benzocaine  הינו חומר אלחוש מקומי כמו לידוקאין)",
    },
    // painkillers-----------------------------------------------------------------------------------------------------------------------
    // שיכוך כאבים כללי 
    "Paracetamol": {
        type : "withoutMechanism",
        pic : "painkillers/acamol", 
        genericName : "Paracetamol",
        commercialName : "Acamol, Dexamol<br>Acamol Focus, Exidol",
        indication : "כאבים קלים/בינוניים<br>חום",
        contraindication : "אלרגיה לתרופה <br>בעיה בתפקודי כבד",
        sideEffect : "אין",
        patientGuidelines : `אסור לשתות אלכוהול במקביל לטיפול <br>ניתן לקחת 1-2 כדורים ( 500-1000 מ"ג) כל 4-6 שעות, במידת הצורך.`,
    },
    "Dipyrone": {
        type : "withoutMechanism",
        pic : "painkillers/optalgin", 
        genericName : "Dipyrone",
        commercialName : "Optalgin",
        indication : "כאבים קלים/בינוניים<br>חום",
        contraindication : "אלרגיה לתרופה <br>דיכוי מח עצם",
        sideEffect : "דיכוי מח עצם (בעיקר בטיפול ממושך)",
        patientGuidelines : "התרופה לא מומלצת לשימוש ממושך <br>ניתן לקחת 1-2 כדורים כל 6-8 שעות, במידת הצורך",
    },
    // שיכוך כאבים + השפעה אנטי דלקתית  
    "Iburofen": {
        type : "withoutMechanism",
        pic : "painkillers/ibuprofen-ibufen", 
        genericName : "Iburofen",
        commercialName : "Ibufen<br>Atrofen",
        indication : "כאבים קלים/בינוניים<br>חום",
        contraindication : "אלרגיה לתרופה <br>אי ספיקת כליות<br>כיב בקיבה",
        sideEffect : "כאבי בטן (פגיעה ברירית הקיבה)<br>אי ספיקת כליות",
        patientGuidelines : "מומלץ לקחת לאחר ארוחה <br>אסור לשתות אלכוהול במהלך הטיפול  (הערה – אלכוהול מגביר תופעות הלוואי)<br>ניתן לבלוע כדור כל 4-6 שעות, במידת הצורך.",
    },
    // שיכוך כאבים + הרפיית שרירים 
    "Paracetamol-Orphenadrine": {
        type : "withoutMechanism",
        pic : "painkillers/muscol", 
        genericName : "Paracetamol + Orphenadrine",
        commercialName : "Muscol",
        indication : "כאבי שרירים",
        contraindication : "אלרגיה לתרופה <br>בעיה בתפקודי כבד",
        sideEffect : "אין",
        patientGuidelines : "אין לקחת תרופה אחרת המכילה Paracetamol (כגון אקמול/דקסמול) במהלך הטיפול <br>אסור לשתות אלכוהול במהלך הטיפול  <br>אין לקחת לפני פעולות הדורשות ערנות למשל נהיגה (התרופה עלולה לגרום לעייפות ו/או חולשת שרירים)",
    },
    "Radian-B-Tiger-Balm-Deep-Heat": {
        type : "withoutMechanism",
        pic : "painkillers/radian-b", 
        genericName : "אין חומר פעיל ספציפי",
        commercialName : "Radian B<br>Tiger Balm<br>Deep Heat",
        indication : "כאבי שרירים ו/או פרקים",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "אין",
        patientGuidelines : "אין למרוח באזורים עם עור עדין כגון מפשעה, פנים וכו'...<br>יש למרוח שכבה דקה ולהמתין לספיגה מבלי לעסות את האיזור <br>ניתן למרוח 3-4 פעמים ביום, במידת הצורך",
    },
    "Phenazopyridine": {
        type : "withoutMechanism",
        pic : "painkillers/sedural", 
        genericName : "Phenazopyridine",
        commercialName : "Sedural",
        indication : "שיכוך כאבים הנובעים מדלקת בדרכי השתן או פרוצדורה פולשנית בדרכי השתן",
        contraindication : "אלרגיה לתרופה <br>חסר בG6PD<br>אי ספיקת כליות<br>אי ספיקת כבד או דלקת בכבד<br>דלקת שעלתה לאגן הכליה/ לכליה",
        sideEffect : "צביעת נוזלי גוף בכתום",
        patientGuidelines : "התרופה נותנת גוון כתום לשתן ולנוזלי גוף אחרים<br>מומלץ להרבות בשתיית מים ( הערה – שתיית מים מרובה מקלה על הכאבים הנובעים מדלקת בדרכי השתן, אבנים בכליות וכו...",
    },
    "Benzocaine-Thyrotrycine": {
        type : "withMechanism",
        pic : "painkillers/strepsils", 
        genericName : "Benzocaine + Thyrotrycine",
        commercialName : "Lemosin<br>Strepsils",
        indication : "כאבי גרון/דלקת גרון",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "אין",
        patientGuidelines : "ניתן ליטול טבליה אחת כל 4 שעות, במידת הצורך<br>הטבליות למציצה ולא לבליעה/לעיסה",
        mechanismOfAction : "שיכוך כאבי גרון באמצעות אלחוש וחיטוי מקומי",
    },
    "Bismuth-Subsalicylate": {
        type : "withMechanism",
        pic : "painkillers/kalbeten", 
        genericName : "Bismuth Subsalicylate",
        commercialName : "Kalbeten",
        indication : "כאבי בטן",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "אין",
        patientGuidelines : "ניתן לבלוע כדור כל 3 שעות, במידת הצורך",
        mechanismOfAction : "הפחתת כאבי בטן (הערה – דיכוי תהליך דלקתי בדרכי העיכול)<br>הפחתת שלשולים (הערה – הפחתת תנועתיות של המעיים)",
    },
    "Tetracaine-Phenazone": {
        type : "withMechanism",
        pic : "painkillers/otidin", 
        genericName : "Tetracaine + Phenazone",
        commercialName : "Otidin",
        indication : "כאבי אוזניים/ דלקות אוזניים",
        contraindication : "אלרגיה לתרופה <br>קרע בעור התוף",
        sideEffect : "אין",
        patientGuidelines : "ניתן לטפטף טיפה לאוזן בכל שעה, במידת הצורך ולהטות את הראש הצידה למספר דקות לאחר הטפטוף<br>התרופה לא מיועדת לשימוש ארוך טווח מעבר ל2-3 ימים",
        mechanismOfAction : "Tetracaine  הינו חומר להרדמה/אלחוש מקומי <br>Phenazone הינו חומר משכך כאב ונוגד-דלקת מקבוצת NSAID",
    },
    // other-meds-----------------------------------------------------------------------------------------------------------------------
    "Petroleum-Gel": {
        type : "withMechanism",
        pic : "other-meds/vaseline", 
        genericName : "Petroleum",
        commercialName : "Vaseline",
        indication : "יובש בעור או בשפתיים<br>שפשפת",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "גירוי מקומי של העור",
        patientGuidelines : "למרוח על האזור הרלוונטי עד 4 פעמים ביום",
        mechanismOfAction : "שימון וסיכוך",
    },
    "Zinc-Oxide-Iron-Oxide": {
        type : "withMechanism",
        pic : "other-meds/calamine", 
        genericName : "Zinc Oxide + Iron Oxide",
        commercialName : "Calamine (תמיסה)",
        indication : "גירוי עור מקומי על ידי עקיצות קלות ותגובות אלרגיות קלות",
        contraindication : "אלרגיה לתרופה <br>פצעים וחתכים פתוחים / כוויות",
        sideEffect : "גירוי מקומי של העור",
        patientGuidelines : "למרוח על האזור הרלוונטי עד 6 פעמים ביום ולהמתין לייבוש",
        mechanismOfAction : "הרגעת עור מגורה באמצעות ייבוש והפחתת גרד",
    },
    "Benzocaine-Salicylic-Acid": {
        type : "withMechanism",
        pic : "other-meds/noxacorn-liquiod", 
        genericName : "Benzocaine + Salicylic Acid",
        commercialName : "Naxacorn (נוזל sol או מדבקות עוריות Trans-Dermal)",
        indication : "יבלות ועור מעובה/קשה/יבש בכפות רגליים",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "גירוי מקומי של העור",
        patientGuidelines : "למרוח על האזור הרלוונטי עד 1-3 פעמים ביום",
        mechanismOfAction : `Benzocaine  הינו חומר אלחוש מקומי כמו לידוקאין<br>Salicylic Acid חומר הגורם ל"שבירת" חלבונים בתאי עור וקילוף תאי עור מתים ביבלות ועור מעובה/קשה/יבש`,
    },
    "Cetomacrogol-CRM": {
        type : "withMechanism",
        pic : "other-meds/cetomag", 
        genericName : "Cetomacrogol",
        commercialName : "Cetomag<br>Dermacol",
        indication : "עור יבש",
        contraindication : "אלרגיה לתרופה",
        sideEffect : "גירוי מקומי של העור",
        patientGuidelines : "למרוח על האזור הרלוונטי במידת הצורך<br>אין למרוח על עור פצוע",
        mechanismOfAction : "שמירה על לחות העור",
    },
    "Benzoyl-Peroxide-Gel": {
        type : "withMechanism",
        pic : "other-meds/benzac", 
        genericName : "Benzoyl Peroxide",
        commercialName : "Benzoyl<br>Peroxide",
        indication : "טיפול ומניעה של פצעי בגרות (Acne)",
        contraindication : "אלרגיה לתרופה <br>פצעים חמורים והצטלקויות חמורות",
        sideEffect : "גירוי מקומי של העור",
        patientGuidelines : "למרוח פעמיים ביום אחרי שטיפת פנים עם מים וסבון <br>אין למרוח על עור פצוע",
        mechanismOfAction : "פעילות אנטי-חיידקית מקומית<br>הפחתת שומניות העור באופן מקומי",
    },
    "Tertinoin-CRM": {
        type : "withMechanism",
        pic : "other-meds/retavit", 
        genericName : "Tertinoin",
        commercialName : "Retavit",
        indication : "טיפול ומניעה של פצעי בגרות (Acne)",
        contraindication : "אלרגיה לתרופה <br>עור פצוע <br>הריון/הנקה (כולל תכנון הריון) (תרופות המכילות/נגזרות של ויטמין A מגבירות סיוכיים למומים מולדים בעובר",
        sideEffect : "גירוי מקומי של העור<br>שינוי בצבע העור <br>רגישות מוגברת של העור לשמש",
        patientGuidelines : "מריחה לפי הוראות הרופא לאחר שטיפת פנים עם מים וסבון <br>אין למרוח על עור פצוע <br>יש להשתמש באמצעי מניעה בזמן קיום יחסי מין<br>צמצום חשיפה לשמש ושימוש בקרם הגנה (התרופה מגבירה את רגישות העור לשמש)",
        mechanismOfAction : "נגזרת של ויטמין A (מונעת חסימה של תעלות שערה בעור ובכך מפחיתה פצעי בגרות)",
    },
    // "med-name-6": { דוגמא לאובייקט של ת.ז שלא מופיע בו מנגנון הגנה
    //     type : "withoutMechanism",
    //     pic : "other-meds/pitrion", 
    //     genericName : "check",
    //     commercialName : "check",
    //     indication : "",
    //     contraindication : "",
    //     sideEffect : "check",
    //     patientGuidelines : "check",
    // },
    // "med-name-7": { דוגמא לאובייקט של ת.ז שמופיע בו מנגנון הגנה
    //     type : "withMechanism",
    //     pic : "other-meds/pitrion", 
    //     genericName : "check",
    //     commercialName : "check",
    //     indication : "",
    //     contraindication : "",
    //     sideEffect : "check",
    //     patientGuidelines : "check",
    //     mechanismOfAction : "check",
    // },
};

let objMedsShelfsColors = {//צבע, מספר מדפים, כותרת
    antiallergic : ["pink", 3, "נוגדי אלרגיה"], 
    antibiotics : ["darkGreen", 4, "אנטיביוטיקה"], 
    breathing : ["orange", 2, "נשימה"],
    chronicDiseases : ["teal", 4, "מחלות כרוניות"],
    digestion : ["yellow", 5, "עיכול"],
    painkillers : ["purple", 4, "משככי כאבים"],
    otherMeds : ["lightGreen", 1, "תרופות אחרות"],
}

// varubal
let strCurrentMedType;
let strcurrentPage = "homePage";
let bSearchScreen = false;


/* loading function
--------------------------------------------------------------
Description: */
window.addEventListener("load", () => {
    // place listeners on search button, about button and med buttons
    document.querySelector('.searchButton').addEventListener('click', onClickSearch);
    document.querySelector('.aboutButton').addEventListener('click', onClickAbout);
    let arrMedsButtons = document.querySelectorAll('.mainPageButton');
    for (let i = 0; i < arrMedsButtons.length; i++) {
        arrMedsButtons[i].addEventListener('click', creatMedShelfs);
    }
});

/* onClickAbout
--------------------------------------------------------------
Description: Adds about page */
const onClickAbout = () => {
    document.querySelector('.aboutPage').classList.remove("hidden");
    document.querySelector('.aboutButton').classList.add("hidden");
    document.querySelector('.homePageButtons').classList.add("hidden");
    document.querySelector('.topButton').removeEventListener('click', onClickSearch);
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    document.querySelector('.topButton').addEventListener('click', () => {
        document.querySelector('.aboutPage').classList.add("hidden");
        document.querySelector('.aboutButton').classList.remove("hidden");
        document.querySelector('.homePageButtons').classList.remove("hidden");
        document.querySelector('.searchButton').addEventListener('click', onClickSearch);
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
    });
}

/* onClickSearch
--------------------------------------------------------------
Description: Adds search box and listener to input */
const onClickSearch = () => {
    if (strcurrentPage !== "medId") {
        // revel search box' change wave, add dark background
        document.querySelector('.searchBoxHolder').classList.remove("hidden");
        document.querySelector('.searchBox').classList.remove("hidden");
        document.querySelector('.title').classList.add("hidden");
        document.querySelector('.aboutButton').classList.add("hidden");
        document.querySelector('.medTypeSymbol').classList.add("hidden");
        document.querySelector('.searchScren').classList.add("darkScreen");
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/search-wave.svg");
        // add listener to input box
    
        document.querySelector('.darkScreen').addEventListener("click", () => {
            document.querySelector('.searchBoxHolder').classList.add("hidden");
            document.querySelector('.searchBox').classList.add("hidden");
            document.querySelector('.dropDown').classList.add("hidden");
            document.querySelector('.searchScren').classList.remove("darkScreen");
            document.querySelector('.title').classList.remove("hidden");
            document.querySelector('.medTypeSymbol').classList.remove("hidden");
            document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
            if (strcurrentPage === "medShelf") {
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
    let strUserInput = document.querySelector('input').value;
    document.querySelector('.dropDown').innerHTML = "";
    document.querySelector('.dropDown').style.zIndex = "2";
    document.querySelector('.dropDown').classList.remove("hidden");
    // Goes over the object to check for a search match.
    for (let key of Object.keys(objMedInfo)){
        //Push the current match to it.
        if(key.includes(strUserInput) && strUserInput !== ""){
            let div = document.createElement("div");
            div.innerHTML = addSpace(key);
            div.classList.add("dropDownItem", key);
            document.querySelector('.dropDown').append(div);
            document.querySelector(`.${key}`).addEventListener("click", creatMedID);
        }
    }
    bSearchScreen = true
}

/* creatMedID
--------------------------------------------------------------
Description: Shows medicine id, hides privios div and adds listener to retern button*/
const creatMedID = (event) => {
    
    let strCurrentMed =  event.currentTarget.classList[1]
    let objCurrentMed =  objMedInfo[strCurrentMed];
    document.querySelector(`.medicineId`).classList.remove("hidden");
    // משנה מסך בהתאם למסך ממנו באנו
    if (strcurrentPage === "medShelf") {
        // מעלים מדפי תרופות
        document.querySelector(`.${strCurrentMedType}Shelf`).classList.add("hidden");
        document.querySelector(`.shelfsButtons`).classList.add("hidden");
    }
    if (bSearchScreen) {
        if (strcurrentPage === "homePage") {
            // מעלים את המסך בית
            document.querySelector('.homePageButtons').classList.add("hidden");
            document.querySelector('.aboutButton').classList.add("hidden");
        }
        // מעלים מסך חיפוש
        document.querySelector('.searchBoxHolder').classList.add("hidden");
        document.querySelector('.searchBox').classList.add("hidden");
        document.querySelector('.dropDown').classList.add("hidden");
        document.querySelector('.searchScren').classList.remove("darkScreen");
        document.querySelector('.title').classList.remove("hidden");
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
        document.querySelector('.dropDown').style.pointerEvents = "none";
    }

    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    document.querySelector('.medicineId').style.pointerEvents = "all";

    document.querySelector(`.title`).classList.add("titelMedId");
    document.querySelector(`.title`).innerHTML = strCurrentMed;
    let template = document.querySelector(`.${objCurrentMed.type}`);
    let clon = template.content.cloneNode(true);
    document.querySelector('.medicineId').appendChild(clon);
    // Insert the info from the object.
    for (let key of Object.keys(objCurrentMed)){
        // Check which key and change html accordingly
        if (key === "pic"){
            document.querySelector(`.${key}`).setAttribute("src", `../assets/images/${objCurrentMed[key]}.png`)
        } else if (key === "mechanismOfAction" && objCurrentMed.type === "withMechanism") {
            document.querySelector(`.${key}`).innerHTML = `${objCurrentMed[key]}`;
        }
         else if (key !== "type") {
            document.querySelector(`.${key}`).innerHTML = `${objCurrentMed[key]}`;
        }
    }

    if (strcurrentPage === "medShelf") {
        strcurrentPage = "medId"
        document.querySelector('.topButton').addEventListener("click", creatMedShelfs);
    } else {
        strcurrentPage = "medId"
        document.querySelector('.topButton').addEventListener("click", sendToHomePage);
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
        document.querySelector('.medicineId').innerHTML = "";
        document.querySelector('.medicineId').classList.add("hidden");
        document.querySelector(`.title`).classList.remove("titelMedId");
        document.querySelector('.searchBoxHolder').classList.add("hidden");
        document.querySelector('.searchBox').classList.add("hidden");
        document.querySelector('.dropDown').classList.add("hidden");
        document.querySelector('.searchScren').classList.remove("darkScreen");
        document.querySelector('.title').classList.remove("hidden");
        document.querySelector('.medTypeSymbol').classList.remove("hidden");
        document.querySelector('.wave').setAttribute("src", "../assets/images/grapics/home-page/opening-wave.svg");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
        document.querySelector('.topButton').removeEventListener("click", creatMedShelfs);
    } else {
        strCurrentMedType = event.currentTarget.classList[1]
        document.querySelector('.homePageButtons').classList.add("hidden");
        document.querySelector('.aboutButton').classList.add("hidden");
    }
   
    //saves current med type and page
    strcurrentPage = "medShelf"
    //changes screen
    console.log(strCurrentMedType);
    document.querySelector(`.${strCurrentMedType}Shelf`).classList.remove("hidden");
    // changes color and title
    document.querySelector(`.wave`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.topButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.searchBoxHolder`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.shelfsButtons .homeButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.title`).innerHTML = objMedsShelfsColors[strCurrentMedType][2];
    document.querySelector(`.title`).classList.add("titleMedShelfs");
    document.querySelector(`.medTypeSymbol`).classList.remove("hidden");
    document.querySelector(`.shelfsButtons`).classList.remove("hidden");
    document.querySelector(`.shelfsButtons`).addEventListener("click", sendToHomePage);
    // changes color and adds listener.
    for (let i = 1; i <= objMedsShelfsColors[strCurrentMedType][1]; i++) {
        document.querySelector(`.${strCurrentMedType}Shelf > .shelf${i}`).addEventListener("click", controlShelfsDropDown)
        document.querySelector(`.${strCurrentMedType}Shelf .shelf${i} .downButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.${strCurrentMedType}Shelf .shelf${i} .shelf`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    }
    bSearchScreen = false;
}

/* controlShelfsDropDown
--------------------------------------------------------------
Description: */
const controlShelfsDropDown = (event) => {
    let strChosenShelf = event.currentTarget.classList[1];
    // closes drop down
    if (document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf} .downButton`).getAttribute("src").includes("up")) {
        document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf} .downButton`).setAttribute("src", "../assets/images/grapics/med-shelfs/down-button.svg");
        document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf}dropDown`).classList.add("hidden");
        // for (let i = 0; i < arrMedIdButtons.length; i++) {
        //     arrMedIdButtons[i].removeEventListener('click', creatMedID);
        // }
    }else { // opens drop down
        let arrMedIdButtons = document.querySelectorAll(`.${strCurrentMedType}Shelf >  .${strChosenShelf}dropDown .shelfMedPicContainer`);
        for (let i = 0; i < arrMedIdButtons.length; i++) {
            arrMedIdButtons[i].addEventListener('click', creatMedID);
        }
        document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf}dropDown`).classList.remove("hidden");
        document.querySelector(`.${strCurrentMedType}Shelf >  .${strChosenShelf} .downButton`).setAttribute("src", "../assets/images/grapics/med-shelfs/up-button.svg");
    }
}

/* sendToHomePage
--------------------------------------------------------------
Description: */
const sendToHomePage = () => {
    if (strcurrentPage === "medId") {
        document.querySelector('.medicineId').style.pointerEvents = "none";
        document.querySelector('.medicineId').classList.add("hidden");
        document.querySelector(`.title`).classList.remove("titelMedId");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/search-button.svg");
        document.querySelector('.topButton').removeEventListener("click", sendToHomePage);
    } else {
        document.querySelector(`.shelfsButtons`).classList.add("hidden");
        document.querySelector(`.medTypeSymbol`).classList.add("hidden");
        document.querySelector(`.title`).classList.remove("titleMedShelfs");
        document.querySelector(`.${strCurrentMedType}Shelf`).classList.add("hidden");
        document.querySelector(`.wave`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.topButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.searchBoxHolder`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.shelfsButtons .homeButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
    }
    document.querySelector(`.title`).innerHTML = "תקן 15";
    document.querySelector('.homePageButtons').classList.remove("hidden");
    document.querySelector('.aboutButton').classList.remove("hidden");
    strcurrentPage = "homePage"
}