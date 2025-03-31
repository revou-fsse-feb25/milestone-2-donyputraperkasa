// bagian sidebar
function openSidebar() {
    document.getElementById("sidebar").classList.remove("ml-[-100%]");
   }

   function closeSidebar() {
    document.getElementById("sidebar").classList.add("ml-[-100%]");
   }

// bagian kertas batu gunting
// inspirasi = waktu prakten dengan tim di hari sabtu
const pilihan = ['batu', 'kertas', 'gunting'];
const Kertas = document.getElementById("Kertas");
const Batu = document.getElementById("Batu");
const Gunting = document.getElementById("Gunting");

function getComputerChoice() {
    const pilihanAcak = Math.floor(Math.random() * pilihan.length);
    return pilihan[pilihanAcak];
}
function determineWinner(aku, komp) {
    if (aku === komp) {
        return "seri";
    } else if (
        (aku === "batu" && komp === "kertas") ||
        (aku === "kertas" && komp === "gunting") ||
        (aku === "gunting" && komp === "batu")
    ) {
        return "aku kalah";
    } else {
        return "aku menang";
    }
}
Kertas.addEventListener('click', () => mulaiGame('kertas'));
Batu.addEventListener('click', () => mulaiGame('batu'));
Gunting.addEventListener('click', () => mulaiGame('gunting'));

function mulaiGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    alert(`aku =  ${playerChoice}\nKomputer = ${computerChoice}\nhasil = ${result}`);
}