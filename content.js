const bookData = [
    {
        title: "১. আতা গাছে তোতা পাখি 🦜",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #E91E63;">আতা গাছে তোতা পাখি 🦜</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    আতা গাছে তোতা পাখি,<br>
                    ডালিম গাছে মৌ। 🍯<br>
                    এত ডাকি তবু কথা,<br>
                    কয় না কেন বউ? 👰
                </p>
            </div>
        `
    },
    {
        title: "২. হাট্টিমাটিম টিম 🥚",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #9C27B0;">হাট্টিমাটিম টিম 🥚</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    হাট্টিমাটিম টিম,<br>
                    তারা মাঠে পাড়ে ডিম। 🥚<br>
                    তাদের খাড়া দুটো শিং,<br>
                    তারা হাট্টিমাটিম টিম। 🦕
                </p>
            </div>
        `
    },
    {
        title: "৩. Twinkle Twinkle ⭐",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FFC107;">Twinkle Twinkle Little Star ⭐</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Twinkle, twinkle, little star, 🌟<br>
                    How I wonder what you are!<br>
                    Up above the world so high, ☁️<br>
                    Like a diamond in the sky. 💎
                </p>
            </div>
        `
    },
    {
        title: "৪. আম পাতা জোড়া জোড়া 🍃",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #4CAF50;">আম পাতা জোড়া জোড়া 🍃</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    আম পাতা জোড়া জোড়া,<br>
                    মারব চাবুক চড়ব ঘোড়া। 🐎<br>
                    ওরে বুবু সরে দাঁড়া,<br>
                    আসছে আমার পাগলা ঘোড়া। 🐴
                </p>
            </div>
        `
    },
    {
        title: "৫. বাক বাকুম পায়রা 🕊️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #00BCD4;">বাক বাকুম পায়রা 🕊️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    বাক বাকুম পায়রা,<br>
                    মাথায় দিয়ে টায়রা। 👑<br>
                    বউ সাজবে কাল কি,<br>
                    চড়বে সোনার পালকি। 🛏️
                </p>
            </div>
        `
    },
    {
        title: "৬. Baa Baa Black Sheep 🐑",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #607D8B;">Baa Baa Black Sheep 🐑</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Baa, baa, black sheep,<br>
                    Have you any wool? 🧶<br>
                    Yes, sir, yes, sir,<br>
                    Three bags full! 🛍️
                </p>
            </div>
        `
    },
    {
        title: "৭. খোকন খোকন ডাক পাড়ি 👦",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FF5722;">খোকন খোকন ডাক পাড়ি 👦</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    খোকন খোকন ডাক পাড়ি,<br>
                    খোকন মোদের কার বাড়ি? 🏡<br>
                    আয় রে খোকন ঘরে আয়,<br>
                    দুধ মাখা ভাত কাকে খায়! 🥛
                </p>
            </div>
        `
    },
    {
        title: "৮. Johny Johny Yes Papa 👶",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #3F51B5;">Johny Johny Yes Papa 👶</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Johny, Johny, Yes, Papa? 👨‍👦<br>
                    Eating sugar? No, Papa! 🍬<br>
                    Telling lies? No, Papa! 🙅‍♂️<br>
                    Open your mouth... Ha! Ha! Ha! 😂
                </p>
            </div>
        `
    },
    {
        title: "৯. আয় রে আয় টিয়ে 🐦",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #8BC34A;">আয় রে আয় টিয়ে 🐦</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    আয় রে আয় টিয়ে,<br>
                    নায়ে ভরা দিয়ে। ⛵<br>
                    না নিয়ে গেল বোয়াল মাছে,<br>
                    তাই না দেখে ভোদড় নাচে। 🦦
                </p>
            </div>
        `
    },
    {
        title: "১০. Humpty Dumpty 🥚",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FF9800;">Humpty Dumpty 🥚</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Humpty Dumpty sat on a wall, 🧱<br>
                    Humpty Dumpty had a great fall. 💥<br>
                    All the king's horses and all the king's men,<br>
                    Couldn't put Humpty together again. 🐎
                </p>
            </div>
        `
    },
    {
        title: "১১. চাঁদ উঠেছে ফুল ফুটেছে 🌙",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #673AB7;">চাঁদ উঠেছে ফুল ফুটেছে 🌙</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    চাঁদ উঠেছে ফুল ফুটেছে,<br>
                    কদমতলায় কে? 🌸<br>
                    হাতি নাচছে ঘোড়া নাচছে,<br>
                    সোনামণির বে। 🎉
                </p>
            </div>
        `
    },
    {
        title: "১২. Jack and Jill 💧",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #03A9F4;">Jack and Jill 💧</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Jack and Jill went up the hill, ⛰️<br>
                    To fetch a pail of water. 🪣<br>
                    Jack fell down and broke his crown,<br>
                    And Jill came tumbling after. 🤕
                </p>
            </div>
        `
    },
    {
        title: "১৩. তাই তাই তাই 👏",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #E040FB;">তাই তাই তাই 👏</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    তাই তাই তাই,<br>
                    মামা বাড়ি যাই। 🏠<br>
                    মামা দিল দুধ ভাত,<br>
                    দুয়ারে বসে খাই। 🍚
                </p>
            </div>
        `
    },
    {
        title: "১৪. Hickory Dickory Dock 🐭",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #795548;">Hickory Dickory Dock 🐭</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Hickory dickory dock, 🕰️<br>
                    The mouse ran up the clock. 🐁<br>
                    The clock struck one, 🕐<br>
                    The mouse ran down,<br>
                    Hickory dickory dock. 🐭
                </p>
            </div>
        `
    },
    {
        title: "১৫. নোটন নোটন পায়রাগুলি 🕊️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #009688;">নোটন নোটন পায়রাগুলি 🕊️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    নোটন নোটন পায়রাগুলি,<br>
                    ঝোটন বেঁধেছে। 🎀<br>
                    ওপারেতে ছেলেমেয়ে,<br>
                    নাইতে নেমেছে। 🏊‍♂️
                </p>
            </div>
        `
    },
    {
        title: "১৬. Rain Rain Go Away 🌧️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #2196F3;">Rain Rain Go Away 🌧️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Rain, rain, go away, ☔<br>
                    Come again another day. 🌤️<br>
                    Little Johnny wants to play,<br>
                    Rain, rain, go away! 🏃‍♂️
                </p>
            </div>
        `
    },
    {
        title: "১৭. বাবুরাম সাপুড়ে 🐍",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #8D6E63;">বাবুরাম সাপুড়ে 🐍</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    বাবুরাম সাপুড়ে,<br>
                    কোথা যাস বাপুরে? 🚶‍♂️<br>
                    আয় বাবা দেখে যা,<br>
                    দুটো সাপ রেখে যা। 🐍
                </p>
            </div>
        `
    },
    {
        title: "১৮. Early to Bed 🛏️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FFEB3B; background: #333; padding: 5px; border-radius: 5px;">Early to Bed 🛏️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Early to bed and early to rise, 🌅<br>
                    Makes a man healthy, 🍎<br>
                    Wealthy, and wise. 🦉
                </p>
            </div>
        `
    },
    {
        title: "১৯. ভোর হলো দোর খোল 🌅",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FF5722;">ভোর হলো দোর খোল 🌅</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    ভোর হলো দোর খোল,<br>
                    খুকুমণি ওঠ রে। 👧<br>
                    ঐ ডাকে জুঁই-শাখে,<br>
                    ফুল-খুকি ছোট রে। 🌼
                </p>
            </div>
        `
    },
    {
        title: "২০. আমাদের ছোট নদী 🏞️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #03A9F4;">আমাদের ছোট নদী 🏞️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    আমাদের ছোট নদী চলে বাঁকে বাঁকে,<br>
                    বৈশাখ মাসে তার হাঁটু জল থাকে। 🌊<br>
                    পার হয়ে যায় গরু, পার হয় গাড়ি,<br>
                    দুই ধার উঁচু তার, ঢালু তার পাড়ি। 🐄
                </p>
            </div>
        `
    },
    {
        title: "২১. লেখক পরিচিতি 👨‍🏫",
        content: `
            <div style="text-align:center; padding: 20px; background: #f0f8ff; border-radius: 15px; margin-top: 20px;">
                <img src="https://i.ibb.co.com/LDMM7qTn/d.png" alt="Author" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid #03A9F4;">
                <h3 style="color: #333; margin-bottom: 5px;">মোঃ মঞ্জুরুল হক</h3>
                <p style="color: #666; font-weight: bold; margin-top: 0;">প্রভাষক, অর্থনীতি</p>
                <p style="color: #666; font-size: 14px;">জিয়াউদ্দিন স্কুল এন্ড কলেজ, কিশোরগঞ্জ</p>
                <hr style="border: 1px dashed #ccc; margin: 15px 0;">
                <p>📞 মোবাইল: ০১৭১৫২৪৭৫৮৮</p>
                <p>💬 WhatsApp: 01715247588</p>
                <p>📧 মেইল: monjurul.jusc@gmail.com</p>
                <p>🌐 <a href="https://www.facebook.com/himel.hemu" target="_blank" style="color: #03A9F4; text-decoration: none; font-weight: bold;">ফেসবুক প্রোফাইল</a></p>
                
                <p style="margin-top:20px; font-size: 14px; color: #E91E63;">
                    ছড়াগুলো পড়ে মজা পেলে বন্ধুদের সাথে শেয়ার করতে ভুলবেন না! ✨
                </p>
            </div>
        `
    },
    {
        title: "২১. ইতল বিতল 🐸",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #4CAF50;">ইতল বিতল 🐸</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    ইতল বিতল গাছের পাতা,<br>
                    গাছের তলায় ব্যাঙের ছাতা। 🍄<br>
                    বৃষ্টি পড়ে ভাঙে ছাতা,<br>
                    ডোবায় ডুবে ব্যাঙের মাথা। 🐸
                </p>
            </div>
        `
    },
    {
        title: "২২. খোকা ঘুমালো 😴",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #3F51B5;">খোকা ঘুমালো 😴</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    খোকা ঘুমালো পাড়া জুড়ালো,<br>
                    বর্গি এলো দেশে। 🐎<br>
                    বুলবুলিতে ধান খেয়েছে,<br>
                    খাজনা দেব কিসে? 🌾
                </p>
            </div>
        `
    },
    {
        title: "২৩. আয় ছেলেরা আয় মেয়েরা 🌼",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #E91E63;">আয় ছেলেরা আয় মেয়েরা 🌼</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    আয় ছেলেরা, আয় মেয়েরা,<br>
                    ফুল তুলিতে যাই। 🌸<br>
                    ফুলের মালা গলায় দিয়ে,<br>
                    মামার বাড়ি যাই। 🏡
                </p>
            </div>
        `
    },
    {
        title: "২৪. ওই দেখা যায় তাল গাছ 🌴",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #795548;">ওই দেখা যায় তাল গাছ 🌴</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    ওই দেখা যায় তাল গাছ,<br>
                    ওই আমাদের গাঁ। 🛖<br>
                    ওই খানেতে বাস করে,<br>
                    কানা বগীর ছা। 🐦
                </p>
            </div>
        `
    },
    {
        title: "২৫. কাঠবিড়ালী 🐿️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FF9800;">কাঠবিড়ালী 🐿️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    কাঠবিড়ালী! কাঠবিড়ালী!<br>
                    পেয়ারা তুমি খাও? 🍐<br>
                    গুড় মুড়ি খাও? দুধ ভাত খাও?<br>
                    বাতাবি নেবু লাউ? 🍋
                </p>
            </div>
        `
    },
    {
        title: "২৬. সকালে উঠিয়া 🌅",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #00BCD4;">সকালে উঠিয়া 🌅</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    সকালে উঠিয়া আমি মনে মনে বলি,<br>
                    সারাদিন আমি যেন ভালো হয়ে চলি। 🚶‍♂️<br>
                    আদেশ করেন যাহা মোর গুরুজনে,<br>
                    আমি যেন সেই কাজ করি ভালো মনে। 🤝
                </p>
            </div>
        `
    },
    {
        title: "২৭. ট্রেন 🚂",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #607D8B;">ট্রেন 🚂</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    ঝিক্ ঝিক্ ঝিক্ ট্রেন চলেছে,<br>
                    রাতের বেলা ফস্। 🌃<br>
                    একটু জিরোয়, ফের ছুটে যায়,<br>
                    মাঠ পেরুলেই বস্। 🛤️
                </p>
            </div>
        `
    },
    {
        title: "২৮. আমি হব 🐦",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #8BC34A;">আমি হব 🐦</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    আমি হব সকাল বেলার পাখি,<br>
                    সবার আগে কুসুম বাগে উঠব আমি ডাকি। 🌸<br>
                    সূয্যিমামা জাগার আগে উঠব আমি জেগে,<br>
                    'হয়নি সকাল, ঘুমো এখন'- মা বলবেন রেগে। 😠
                </p>
            </div>
        `
    },
    {
        title: "২৯. মেঘের কোলে রোদ হেসেছে 🌤️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FFC107;">মেঘের কোলে রোদ হেসেছে 🌤️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    মেঘের কোলে রোদ হেসেছে,<br>
                    বাদল গেছে টুটি। 🌧️<br>
                    আহা, হা, হা, হা!<br>
                    আজ আমাদের ছুটি ও ভাই,<br>
                    আজ আমাদের ছুটি। 🎉
                </p>
            </div>
        `
    },
    {
        title: "৩০. আগডুম বাগডুম 🐎",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #9C27B0;">আগডুম বাগডুম 🐎</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    আগডুম বাগডুম ঘোড়াডুম সাজে,<br>
                    ঢাক ঢোল ঝাঝর বাজে। 🥁<br>
                    বাজতে বাজতে চলল দেউল,<br>
                    দেউল গাছে ফুটল ফুল। 🌺
                </p>
            </div>
        `
    },
    {
        title: "৩১. চল চল চল 🥁",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #F44336;">চল চল চল 🥁</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    চল্ চল্ চল্!<br>
                    ঊর্ধ্ব গগনে বাজে মাদল,<br>
                    নিম্নে উতলা ধরণী তল,<br>
                    অরুণ প্রাতের তরুণ দল<br>
                    চল্ রে চল্ রে চল্! 🚶‍♂️
                </p>
            </div>
        `
    },
    {
        title: "৩২. আয় রে আয় চাদমামা 🌙",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #673AB7;">আয় রে আয় চাদমামা 🌙</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    আয় রে আয় চাদমামা,<br>
                    টিপ দিয়ে যা। ✨<br>
                    চাদের কপালে চাদ,<br>
                    টিপ দিয়ে যা। 👶
                </p>
            </div>
        `
    },
    {
        title: "৩৩. কাজের লোক 🐝",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FF5722;">কাজের লোক 🐝</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    মৌমাছি, মৌমাছি,<br>
                    কোথা যাও নাচি নাচি,<br>
                    দাঁড়াও না একবার ভাই! ✋<br>
                    ঐ ফুল ফোটে বনে,<br>
                    যাই মধু আহরণে,<br>
                    দাঁড়াবার সময় তো নাই। 🍯
                </p>
            </div>
        `
    },
    {
        title: "৩৪. তাঁতির বাড়ি 🐸",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #4CAF50;">তাঁতির বাড়ি 🐸</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    তাঁতির বাড়ি ব্যাঙের বাসা,<br>
                    কোলা ব্যাঙের ছা। 🐸<br>
                    খায় দায় গান গায়,<br>
                    তাইরে নাইরে না। 🎶
                </p>
            </div>
        `
    },
    {
        title: "৩৫. ঘুম পাড়ানি মাসি পিসি 🛌",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #03A9F4;">ঘুম পাড়ানি মাসি পিসি 🛌</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    ঘুম পাড়ানি মাসি পিসি,<br>
                    মোদের বাড়ি এসো। 🏠<br>
                    খাট নাই পালঙ্ক নাই,<br>
                    চাটাই পেতে বসো। 🪑
                </p>
            </div>
        `
    },
    {
        title: "৩৬. মজার দেশ 🎪",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #E040FB;">মজার দেশ 🎪</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    এক যে আছে মজার দেশ,<br>
                    সব রকমে ভালো। 🌈<br>
                    রাত্তিরেতে বেজায় রোদ,<br>
                    দিনে চাঁদের আলো! ☀️
                </p>
            </div>
        `
    },
    {
        title: "৩৭. জল পড়ে পাতা নড়ে 💧",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #009688;">জল পড়ে পাতা নড়ে 💧</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    জল পড়ে, পাতা নড়ে,<br>
                    মেঘ ডাকে, ভয় করে। 🌩️<br>
                    বৃষ্টি আসে রিমঝিম,<br>
                    খুকুর চোখে নাই ঘুম। 👀
                </p>
            </div>
        `
    },
    {
        title: "৩৮. খুকুমণির ছড়া 👧",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #E91E63;">খুকুমণির ছড়া 👧</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    খুকুমণি ওঠে না,<br>
                    রোদ তো এখনো ফোটে না। ☀️<br>
                    পাখিরা সব ডাকে না,<br>
                    গাছে পাতা থাকে না। 🍂
                </p>
            </div>
        `
    },
    {
        title: "৩৯. Row, Row, Row Your Boat 🚣",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #2196F3;">Row, Row, Row Your Boat 🚣</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Row, row, row your boat,<br>
                    Gently down the stream. 🌊<br>
                    Merrily, merrily, merrily, merrily,<br>
                    Life is but a dream. 💭
                </p>
            </div>
        `
    },
    {
        title: "৪০. One, Two, Buckle My Shoe 👞",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FF5722;">One, Two, Buckle My Shoe 👞</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    One, two, buckle my shoe; 👟<br>
                    Three, four, knock at the door; 🚪<br>
                    Five, six, pick up sticks; 🪵<br>
                    Seven, eight, lay them straight. 📏
                </p>
            </div>
        `
    },
    {
        title: "৪১. Mary Had a Little Lamb 🐑",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #9C27B0;">Mary Had a Little Lamb 🐑</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Mary had a little lamb,<br>
                    Its fleece was white as snow. ❄️<br>
                    And everywhere that Mary went,<br>
                    The lamb was sure to go. 🏃‍♀️
                </p>
            </div>
        `
    },
    {
        title: "৪২. I'm a Little Teapot 🫖",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #795548;">I'm a Little Teapot 🫖</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    I'm a little teapot,<br>
                    Short and stout. ☕<br>
                    Here is my handle,<br>
                    Here is my spout. 🫗
                </p>
            </div>
        `
    },
    {
        title: "৪৩. Incy Wincy Spider 🕷️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #607D8B;">Incy Wincy Spider 🕷️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Incy Wincy spider,<br>
                    Climbed up the water spout. 🚰<br>
                    Down came the rain,<br>
                    And washed poor Incy out. 🌧️
                </p>
            </div>
        `
    },
    {
        title: "৪৪. London Bridge 🌉",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #3F51B5;">London Bridge 🌉</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    London Bridge is falling down,<br>
                    Falling down, falling down. 🏗️<br>
                    London Bridge is falling down,<br>
                    My fair lady. 👸
                </p>
            </div>
        `
    },
    {
        title: "৪৫. Ding Dong Bell 🔔",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FFC107;">Ding Dong Bell 🔔</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Ding, dong, bell,<br>
                    Pussy's in the well. 🐈<br>
                    Who put her in?<br>
                    Little Tommy Thin. 👦
                </p>
            </div>
        `
    },
    {
        title: "৪৬. Ring-a-Ring o' Roses 🌹",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #E91E63;">Ring-a-Ring o' Roses 🌹</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Ring-a-ring o' roses,<br>
                    A pocket full of posies. 💐<br>
                    A-tishoo! A-tishoo!<br>
                    We all fall down. 🙇‍♂️
                </p>
            </div>
        `
    },
    {
        title: "৪৭. Old MacDonald 🧑‍🌾",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #4CAF50;">Old MacDonald 🧑‍🌾</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Old MacDonald had a farm,<br>
                    E-I-E-I-O. 🚜<br>
                    And on his farm he had a cow,<br>
                    E-I-E-I-O. 🐄
                </p>
            </div>
        `
    },
    {
        title: "৪৮. Teddy Bear, Teddy Bear 🧸",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #8D6E63;">Teddy Bear, Teddy Bear 🧸</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Teddy bear, teddy bear,<br>
                    Turn around. 🔄<br>
                    Teddy bear, teddy bear,<br>
                    Touch the ground. 🏜️
                </p>
            </div>
        `
    },
    {
        title: "৪৯. Are You Sleeping? 🛌",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #673AB7;">Are You Sleeping? 🛌</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Are you sleeping? Are you sleeping?<br>
                    Brother John, Brother John. 👦<br>
                    Morning bells are ringing!<br>
                    Ding, dang, dong. 🔔
                </p>
            </div>
        `
    },
    {
        title: "৫০. Johny's Little Dog 🐶",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #009688;">Johny's Little Dog 🐶</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Oh where, oh where has my little dog gone?<br>
                    Oh where, oh where can he be? 🤔<br>
                    With his ears cut short<br>
                    And his tail cut long. 🐕
                </p>
            </div>
        `
    }
];
