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
function cekAngka(){
    if (angkaMu.value<0){
        alert("angkamu diluar range")
    } else if (angkaMu.value>100){
        alert("angkamu diluar range")
    }
    percobaan++;
    if (angkaMu.value == acakAngka){
        alert("angkanya sama")
    } else if (angkaMu.value > acakAngka){
        alert("angkanya sama")
    } else if (angkaMu.value > acakAngka){
        alert("angka mu besar")
    } else {
        alert("angka mu kecil")
    }
    if (percobaan == maks){
        alert("gagal cuy angka yang benar itu = " + acakAngka)
    }
}
if (percobaan == maks){
    alert(`gagal cuyy angka yang benar itu = ${acakAngka}`)
}