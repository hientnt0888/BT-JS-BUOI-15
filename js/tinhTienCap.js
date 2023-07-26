function anSoKetNoi() {
    var KH = document.getElementById("loaiKH").value;
    var soKetNoi = document.getElementById("soKNoi");
    if (KH == 1) {
        soKetNoi.style.visibility = "hidden";
    } else {
        soKetNoi.style.visibility = "visible"
    }
}


function tinhTienCap() {
    var maKhachHang = document.getElementById("maKH").value;
    var loaiKhachHang = document.getElementById("loaiKH").value;
    var soKetNoi = document.getElementById("soKNoi").value;
    var soKenhCC = document.getElementById("kenhCCap").value;

    var tienDan = tienCapDan(soKenhCC);
    var tienDN = tienCapDN(soKenhCC, soKetNoi);
    phanLoaiKhachHang(loaiKhachHang, maKhachHang, tienDan, tienDN)
}
document.getElementById("btnTienCap").onclick = tinhTienCap;

function tienCapDan(soKenhh) {
    tienDan = soKenhh * 7.5 + 25;

    return tienDan;
}

function tienCapDN(soKenh, soKN) {
    console.log("first", soKenh)
    tienDN = 0
    if (soKN <= 10 && soKenh > 0) {
        tienDN = soKenh *50 + 15 + 7.5 * soKN;
    } else {
        tienDN = soKenh * 50 + 90 + (soKN - 10)* 5;
    }
    return tienDN;
}

function phanLoaiKhachHang(loai, maSo, tienCDan, tienCDN) {
    var tongTienCap = 0;
    loai == 1 ? tongTienCap = tienCDan : tongTienCap = tienCDN;

    document.getElementById("txtTienCap").innerHTML = "Mã số khách hàng: " + maSo + "<br> Tiền cáp: " + tongTienCap + " $"
}