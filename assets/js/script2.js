// Membuat variabel konstanta untuk mereferensi elemen-elemen HTML yang akan digunakan
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// Menginisialisasi variabel-variabel game
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 3; // Jumlah maksimal tebakan yang diperbolehkan

// Fungsi untuk mereset permainan
const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "./assets/img/yul3.gif";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

// Fungsi untuk mendapatkan kata secara acak
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

// Fungsi untuk menangani kondisi akhir permainan
const gameOver = (isVictory) => {
    const modalText = isVictory ? `Jawaban Kamu:` : 'Jawaban Yang Benar:';
    gameModal.querySelector("img").src = "./assets/img/yul3.gif";
    gameModal.querySelector("h4").innerText = isVictory ? 'Wow kamu hebat' : 'Yahh Salah';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

// Fungsi untuk menginisialisasi permainan ketika tombol di keyboard ditekan
const initGame = (button, clickedLetter) => {
    if(currentWord.includes(clickedLetter)) {
        // Menangani tebakan yang benar
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // Menangani tebakan yang salah
        wrongGuessCount++;
        hangmanImage.src = `./assets/img/yul3.gif`;
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Memeriksa apakah permainan selesai
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

// Membuat tombol-tombol keyboard dan menambahkan event listener
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

// Memulai permainan dengan kata acak pertama
getRandomWord();

// Menambahkan event listener untuk tombol "Main Lagi"
playAgainBtn.addEventListener("click", getRandomWord);
