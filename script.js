// PINDAH MENU

function bukaHalaman(nama, tombol) {

    let halaman = document.querySelectorAll(".page");

    halaman.forEach(function(item) {
        item.classList.remove("active");
    });

    document.getElementById(nama).classList.add("active");


    let menu = document.querySelectorAll(".menu");

    menu.forEach(function(item) {
        item.classList.remove("active");
    });

    tombol.classList.add("active");
}


// CEK BIODATA

function cekBiodata() {

    let nis = document.getElementById("inputNis").value;
    let sekolah = document.getElementById("inputSekolah").value;

    if (nis == "" || sekolah == "") {

        alert("Silakan isi NIS dan nama sekolah terlebih dahulu!");

        return;
    }


    // DATA SISWA
    // GANTI SESUAI DATA KAMU

    let nama = "Nama Kamu";
    let kelas = "XI RPL";
    let jurusan = "Rekayasa Perangkat Lunak";


    document.getElementById("namaSiswa").innerText = nama;

    document.getElementById("nisSiswa").innerText = nis;

    document.getElementById("kelasSiswa").innerText = kelas;

    document.getElementById("jurusanSiswa").innerText = jurusan;

    document.getElementById("sekolahSiswa").innerText = sekolah;


    // TAMPILKAN BIODATA

    document.getElementById("hasilBiodata").style.display = "block";
}


// TOMBOL LIHAT NILAI

function lihatNilai() {

    bukaHalaman(
        "nilai",
        document.querySelectorAll(".menu")[2]
    );

}