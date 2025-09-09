let allData = {
    "teachers": {
        "t1": {
            "id": "t1",
            "name": "مامۆستا تحسین إبراهیم دوسکی",
            "profileImage": "https://i.ibb.co/L95s4yv/IMG-1144.jpg",
            "bio": "مامۆستایێ لسەر سوونەتێ",
            "phone": "",
            "social": {
                "youtube": "",
                "telegram": "https://t.me/tahsin_doski",
                "facebook": ""
            }
        },
        "t2": {
            "id": "t2",
            "name": "مامۆستا إحسان حسن",
            "profileImage": "https://i.ibb.co/yQJgb3V/IMG-1143.jpg",
            "bio": "مامۆستایێ لسەر سوونەتێ",
            "phone": "",
            "social": {
                "youtube": "",
                "telegram": "https://t.me/mamosta_ihsan",
                "facebook": ""
            }
        },
        "t3": {
            "id": "t3",
            "name": "مامۆستا رمضان شکور",
            "profileImage": "https://i.ibb.co/gPSgKXT/IMG-1142.jpg",
            "bio": "مامۆستایێ لسەر سوونەتێ",
            "phone": "",
            "social": {
                "youtube": "",
                "telegram": "https://t.me/ramadanshkur",
                "facebook": ""
            }
        }
    },
    "generalLectures": [
        {
            "id": "lec001",
            "title": "زنجیرا ڕونکرنا کتابا سێ بنچینەیێن ئیسلامێ",
            "teacherId": "t1",
            "category": "عەقیدە",
            "image": "https://i.ibb.co/gZbGg0t/3-osool.jpg",
            "pdfUrl": "https://d.top4top.io/p_3010lcq5t1.pdf",
            "videos": [
                {
                    "title": "وانا ١",
                    "url": "https://youtu.be/JtkO-q1b53E"
                },
                {
                    "title": "وانا ٢",
                    "url": "https://youtu.be/4eE-s_V_m2M"
                }
            ]
        },
        {
            "id": "lec002",
            "title": "زنجیرا ڕونکرنا کتابا چل حەدیسێن نەواوی",
            "teacherId": "t2",
            "category": "حەدیس",
            "image": "https://i.ibb.co/L6VBgvj/nawawi.jpg",
            "pdfUrl": "",
            "videos": [
                {
                    "title": "وانا ١",
                    "url": "https://youtu.be/IuWMMc3j2e0"
                },
                {
                    "title": "وانا ٢",
                    "url": "https://youtu.be/gLq2Ie5N-vM"
                }
            ]
        },
        {
            "id": "lec003",
            "title": "زنجیرا ڕونکرنا کتابا تەمام المنة",
            "teacherId": "t3",
            "category": "فیقهـ",
            "image": "https://i.ibb.co/hK7JqJb/tamam-alminnah.jpg",
            "pdfUrl": "",
            "videos": [
                {
                    "title": "وانا ١",
                    "url": "https://youtu.be/3wE9kGq8f2c"
                }
            ]
        }
    ],
    "pirtukxane": [
        {
            "title": "سێ بنچینەیێن ئیسلامێ",
            "author": "محمدێ کورێ عبدالوهابی",
            "category": "عەقیدە",
            "coverImage": "https://i.ibb.co/gZbGg0t/3-osool.jpg",
            "readUrl": "https://d.top4top.io/p_3010lcq5t1.pdf",
            "downloadUrl": "https://d.top4top.io/p_3010lcq5t1.pdf"
        },
        {
            "title": "چل حەدیسێن نەواوی",
            "author": "الإمام النووي",
            "category": "حەدیس",
            "coverImage": "https://i.ibb.co/L6VBgvj/nawawi.jpg",
            "readUrl": "https://d.top4top.io/p_3010lcq5t1.pdf",
            "downloadUrl": "https://d.top4top.io/p_3010lcq5t1.pdf"
        }
    ],
    "bookSales": [
        {
            "title": "پەرتووکا سێ بنچینەیێن ئیسلامێ",
            "author": "محمدێ کورێ عبدالوهابی",
            "coverImage": "https://i.ibb.co/gZbGg0t/3-osool.jpg",
            "description": "شروڤەکرنەکا ب कुرمانجی لسەر پەرتووکا سێ بنچینەیێن ئیسلامێ.",
            "price": "5,000 IQD",
            "purchaseLink": "#",
            "isAvailable": true
        },
        {
            "title": "پەرتووکا چل حەدیسێن نەواوی",
            "author": "الإمام النووي",
            "coverImage": "https://i.ibb.co/L6VBgvj/nawawi.jpg",
            "description": "وەرگێران و شروڤەکرنا چل حەدیسێن نەواوی ب زمانێ شیرینێ کوردی.",
            "price": "7,000 IQD",
            "purchaseLink": "#",
            "isAvailable": false
        }
    ],
    "locations": [
        {
            "id": "loc1",
            "name": "مزگەفتا شافعی",
            "coordinates": [
                36.857,
                42.986
            ],
            "teacherId": "t1",
            "lessonTaught": "سێ بنچینەیێن ئیسلامێ",
            "schedule": "هەمی رۆژێن دووشەمب پشتی نڤێژا عەیشا"
        },
        {
            "id": "loc2",
            "name": "مزگەفتا خەدیجا",
            "coordinates": [
                36.845,
                42.992
            ],
            "teacherId": "t2",
            "lessonTaught": "چل حەدیسێن نەواوی",
            "schedule": "هەمی رۆژێن سێشەمب پشتی نڤێژا مەغرەب"
        }
    ],
    "liveCourse": {
        "title": "خولا زانستێن شەرعی یا هاڤینێ",
        "teacherId": "t1",
        "description": "ئەڤ خولە دێ بەحسا گرنگترین بابەتێن عەقیدێ و فیقهی و حەدیسێ کەت ب شێوەیەکێ ئاسان و رێکخستی.",
        "nextSessionDate": "2025-08-01T20:00:00",
        "prerequisites": "پێتڤیە قوتابی خواندن و نڤیسینێ بزانیت.",
        "topics": [
            "عەقیدا تەوحیدێ",
            "حوکمێن نڤێژێ",
            "گرنگیا فەرموودان"
        ],
        "schedule": [
            "رۆژێن شەمبی - دەمژمێر ٨ی شەڤ",
            "رۆژێن چارشەمب - دەمژمێر ٨ی شەڤ"
        ]
    },
    "levels": [
        {
            "level": 1,
            "levelName": "ئاستێ ئێکێ",
            "unlockCode": "1122",
            "requiredPoints": 0,
            "courses": [
                {
                    "id": "L1C1",
                    "title": "رونکرنا سێ بنچینەیان",
                    "teacherId": "t1",
                    "pdfUrl": "https://d.top4top.io/p_3010lcq5t1.pdf",
                    "memorizationPdfUrl": "https://d.top4top.io/p_3010lcq5t1.pdf",
                    "memorizationPdfTitle": "مەتنێ سێ بنچینەیان",
                    "videos": [
                        {
                            "title": "وانا ١",
                            "url": "https://youtu.be/JtkO-q1b53E"
                        },
                        {
                            "title": "وانا ٢",
                            "url": "https://youtu.be/4eE-s_V_m2M"
                        }
                    ]
                },
                {
                    "id": "L1C2",
                    "title": "رونکرنا چوار رێسایان",
                    "teacherId": "t2",
                    "pdfUrl": "",
                    "memorizationPdfUrl": "",
                    "memorizationPdfTitle": "",
                    "videos": [
                        {
                            "title": "وانا ١",
                            "url": "https://youtu.be/IuWMMc3j2e0"
                        }
                    ]
                }
            ]
        },
        {
            "level": 2,
            "levelName": "ئاستێ دووێ",
            "unlockCode": "3344",
            "requiredPoints": 100,
            "courses": [
                {
                    "id": "L2C1",
                    "title": "رونکرنا کتابا تەوحیدێ",
                    "teacherId": "t3",
                    "pdfUrl": "",
                    "memorizationPdfUrl": "",
                    "memorizationPdfTitle": "",
                    "videos": [
                        {
                            "title": "وانا ١",
                            "url": "https://youtu.be/3wE9kGq8f2c"
                        }
                    ]
                }
            ]
        }
    ],
    "fatwas": [
        {
            "id": "fatwa-1",
            "question": "ئەرێ دروستە مروڤ روژیێن شەوالێ بەریا قەزایان بگریت؟",
            "answer": "نەخێر، دروست نینە. پێتڤیە ل دەستپێکێ قەزایێن رەمەزانێ بهێنە گرتن، پاشی شەش روژیێن شەوالێ.",
            "teacherId": "t1",
            "category": "روژی",
            "audioUrl": ""
        },
        {
            "id": "fatwa-2",
            "question": "حوکمێ زەکاتا پارەی چیە؟",
            "answer": "ئەگەر پارە گەهشتە نیسابێ (کو دبیتە بهایێ ٨٥ گرامێن زێری) و سالەک لسەردا دەرباز بوو، پێتڤیە ژ سەدی دوو و نیڤ (٢.٥٪) بهێتە دان وەک زەکات.",
            "teacherId": "t2",
            "category": "زەکات",
            "audioUrl": ""
        }
    ],
    "hadiths": [
        {
            "id": "hadith-1",
            "text": "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى...",
            "source": "صحيح البخاري",
            "narrator": "عمر بن الخطاب",
            "category": "نیەت",
            "number": "1",
            "grade": "صحيح",
            "audioUrl": ""
        },
        {
            "id": "hadith-2",
            "text": "من سلك طريقا يلتمس فيه علما سهل الله له به طريقا إلى الجنة.",
            "source": "صحيح مسلم",
            "narrator": "أبو هريرة",
            "category": "زانست",
            "number": "2699",
            "grade": "صحيح",
            "audioUrl": ""
        }
    ],
    "tafsir": {
        "1": {
            "surahName": "الفاتحة",
            "fullTafsir": "تەفسیرا سورەتا فاتیحەیێ ل ڤێرێ دێ هێتە نڤیسین...",
            "ayahCount": "7",
            "revelationType": "مكية",
            "audioUrl": ""
        },
        "112": {
            "surahName": "الإخلاص",
            "fullTafsir": "تەفسیرا سورەتا ئیخلاسێ ل ڤێرێ دێ هێتە نڤیسین...",
            "ayahCount": "4",
            "revelationType": "مكية",
            "audioUrl": ""
        }
    },
    "viewStatuses": {
        "home-view": "0",
        "levels-view": "0",
        "waneyan-view": "0",
        "hadith-view": "0",
        "tafsir-view": "0",
        "pirtukxane-view": "0",
        "book-sales-view": "0",
        "teachers-view": "0",
        "fatwas-view": "0",
        "map-view": "0",
        "live-view": "0",
        "dashboard-view": "0",
        "favorites-view": "0",
        "seerah-view": "1",
        "adhkar-view": "1",
        "fiqh-view": "1",
        "prayer-times-view": "8",
        "kids-view": "8"
    },
    "seerah": [],
    "adhkar": [],
    "fiqh": []
};
