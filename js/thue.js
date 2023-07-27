
function thue() {

    var tongThuNhap = parseFloat(document.getElementById("thuNhapNam").value);
    var nguoiPhuThuoc = document.getElementById("phuThuoc").value;
    var nguoiNop = document.getElementById("nguoiNopThue").value;

    document.getElementById("txtSoTien").innerHTML = "Số tiền bạn đã nhập là: " + tongThuNhap.toLocaleString() + " VND";

    var ii = thuNhapTinhThue(tongThuNhap, nguoiPhuThuoc);
    mucThue(ii);

    document.getElementById("txtThue").innerHTML = nguoiNop + " cần nộp " + mucThue(ii).toLocaleString() + " VND tiền thuế thu nhập cá nhân";
}
document.getElementById("btnThue").onclick = thue;

function thuNhapTinhThue(thuNhap, soNguoi) {
    var thuNhapChiuThue = (Number(thuNhap) - Number(soNguoi) * 1600000 - 4000000);
    return thuNhapChiuThue;
}

function mucThue(thuNhapCT) {
    var tienThue = 0;
    if (thuNhapCT <= 60000000 && thuNhapCT > 0) {
        tienThue = thuNhapCT * 5 / 100;
    } else if (thuNhapCT <= 120000000 && thuNhapCT > 60000000) {
        tienThue = thuNhapCT * 10 / 100;
    } else if (thuNhapCT <= 210000000 && thuNhapCT > 120000000) {
        tienThue = thuNhapCT * 15 / 100;
    } else if (thuNhapCT <= 384000000 && thuNhapCT > 210000000) {
        tienThue = thuNhapCT * 20 / 100;
    } else if (thuNhapCT <= 624000000 && thuNhapCT > 384000000) {
        tienThue = thuNhapCT * 25 / 100;
    } else if (thuNhapCT <= 960000000 && thuNhapCT > 624000000) {
        tienThue = thuNhapCT * 30 / 100;
    } else if (thuNhapCT > 960000000) {
        tienThue = thuNhapCT * 35 / 100;
    } else {
        alert("Nhập sai rồi!");
    }
    return tienThue;
}

