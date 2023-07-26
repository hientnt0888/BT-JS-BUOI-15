function anSoKetNoi() {
    var KH = document.getElementById("loaiKH").value;
    var soKetNoi = document.getElementById("soKNoi");
    var lb = document.getElementById("lbKetNoi");

    if (KH == 2) {
        soKetNoi.style.display = "block";
        lb.style.display = "block"
    } else {
        soKetNoi.style.display = "none"
        lb.style.display = "none"
    }
}


function tinhTienCap() {
    var maKhachHang = document.getElementById("maKH").value;
    var loaiKhachHang = document.getElementById("loaiKH").value;
    var soKetNoi = document.getElementById("soKNoi").value;
    var soKenhCC = document.getElementById("kenhCCap").value;

    if (loaiKhachHang == 1) {
        var tienCap = tienCapDan(soKenhCC);
        document.getElementById("txtTienCap").innerHTML = "Mã số khách hàng: " + maKhachHang + "<br> Tiền cáp: " + tienCap + " $"
    } else if (loaiKhachHang == 2) {
        var tienCap = tienCapDN(soKenhCC, soKetNoi);
        document.getElementById("txtTienCap").innerHTML = "Mã số khách hàng: " + maKhachHang + "<br> Tiền cáp: " + tienCap + " $"
    } else {
        document.getElementById("txtTienCap").innerHTML = "Vui lòng chọn loại khách hàng"
    }
}
document.getElementById("btnTienCap").onclick = tinhTienCap;

function tienCapDan(soKenhh) {
    var tienDan = soKenhh * 7.5 + 25;

    return tienDan;
}

function tienCapDN(soKenh, soKN) {
    var tienDN = 0
    if (soKN <= 10 && soKN > 0) {
        tienDN = soKenh * 50 + 15 + 7.5 * soKN;
      } else {
        tienDN = soKenh * 50 + 90 + (soKN - 10) * 5;
    }
    return tienDN;
}
