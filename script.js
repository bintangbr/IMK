// Contoh fitur cek cakupan area
function checkCoverage() {
    const location = prompt("Masukkan alamat atau kode pos:");
    if (location) {
        alert("Area tersedia untuk layanan ISPConnect!");
    } else {
        alert("Mohon masukkan lokasi yang valid.");
    }
}
