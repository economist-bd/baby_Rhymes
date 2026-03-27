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
    }
];