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
    if (timer) return; // Hindari duplikasi interval
    timer = setInterval(() => {
        if (sisaWaktu > 0) {
            sisaWaktu--;
            document.getElementById("timer").innerText = sisaWaktu;
        } else {
            clearInterval(timer);
            alert("waktu habis \n skor anda = " + skor.innerHTML)
        }
    }, 1000);
}

function restart() {
    clearInterval(timer);
    timer = null;
    sisaWaktu = waktuAwal;
    skor.innerHTML = 0;
}