// Daftar bahasa pemrograman yang akan ditebak
var jawaban = [
    "keyboard",
    "ram",
    "monitorgame",
    "cpu",
    "billgates",
    "brendaneich",
    "printer",
    "kangparkir",
    "motherboard",
    "bpkahmadMubarokmkom",
];

// Daftar petunjuk untuk masing-masing bahasa pemrograman
var pertanyaan = {
    keyboard: "Bagian komputer sebagai papan tombol ketik?",
    ram: "Bagian komputer yang berfungsi sebagai memori komputer?",
    monitorgame: "Bagian komputer alat bantu bermain game",
    cpu: "Bagian komputer yang berfungsi sebagai otak komputer",
    billgates: "Siapa pembuat aplikasi word?",
    brendaneich: "siapa penemu javascript",
    printer: "Bagian komputer sebagai alat cetak data ke kertas",
    kangparkir: "siapa pendiri yang menjaga parkiran yang bayar nya 5ribu yang kembalian nya 2ribu,bilang nya gak ada receh 1ribu",
    motherboard: "Bagian komputer sebagai papan sirkuit utama yang berguna sebagai tempat macam-macam komponen elektronik",
    bpkAhmadMubarokmkom:
        "siapa dosen Java script sistem informasi yang ganteng?"
};

// Element HTML yang diperlukan
var wordDisplay = document.getElementById("garis2-display");
var guessInput = document.getElementById("kholis-ganteng");
var guessButton = document.getElementById("tebak-button");
var hintButton = document.getElementById("petunjuk-button");
var hintElement = document.getElementById("petunjuk2-text");
var correctCountElement = document.getElementById("jawaban2-benar");
var levelButton = document.getElementById("level-button");

var selectedWord, hiddenWord;
var correctCount = 0;
var maxCorrectCount = 7; // Jumlah maksimal jawaban benar

// Fungsi untuk menginisialisasi permainan
function initGame() {
    // Memilih secara acak sebuah kata dari daftar bahasa pemrograman
    selectedWord =
        jawaban[
            Math.floor(Math.random() * jawaban.length)
        ];

    // Membuat sebuah array dengan dash untuk setiap huruf dalam selectedWord
    hiddenWord = Array(selectedWord.length).fill("-");

    // Menampilkan kata yang belum ditebak awal
    wordDisplay.textContent = hiddenWord.join(" ");

    // Menampilkan petunjuk untuk kata yang dipilih
    hintElement.textContent = pertanyaan[selectedWord];
}

// Event listener saat tombol "Tebak" ditekan
guessButton.addEventListener("click", function () {
    var guess = guessInput.value.toLowerCase();

    // Memeriksa apakah tebakan benar
    if (guess === selectedWord) {
        hiddenWord = selectedWord.split("");
        wordDisplay.textContent = hiddenWord.join(" ");
        alert("Selamat, kamu berhasil menebak kata!");

        // Menambah jumlah jawaban benar
        correctCount++;

        // Menampilkan jumlah jawaban benar
        correctCountElement.textContent = "Jawaban Benar: " + correctCount;

        // Memeriksa apakah sudah mencapai jumlah maksimal jawaban benar
        if (correctCount === maxCorrectCount) {
            // Mengaktifkan dan menampilkan tombol "Level Selanjutnya"
            levelButton.removeAttribute("disabled");
            levelButton.style.display = "inline-block";
        }

        // Melanjutkan ke kata berikutnya
        resetGame();
    } else {
        alert("Tebakan salah, coba lagi!");
    }

    // Mengosongkan input tebakan
    guessInput.value = "";
});

// Event listener saat tombol "Petunjuk 1 Huruf" ditekan
hintButton.addEventListener("click", function () {
    var indices = [];
    for (var k = 0; k < selectedWord.length; k++) {
        if (hiddenWord[k] === "-") {
            indices.push(k);
        }
    }

    // Jika tidak ada dash yang tersisa, tidak ada petunjuk yang bisa ditampilkan
    if (indices.length === 0) {
        alert("Tidak ada petunjuk yang tersedia.");
        return;
    }

    var randomIndex = indices[Math.floor(Math.random() * indices.length)];
    hiddenWord[randomIndex] = selectedWord[randomIndex];
    wordDisplay.textContent = hiddenWord.join(" ");
});

// Event listener saat tombol "Level Selanjutnya" ditekan
levelButton.addEventListener("click", function () {
    // Mengarahkan ke halaman index2.html
    window.location.href = "level3.html";
});

// Fungsi untuk mengulang permainan
function resetGame() {
    initGame();
}

// Menginisialisasi permainan saat script dimuat
initGame();
