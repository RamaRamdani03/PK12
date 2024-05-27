function KirimData() {
    var name = document.getElementById("nama").value
    var nim = document.getElementById("nim").value
    var peminatan = document.querySelector("input[name=peminatan]:checked").value
    var Alamat = document.getElementById("alamat").value

    alert(
        "Nama : " + name +
        "\nNIM : " + nim +
        "\nPeminatan : " + peminatan +
        "\nAlamat : " + Alamat
    )
}

var tanggalInput = document.getElementById('tanggal');
flatpickr (tanggalInput, {
    enableTime: false,
    dateFormat: 'd-m-y',
});