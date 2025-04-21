// const nama = document.getElementById("nama");
// const pass = document.getElementById("pass");

// // function pesan(){
// //     alert("selamat datang " + nama.value);
// // }
function login() {
    const nama = document.getElementById("nama").value;
    const pass = document.getElementById("pass").value;
    if (nama === pass){
        window.location.href = "/milestone-2-donyputraperkasa/afterLogin/index.html";
        alert("selamat datang " + username);
    } else if (nama === "" || pass === "") {
        alert("username atau password tidak boleh kosong");
    } else if (nama !== pass) {
        alert("username dan password berbeda");
    }
}

function reset() {
    document.getElementById("nama").value = "";
    document.getElementById("pass").value = "";
}
