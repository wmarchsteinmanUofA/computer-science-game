let currentQuestionIndex = 0;
let playerName = '';

const story = [
    {
        ascii: `
        |--------|
        |   🤖    |
        |--------|
        `,
        description: "You find yourself in a virtual classroom, buzzing with the hum of computers. A friendly robot stands at the front, holding a sign. It says:",
        question: "What day are Mr. March-Steinman’s office hours?",
        answers: ["tuesday"],
        successMessage: "The robot nods and opens a hidden panel, revealing a glowing path. You step through..."
    },
    {
        ascii: `
        |---------|
        |   🤞     |
        |---------|
        `,
        description: "You enter a hallway lined with lockers. A large poster on the wall shows a crossed fingers emoji. Below it reads:",
        question: "What does this signal mean in class?",
        answers: ["restroom", "bathroom", "water break", "break"],
        successMessage: "A locker clicks open, revealing a staircase leading down. You cautiously descend..."
    },
    {
        ascii: `
        |-----------|
        |  📧  |
        |-----------|
        `,
        description: "At the bottom of the stairs, you find a sealed door with a keypad. A digital screen flickers with the message:",
        question: "Find Mr. March-Steinman’s email address in the syllabus and type it below.",
        answers: ["msteinman@gbwl.org"],
        successMessage: "The door beeps and slides open, revealing a dimly lit library filled with glowing books."
    },
    {
        ascii: `
        |------------|
        |  📚         |
        |------------|
        `,
        description: "You browse the books, noticing three glowing brighter than the rest. Each represents a grade category in this class. The books ask:",
        question: "What are the three main categories that make up your grade in this class?",
        answers: ["projects", "homework", "participation"],
        successMessage: "The books float into the air, aligning themselves into a hidden doorway. You walk through."
    },
    {
        ascii: `
        |-------------|
        |   🎮        |
        |-------------|
        `,
        description: "You find yourself in a room with a giant screen showing a code editor. A message flashes:",
        question: "What coding platform will be our main tool for coding projects?",
        answers: ["codehs", "code hs"],
        successMessage: "The screen displays a welcome message and reveals a passage behind it."
    },
    {
        ascii: `
        |-------------|
        |   🖥️        |
        |-------------|
        `,
        description: "Stepping into the passage, you find a terminal with a game called 'Scratch' running. It challenges you:",
        question: "Which resource can you use to create games, animations, and stories?",
        answers: ["scratch"],
        successMessage: "The terminal prints 'Access Granted' and a door swings open to a mysterious chamber."
    },
    {
        ascii: `
        |-------------|
        |   📁        |
        |-------------|
        `,
        description: "Inside the chamber, you see a desk with a checklist. The checklist glows, displaying:",
        question: "What supplies should you bring to class every day?",
        answers: ["chromebook", "laptop", "orange folder", "pen", "pencil", "headphones"],
        successMessage: "The checklist ticks off items one by one. A hidden drawer opens, revealing a glowing key."
    },
    {
        ascii: `
        |-------------|
        |   📊        |
        |-------------|
        `,
        description: "You use the key to unlock a gate. Beyond the gate is a board with grading scales. It reads:",
        question: "What is the grading scale for an A in this class?",
        answers: ["93-100", "93 to 100", "93 100"],
        successMessage: "The board flips over, revealing a hidden vault. The vault door begins to open..."
    },
    {
        ascii: `
        |-------------|
        |   📋        |
        |-------------|
        `,
        description: "Inside the vault, a scroll details the late work policy. It reads:",
        question: "How much credit can you earn for late homework if it's submitted within one week?",
        answers: ["75%", "75 percent", "seventy five percent"],
        successMessage: "The scroll turns to dust, and a staircase appears, leading up to a glowing portal."
    },
    {
        ascii: `
        |-------------|
        |   💡        |
        |-------------|
        `,
        description: "At the top of the stairs, you find a room filled with motivational posters. One reads:",
        question: "Name one mindset tip mentioned in the syllabus.",
        answers: ["embrace creativity", "be proactive", "collaborate"],
        successMessage: "The posters flutter and reveal a hidden exit. You follow the path..."
    },
    {
        ascii: `
        |-------------|
        |   🔐        |
        |-------------|
        `,
        description: "The path leads to a vault, locked with a code. A voice whispers:",
        question: "Look up a fun fact about cryptography and type it below.",
        answers: [''],
        successMessage: "The vault clicks open, revealing a chest of ancient knowledge."
    },
    {
        ascii: `
        |-------------|
        |   🎨        |
        |-------------|
        `,
        description: "A canvas sits next to the chest, glowing with potential. It asks:",
        question: "What’s something you’re excited to create in this class? Describe your project idea.",
        answers: [''],
        successMessage: "The canvas transforms into a portal, leading to the final chamber."
    },
    {
        ascii: `
        |-------------|
        |   🌍        |
        |-------------|
        `,
        description: "In the final chamber, a hologram of Earth rotates, displaying various issues. It says:",
        question: "Name one global issue that computer science can help solve.",
        answers: [''],
        successMessage: "The hologram pulses with light, showing you a vision of a brighter future."
    }
];

function startGame() {
    const nameInput = document.getElementById('name-input');
    playerName = nameInput.value.trim();

    if (playerName === '') {
        document.getElementById('game-text').innerText = "Please enter your name to start the game!";
    } else {
        document.querySelector('button').style.display = 'none'; // Hide the start button
        nameInput.style.display = 'none'; // Hide the name input
        document.getElementById('user-input').style.display = 'block'; // Show answer input
        document.getElementById('game-text').innerText = `Welcome, ${playerName}! Your adventure begins now.`;
        currentQuestionIndex = 0; // Reset question index
        document.getElementById('user-input').addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                checkAnswer(this.value.toLowerCase().trim());
                this.value = ''; // Clear the input
            }
        });
        setTimeout(showQuestion, 2000); // Delay to show greeting before the first question
    }
}

function showQuestion() {
    if (currentQuestionIndex < story.length) {
        const scene = story[currentQuestionIndex];
        document.getElementById('ascii-art').innerText = scene.ascii;
        document.getElementById('game-text').innerText = `${scene.description}\n\n${scene.question}`;
    } else {
        endGame();
    }
}

function checkAnswer(answer) {
    const correctAnswers = story[currentQuestionIndex].answers;
    if (correctAnswers.some(correctAnswer => answer.includes(correctAnswer))) {
        const successMessage = story[currentQuestionIndex].successMessage;
        document.getElementById('game-text').innerText = successMessage;
        currentQuestionIndex++;
        setTimeout(showQuestion, 2000); // Delay before showing the next question
    } else {
        document.getElementById('game-text').innerText = "Incorrect answer. Try again!";
    }
}

function endGame() {
    document.getElementById('ascii-art').innerText = `
        |------------|
        |   🎉      |
        |------------|
    `;
    document.getElementById('game-text').innerText = `Congratulations, ${playerName}! You've completed the scavenger hunt and unlocked the secrets of the digital world! Raise your hand and show this page to Mr. March-Steinman for full credit and a small prize.`;
    document.getElementById('user-input').style.display = 'none';
}
