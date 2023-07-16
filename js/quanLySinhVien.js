
function diemThi() {
    var diemThiMon1 = document.getElementById("diemMon1").value;
    var diemThiMon2 = document.getElementById("diemMon2").value;
    var diemThiMon3 = document.getElementById("diemMon3").value;

    diemCong3Mon(diemThiMon1, diemThiMon2, diemThiMon3);
}
document.getElementById("btnKetQua").onclick = diemThi;

function diemCong3Mon(mon1, mon2, mon3) {
    var tong3Mon = (Number(mon1) + Number(mon2) + Number(mon3));
    doiTuong(tong3Mon);
}

function doiTuong(diemCongDT) {
    var doiTuongSV = document.getElementById("doiTuong").value;
    if (doiTuongSV == 2.5) {
        diemCongDT = diemCongDT + 2.5;
    } else if (doiTuongSV == 1.5) {
        diemCongDT = diemCongDT + 1.5;
    } else if (doiTuongSV == 1) {
        diemCongDT = diemCongDT + 1;

    } else {
        diemCongDT = diemCongDT;

    }
    khuVuc(diemCongDT);
}

function khuVuc(diemCongKV) {
    var khuVucSV = document.getElementById("khuVuc").value;
    if (khuVucSV == 2) {
        diemCongKV = diemCongKV + 2;
    } else if (khuVucSV == 1) {
        diemCongKV = diemCongKV + 1;
    } else if (khuVucSV == 0.5) {
        diemCongKV = diemCongKV + 0.5;
    } else {
        diemCongKV = diemCongKV;
    }

    ketQua(diemCongKV)
}

function ketQua(diemTong) {

    var diemChuan = document.getElementById("diemChuanTruong").value;
    if (diemTong >= diemChuan) {
        document.getElementById("txtKetQua").innerHTML = "Thông báo: Đỗ"
    } else {
        document.getElementById("txtKetQua").innerHTML = "Thông báo: Không đỗ"
    }
}   
