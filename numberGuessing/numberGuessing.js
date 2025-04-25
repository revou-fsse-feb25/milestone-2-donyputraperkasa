// bagian sidebar
function openSidebar() {
    document.getElementById("sidebar").classList.remove("ml-[-100%]");
   }

   function closeSidebar() {
    document.getElementById("sidebar").classList.add("ml-[-100%]");
   }

// bagian tebak angka
// inspirasi = https://www.youtube.com/watch?v=z5RfdZzgL6I
let acakAngka = Math.floor(Math.random()*101);
// document.getElementById("angkaKomp").textContent = acakAngka;
// bagian hasilnya
const maks = 5;
let percobaan = 0;
let angkaMu = document.getElementById("angkaMu");
let kesempatan = 5;
let hasil="";
function cekAngka(){
    if (kesempatan > 0){
        kesempatan--;
        document.getElementById("sisaPercobaan").textContent = "sisa percobaan : " + kesempatan;
    } else if (kesempatan == 0){
        document.getElementById("hasilnya").textContent = "gagal cuyy angka yang benar itu = " + acakAngka;
    }
    
    if (angkaMu.value < 0 || angkaMu.value > 100){
        alert("angkamu diluar range")
    }

    percobaan++;
    if (angkaMu.value == acakAngka){
        hasil = "angka mu sama"
    } else if (angkaMu.value > acakAngka){
        hasil = "angka mu besar"
    } else if (angkaMu.value < acakAngka){
        hasil = "angka mu kecil"
    }
    document.getElementById("note").textContent = "petunjuk : " + hasil;
}
// if (percobaan == maks){
//     // alert(`gagal cuyy angka yang benar itu = ${acakAngka}`)
//     document.getElementById("hasilnya").textContent = "gagal cuyy angka yang benar itu = " + acakAngka;
// }