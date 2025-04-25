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

let pertandingan = 0;
let skor = 0;
function mulaiGame(player) {
    const computer = getComputerChoice();
    const skor = determineWinner(player, computer);
    pertandingan++;
    const leaderboard = document.getElementById("leaderboard");
    const baris = document.createElement("tr");
    baris.innerHTML =`
        <td>${pertandingan}</td>
        <td>${player}</td>
        <td>${computer}</td>
        <td>${skor}</td>
        `;
    leaderboard.appendChild(baris);
    // alert(`aku =  ${playerChoice}\nKomputer = ${computerChoice}\nhasil = ${result}`);
    document.getElementById("hasilnya").textContent="hasilnya" + skor;
}
