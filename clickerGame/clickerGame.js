// bagian sidebar
function openSidebar() {
    document.getElementById("sidebar").classList.remove("ml-[-100%]");
   }

   function closeSidebar() {
    document.getElementById("sidebar").classList.add("ml-[-100%]");
   }

// bagian klik game
let timer;
let waktuAwal = 10;
let sisaWaktu = waktuAwal;
let skor = document.getElementById("gameCost");

function hasilSkor(){
    skor.innerHTML = parseFloat(skor.innerHTML) + 1;
}

function play() {
    if (timer) return;
    timer = setInterval(() => {
        if (sisaWaktu > 0) {
            sisaWaktu--;
            document.getElementById("timer").innerText = sisaWaktu;
        } else {
            clearInterval(timer);
            // alert("yaahhh waktu habis \n skor anda = " + skor.innerHTML)
            document.getElementById("hasilnya").innerHTML = "yaahhh waktu habis \n skor anda = " + skor.innerHTML;
            saveScore();
        }
    }, 1000);
}

function saveScore() {
    let score = skor.innerHTML;
    const leaderboard = document.getElementById("leaderboard");
    const baris = document.createElement("tr");
    nomor++;
    baris.innerHTML = `
    <td class="border p-2 text-center"> ${nomor} </td>
    <td class="border p-2 text-center">${score}</td>
    `;
    leaderboard.appendChild(baris);
  }

function restart() {
    clearInterval(timer);
    timer = null;
    sisaWaktu = waktuAwal;
    skor.innerHTML = 0;
}
