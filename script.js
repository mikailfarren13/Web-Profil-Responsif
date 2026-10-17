// Mengambil elemen dengan querySelector()
const deskripsi = document.querySelector('#profile-description');
const tombolUbahTeks = document.querySelector('#change-text');
const tombolTema = document.querySelector('#theme-toggle');

// Simpan teks awal dan teks pengganti
const teksAwal = deskripsi.textContent;
const teksBaru = 'Saat ini saya belajar HTML, CSS, dan JavaScript. Target saya adalah bisa membuat website responsif dengan interaksi sederhana.';
let teksSudahBerubah = false;

// Tombol Ubah Teks: mengganti isi deskripsi (klik lagi untuk kembali)
tombolUbahTeks.addEventListener('click', () => {
    if (teksSudahBerubah) {
        deskripsi.textContent = teksAwal;
    } else {
        deskripsi.textContent = teksBaru;
    }
    teksSudahBerubah = !teksSudahBerubah;
});

// Tombol Ganti Tema: menambah/menghapus class dark-mode pada body
tombolTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});