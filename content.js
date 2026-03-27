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
    },
    {
        title: "৫১. আয় বৃষ্টি ঝেঁপে 🌧️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #2196F3;">আয় বৃষ্টি ঝেঁপে 🌧️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    আয় বৃষ্টি ঝেঁপে,<br>
                    ধান দেব মেপে। 🌾<br>
                    লেবুর পাতায় করমচা,<br>
                    যা বৃষ্টি ঝরে যা। 🍋
                </p>
            </div>
        `
    },
    {
        title: "৫২. খোকন খোকন করে মায় 🤱",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #E91E63;">খোকন খোকন করে মায় 🤱</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    খোকন খোকন করে মায়,<br>
                    খোকন গেছে কাদের নায়। ⛵<br>
                    সাতটা কাকে দাঁড় বায়,<br>
                    খোকন রে তুই ঘরে আয়। 👦
                </p>
            </div>
        `
    },
    {
        title: "৫৩. খোকা যাবে রথে 🛝",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #4CAF50;">খোকা যাবে রথে 🛝</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    খোকা যাবে রথে চড়ে,<br>
                    ব্যাঙ হবে সারথি। 🐸<br>
                    মাঠে ঘাটে ঘাস খাবে,<br>
                    খোকন ছানার হাতি। 🐘
                </p>
            </div>
        `
    },
    {
        title: "৫৪. এক দুই তিন 🔢",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FFC107;">এক দুই তিন 🔢</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    এক দুই তিন,<br>
                    নাচে তা ধিন ধিন। 💃<br>
                    চার পাঁচ ছয়,<br>
                    কারো নেই ভয়। 🦁
                </p>
            </div>
        `
    },
    {
        title: "৫৫. বৃষ্টি পড়ে টাপুর টুপুর 🌧️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #9C27B0;">বৃষ্টি পড়ে টাপুর টুপুর 🌧️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    বৃষ্টি পড়ে টাপুর টুপুর,<br>
                    নদেয় এলো বান। 🌊<br>
                    শিব ঠাকুরের বিয়ে হবে,<br>
                    তিন কন্যে দান। 👰
                </p>
            </div>
        `
    },
    {
        title: "৫৬. Wheels on the Bus 🚌",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #00BCD4;">Wheels on the Bus 🚌</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    The wheels on the bus go<br>
                    Round and round, 🔄<br>
                    Round and round, round and round.<br>
                    All through the town. 🏙️
                </p>
            </div>
        `
    },
    {
        title: "৫৭. Five Little Monkeys 🐒",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #795548;">Five Little Monkeys 🐒</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Five little monkeys jumping on the bed,<br>
                    One fell off and bumped his head. 🤕<br>
                    Mama called the doctor and the doctor said,<br>
                    "No more monkeys jumping on the bed!" 🚫
                </p>
            </div>
        `
    },
    {
        title: "৫৮. Little Bo Peep 🐑",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FF5722;">Little Bo Peep 🐑</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Little Bo-Peep has lost her sheep,<br>
                    And doesn't know where to find them. 🤔<br>
                    Leave them alone, and they'll come home,<br>
                    Bringing their tails behind them. 🌾
                </p>
            </div>
        `
    },
    {
        title: "৫৯. Pat-a-Cake 🍰",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #607D8B;">Pat-a-Cake 🍰</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Pat-a-cake, pat-a-cake, baker's man,<br>
                    Bake me a cake as fast as you can. 👨‍🍳<br>
                    Pat it and prick it, and mark it with B,<br>
                    Put it in the oven for baby and me. 👶
                </p>
            </div>
        `
    },
    {
        title: "৬০. Pussycat, Pussycat 🐈",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #8BC34A;">Pussycat, Pussycat 🐈</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Pussycat, pussycat, where have you been?<br>
                    I've been to London to visit the Queen. 👑<br>
                    Pussycat, pussycat, what did you there?<br>
                    I frightened a little mouse under her chair. 🐁
                </p>
            </div>
        `
    },
    {
        title: "৬১. Two Little Dicky Birds 🐦",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #E040FB;">Two Little Dicky Birds 🐦</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Two little dicky birds sitting on a wall,<br>
                    One named Peter, one named Paul. 🕊️<br>
                    Fly away Peter! Fly away Paul!<br>
                    Come back Peter! Come back Paul! 🔙
                </p>
            </div>
        `
    },
    {
        title: "৬২. Three Blind Mice 🐁",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #F44336;">Three Blind Mice 🐁</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Three blind mice. Three blind mice.<br>
                    See how they run. See how they run. 🏃<br>
                    They all ran after the farmer's wife,<br>
                    Who cut off their tails with a carving knife. 🔪
                </p>
            </div>
        `
    },
    {
        title: "৬৩. I Hear Thunder ⚡",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #3F51B5;">I Hear Thunder ⚡</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    I hear thunder, I hear thunder,<br>
                    Oh, don't you? Oh, don't you? 🌩️<br>
                    Pitter-patter raindrops, pitter-patter raindrops,<br>
                    I'm wet through! So are you! ☔
                </p>
            </div>
        `
    },
    {
        title: "৬৪. If You're Happy 😊",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #4CAF50;">If You're Happy 😊</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    If you're happy and you know it,<br>
                    Clap your hands! 👏<br>
                    If you're happy and you know it,<br>
                    Clap your hands! 👏
                </p>
            </div>
        `
    },
    {
        title: "৬৫. This Old Man 👴",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #795548;">This Old Man 👴</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    This old man, he played one,<br>
                    He played knick-knack on my thumb. 🤚<br>
                    With a knick-knack paddywhack,<br>
                    Give a dog a bone. 🦴
                </p>
            </div>
        `
    },
    {
        title: "৬৬. Head, Shoulders, Knees 👤",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #E91E63;">Head, Shoulders, Knees 👤</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Head, shoulders, knees and toes,<br>
                    Knees and toes. 🦶<br>
                    And eyes, and ears, and mouth, and nose.<br>
                    Head, shoulders, knees and toes. 👁️
                </p>
            </div>
        `
    },
    {
        title: "৬৭. Little Miss Muffet 🕷️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #9C27B0;">Little Miss Muffet 🕷️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Little Miss Muffet sat on a tuffet,<br>
                    Eating her curds and whey. 🥣<br>
                    Along came a spider, who sat down beside her,<br>
                    And frightened Miss Muffet away. 🏃‍♀️
                </p>
            </div>
        `
    },
    {
        title: "৬৮. The Alphabet Song 🔤",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #03A9F4;">The Alphabet Song 🔤</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    A-B-C-D-E-F-G,<br>
                    H-I-J-K-L-M-N-O-P. 🎵<br>
                    Q-R-S, T-U-V,<br>
                    W-X, Y and Z. 🅰️
                </p>
            </div>
        `
    },
    {
        title: "৬৯. Five Little Ducks 🦆",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FFC107;">Five Little Ducks 🦆</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Five little ducks went swimming one day,<br>
                    Over the hill and far away. 🏞️<br>
                    Mother duck said, "Quack, quack, quack, quack."<br>
                    But only four little ducks came back. 🦢
                </p>
            </div>
        `
    },
    {
        title: "৭০. BINGO 🐶",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FF5722;">BINGO 🐶</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    There was a farmer had a dog,<br>
                    And Bingo was his name-o. 👨‍🌾<br>
                    B-I-N-G-O, B-I-N-G-O,<br>
                    And Bingo was his name-o. 🐕
                </p>
            </div>
        `
    },
    {
        title: "৭১. Old Mother Hubbard 🦴",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #607D8B;">Old Mother Hubbard 🦴</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Old Mother Hubbard went to the cupboard,<br>
                    To give the poor dog a bone. 🐶<br>
                    When she came there, the cupboard was bare,<br>
                    And so the poor dog had none. 🥣
                </p>
            </div>
        `
    },
    {
        title: "৭২. Mary, Mary, Quite Contrary 🌷",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #8BC34A;">Mary, Mary, Quite Contrary 🌷</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Mary, Mary, quite contrary,<br>
                    How does your garden grow? 🌻<br>
                    With silver bells, and cockle shells,<br>
                    And pretty maids all in a row. 🌼
                </p>
            </div>
        `
    },
    {
        title: "৭৩. Hey Diddle Diddle 🐄",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #E040FB;">Hey Diddle Diddle 🐄</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Hey diddle diddle, the cat and the fiddle,<br>
                    The cow jumped over the moon. 🌙<br>
                    The little dog laughed to see such sport,<br>
                    And the dish ran away with the spoon. 🥄
                </p>
            </div>
        `
    },
    {
        title: "৭৪. Rub-a-dub-dub 🛁",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #009688;">Rub-a-dub-dub 🛁</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Rub-a-dub-dub,<br>
                    Three men in a tub. 🛀<br>
                    And who do you think they be?<br>
                    The butcher, the baker, the candlestick-maker! 🕯️
                </p>
            </div>
        `
    },
    {
        title: "৭৫. Pop Goes the Weasel 🎈",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #F44336;">Pop Goes the Weasel 🎈</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Half a pound of tuppenny rice,<br>
                    Half a pound of treacle. 🍚<br>
                    That’s the way the money goes,<br>
                    Pop! goes the weasel. 🎉
                </p>
            </div>
        `
    },
    {
        title: "৭৬. দোল দোল দুলুনি 👶",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #3F51B5;">দোল দোল দুলুনি 👶</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    দোল দোল দুলুনি,<br>
                    রাঙা মাথায় চিরুনি। 梳<br>
                    বর আসবে যখনি,<br>
                    নিয়ে যাবে তখনি। 🚗
                </p>
            </div>
        `
    },
    {
        title: "৭৭. খুকু যাবে শ্বশুরবাড়ি 👰",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #4CAF50;">খুকু যাবে শ্বশুরবাড়ি 👰</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    খুকু যাবে শ্বশুরবাড়ি,<br>
                    সঙ্গে যাবে কে? 🚶‍♂️<br>
                    বাড়িতে আছে হুলো বিড়াল,<br>
                    কোমর বেঁধেছে। 🐈
                </p>
            </div>
        `
    },
    {
        title: "৭৮. আমটি আমি খাব পেড়ে 🥭",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FF9800;">আমটি আমি খাব পেড়ে 🥭</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    আয় ছেলেরা আয় মেয়েরা,<br>
                    আম কুড়াতে যাই। 🏃‍♀️<br>
                    ঝড়ের দিনে মামার দেশে,<br>
                    আম কুড়াতে সুখ পাই। 🌪️
                </p>
            </div>
        `
    },
    {
        title: "৭৯. ময়না পাখি 🐦",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #E91E63;">ময়না পাখি 🐦</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    ময়না পাখি ময়না পাখি,<br>
                    কী কথা কও শুনি? 🗣️<br>
                    খোকা ঘুমায় খাটের ওপর,<br>
                    আমি বসে গুনি। 🛏️
                </p>
            </div>
        `
    },
    {
        title: "৮০. টিয়া পাখির ঠোঁটটি লাল 🦜",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #00BCD4;">টিয়া পাখির ঠোঁটটি লাল 🦜</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    টিয়া পাখির ঠোঁটটি লাল,<br>
                    বসে আছে গাছের ডাল। 🌳<br>
                    মিষ্টি সুরে গায় যে গান,<br>
                    জুড়িয়ে যায় সবার প্রাণ। 🎶
                </p>
            </div>
        `
    },
    {
        title: "৮১. ছিপখান তিন দাঁড় 🚣",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #795548;">ছিপখান তিন দাঁড় 🚣</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    ছিপখান তিন দাঁড়,<br>
                    তিন জন মাল্লা। 🛶<br>
                    চৌপর দিন-ভর,<br>
                    দেয় দূর পাল্লা। 🌊
                </p>
            </div>
        `
    },
    {
        title: "৮২. খোকা যাবে মাছ ধরতে 🎣",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FF5722;">খোকা যাবে মাছ ধরতে 🎣</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    খোকা যাবে মাছ ধরতে,<br>
                    ক্ষীর নদীর কূলে।  رود<br>
                    ছিপ নিয়ে গেল কোলা ব্যাঙে,<br>
                    মাছ নিয়ে গেল চিলে। 🦅
                </p>
            </div>
        `
    },
    {
        title: "৮৩. প্রজাপতি প্রজাপতি 🦋",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #673AB7;">প্রজাপতি প্রজাপতি 🦋</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    প্রজাপতি প্রজাপতি,<br>
                    কোথায় পেলে ভাই এমন রঙিন পাখা? 🎨<br>
                    টুকটুকে লাল নীল ঝিলিমিলি আঁকাবাঁকা,<br>
                    কোথায় পেলে ভাই এমন রঙিন পাখা? ✨
                </p>
            </div>
        `
    },
    {
        title: "৮৪. জোনাকি পোকা ✨",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FFEB3B; background: #333; padding: 5px; border-radius: 5px;">জোনাকি পোকা ✨</h2>
                <p style="font-size: 18px; line-height: 1.8; color: #fff;">
                    জোনাকি পোকা জোনাকি পোকা,<br>
                    রাতের বেলা দিস যে ধোঁকা। 🌌<br>
                    আলো জ্বেলে উড়ে যাস,<br>
                    কোথায় তোদের বসবাস? 🏡
                </p>
            </div>
        `
    },
    {
        title: "৮৫. সোনা নাচে কোণা 💃",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #9C27B0;">সোনা নাচে কোণা 💃</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    সোনা নাচে কোণা,<br>
                    বউ খাবে দানা। 🍚<br>
                    দানা তো পেল না,<br>
                    সোনা তো নাচল না। 🥺
                </p>
            </div>
        `
    },
    {
        title: "৮৬. আয় রে পাখি লেজ ঝোলা 🦜",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #03A9F4;">আয় রে পাখি লেজ ঝোলা 🦜</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    আয় রে পাখি লেজ ঝোলা,<br>
                    খোকনকে নিয়ে কর খেলা। 🧸<br>
                    খাবি দাবি কলকলাবি,<br>
                    খোকনকে ঘুম পাড়াবি। 💤
                </p>
            </div>
        `
    },
    {
        title: "৮৭. ঝুমকো জবা 🌺",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #F44336;">ঝুমকো জবা 🌺</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    ঝুমকো জবা বনের দুল,<br>
                    উঠল ফুটে বনের ফুল। 🌸<br>
                    সবুজ পাতা ঘোমটা খোলে,<br>
                    ঝুমকো জবা হাওয়ায় দোলে। 🍃
                </p>
            </div>
        `
    },
    {
        title: "৮৮. ব্যাঙের ছাতা 🍄",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #4CAF50;">ব্যাঙের ছাতা 🍄</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    ছাতা ধরেছে ব্যাঙের ছানা,<br>
                    বৃষ্টি পড়ে ঝমাঝম। 🌧️<br>
                    মাঠে ঘাটে জল জমেছে,<br>
                    ডাকছে ব্যাঙ ঘ্যাঙর ঘ্যাঙ। 🐸
                </p>
            </div>
        `
    },
    {
        title: "৮৯. কাঠবিড়ালী পেয়ারা খাস 🍐",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FFC107;">কাঠবিড়ালী পেয়ারা খাস 🍐</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    কাঠবিড়ালী, কাঠবিড়ালী, তুই কি আমার খুকি?<br>
                    পেয়ারা গাছে লুকিয়ে থেকে, দিস কেন তুই উঁকি? 👀<br>
                    আয় না নিচে নেমে আয়, খেলব দুজন মিলে,<br>
                    মিষ্টি একটা পেয়ারা দেব, খাবি তুই তা ছিলে। 🥭
                </p>
            </div>
        `
    },
    {
        title: "৯০. মাকড়সা 🕷️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #607D8B;">মাকড়সা 🕷️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    মাকড়সা ভাই মাকড়সা,<br>
                    জাল বোনাতেই ভরসা। 🕸️<br>
                    মাছি পড়লে জালের ফাঁদে,<br>
                    ভয়ে তখন বসে কাঁদে। 🪰
                </p>
            </div>
        `
    },
    {
        title: "৯১. Hot Cross Buns 🍞",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #795548;">Hot Cross Buns 🍞</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Hot cross buns!<br>
                    Hot cross buns! 🥖<br>
                    One a penny, two a penny,<br>
                    Hot cross buns! 🪙
                </p>
            </div>
        `
    },
    {
        title: "৯২. Jack Be Nimble 🕯️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #FF5722;">Jack Be Nimble 🕯️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Jack be nimble,<br>
                    Jack be quick. 🏃‍♂️<br>
                    Jack jump over<br>
                    The candlestick. 🔥
                </p>
            </div>
        `
    },
    {
        title: "৯৩. Pease Porridge Hot 🥣",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #E91E63;">Pease Porridge Hot 🥣</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Pease porridge hot,<br>
                    Pease porridge cold. 🧊<br>
                    Pease porridge in the pot,<br>
                    Nine days old. 🍲
                </p>
            </div>
        `
    },
    {
        title: "৯৪. Star Light, Star Bright 🌟",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #03A9F4;">Star Light, Star Bright 🌟</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Star light, star bright,<br>
                    First star I see tonight. 🌠<br>
                    I wish I may, I wish I might,<br>
                    Have the wish I wish tonight. 🙏
                </p>
            </div>
        `
    },
    {
        title: "৯৫. Rock-a-bye Baby 🍼",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #9C27B0;">Rock-a-bye Baby 🍼</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Rock-a-bye baby, on the treetop,<br>
                    When the wind blows, the cradle will rock. 🌬️<br>
                    When the bough breaks, the cradle will fall,<br>
                    And down will come baby, cradle and all. 🛏️
                </p>
            </div>
        `
    },
    {
        title: "৯৬. Sing a Song of Sixpence 🥧",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #8BC34A;">Sing a Song of Sixpence 🥧</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Sing a song of sixpence,<br>
                    A pocket full of rye. 🌾<br>
                    Four and twenty blackbirds,<br>
                    Baked in a pie. 🐦
                </p>
            </div>
        `
    },
    {
        title: "৯৭. The Muffin Man 🧁",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #E040FB;">The Muffin Man 🧁</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Oh, do you know the muffin man,<br>
                    The muffin man, the muffin man? 👨‍🍳<br>
                    Oh, do you know the muffin man,<br>
                    Who lives on Drury Lane? 🏘️
                </p>
            </div>
        `
    },
    {
        title: "৯৮. Mulberry Bush 🌳",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #4CAF50;">Mulberry Bush 🌳</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    Here we go round the mulberry bush,<br>
                    The mulberry bush, the mulberry bush. 🌿<br>
                    Here we go round the mulberry bush,<br>
                    On a cold and frosty morning. ❄️
                </p>
            </div>
        `
    },
    {
        title: "৯৯. Itsy Bitsy Spider 🕸️",
        content: `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color: #009688;">Itsy Bitsy Spider 🕸️</h2>
                <p style="font-size: 18px; line-height: 1.8;">
                    The itsy bitsy spider climbed up the waterspout. 🕷️<br>
                    Down came the rain and washed the spider out. 🌧️<br>
                    Out came the sun and dried up all the rain. ☀️<br>
                    And the itsy bitsy spider climbed up the spout again. 🕸️
                </p>
            </div>
        `
    },
    {
        title: "১০০. লেখক পরিচিতি 👨‍🏫",
        content: `
            <div style="text-align:center; padding: 20px; background: #f0f8ff; border-radius: 15px; margin-top: 20px;">
                <img src="https://i.ibb.co.com/LDMM7qTn/d.png" alt="Author" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid #03A9F4;">
                <h3 style="color: #333; margin-bottom: 5px;">মোঃ মঞ্জুরুল হক</h3>
                <p style="color: #666; font-weight: bold; margin-top: 0;">প্রভাষক, অর্থনীতি</p>
                <p style="color: #666; font-size: 14px;">জিয়াউদ্দিন স্কুল এন্ড কলেজ, কিশোরগঞ্জ</p>
                <hr style="border: 1px dashed #ccc; margin: 15px 0;">
                <p>📞 মোবাইল: 01715247588</p>
                <p>💬 WhatsApp: 01715247588</p>
                <p>📧 মেইল: monjurul.jusc@gmail.com</p>
                <p>🌐 <a href="https://www.facebook.com/himel.hemu" target="_blank" style="color: #03A9F4; text-decoration: none; font-weight: bold;">ফেসবুক প্রোফাইল</a></p>
                
                <p style="margin-top:20px; font-size: 14px; color: #E91E63;">
                    ছড়াগুলো পড়ে মজা পেলে বন্ধুদের সাথে শেয়ার করতে ভুলবেন না! ✨
                </p>
            </div>
        `
    }
];
