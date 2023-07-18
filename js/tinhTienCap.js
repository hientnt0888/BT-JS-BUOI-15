function loaiKhachHang() {
    var KH = document.getElementById("loaiKH").value;
    var soKetNoi = document.getElementById("soKNoi");
    if (KH == 1) {
        soKetNoi.style.visibility = "hidden";
    } else {
        soKetNoi.style.visibility = "visible"
    }
}


