const openAI = document.getElementById("openAI");
const closeAI = document.getElementById("closeAI");
const aiChat = document.getElementById("aiChat");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

/* Open Chat */
if (openAI) {
    openAI.addEventListener("click", () => {
        aiChat.style.display = "flex";
    });
}

/* Close Chat */
if (closeAI) {
    closeAI.addEventListener("click", () => {
        aiChat.style.display = "none";
    });
}

/* Gemini API */
async function gemini_ai(userQuestion) {

    const API_KEY = "AQ.Ab8RN6LyDalqTdDrp4z_f0eszqnYDYXpM4m33DbI2BR_VUhetQ";

    const API_URL =
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${API_KEY}`;

    const CUSTOM_PROMPT = `
You are BlogHub AI.

You help users with:

- Blogging
- Content Writing
- HTML
- CSS
- JavaScript
- Web Development
- Programming
- Career Guidance
- Study Tips

Answer in simple English.

Keep answers short and beginner friendly.

About yourself:

- Your name is BlogHub AI.
- You are the AI assistant of BlogHub.
- You were created by Sajiya Parween.

If anyone asks:
"Who created you?"
"Who is your developer?"
"Who made you?"

Reply:

"I was created by Sajiya Parween."

If a user asks something unrelated to blogging, programming, web development or study guidance, reply:

"I am BlogHub AI and can help with blogging, programming, web development and study guidance only."
`;

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                systemInstruction: {
                    parts: [
                        {
                            text: CUSTOM_PROMPT
                        }
                    ]
                },
                contents: [
                    {
                        parts: [
                            {
                                text: userQuestion
                            }
                        ]
                    }
                ]
            })
        });

        const data = await response.json();

        console.log(data);

        if (
            data.candidates &&
            data.candidates[0] &&
            data.candidates[0].content &&
            data.candidates[0].content.parts
        ) {
            return data.candidates[0].content.parts[0].text;
        }

        return "No response received.";

    } catch (error) {

        console.error(error);

        return "Sorry, AI is currently unavailable.";

    }
}

/* Send Message */
async function sendMessage() {

    const question = userInput.value.trim();

    if (question === "") return;

    chatBody.innerHTML += `
        <div class="user-message">
            ${question}
        </div>
    `;

    userInput.value = "";

    chatBody.innerHTML += `
        <div class="bot-message" id="loading">
            Thinking...
        </div>
    `;

    chatBody.scrollTop = chatBody.scrollHeight;

    const reply = await gemini_ai(question);

    const loading = document.getElementById("loading");

    if (loading) {
        loading.remove();
    }

    chatBody.innerHTML += `
        <div class="bot-message">
            ${reply}
        </div>
    `;

    chatBody.scrollTop = chatBody.scrollHeight;
}

/* Button Click */
if (sendBtn) {
    sendBtn.addEventListener("click", sendMessage);
}

/* Enter Key Support */
if (userInput) {
    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
}