function thue() {

    var tongThuNhap = parseFloat(document.getElementById("thuNhapNam").value);
    var nguoiPhuThuoc = document.getElementById("phuThuoc").value;

    document.getElementById("txtSoTien").innerHTML = "Số tiền bạn đã nhập là: " + tongThuNhap.toLocaleString() + " VND" ;

    thuNhapTinhThue(tongThuNhap, nguoiPhuThuoc);
}
document.getElementById("btnThue").onclick = thue;

function thuNhapTinhThue(thuNhap, soNguoi) {
    thuNhapChiuThue = (Number(thuNhap) - Number(soNguoi) * 1600000 - 4000000);

    thueSuat(thuNhapChiuThue);
}

function thueSuat (tien){
    var nguoiNop = document.getElementById("nguoiNopThue").value;
    var tienThue = 0;

    if (tien <= 60000000 && tien > 0) {
        tienThue = tien * 5/100 
        document.getElementById("txtThue").innerHTML = nguoiNop + " cần nộp " + tienThue.toLocaleString() + " VND tiền thuế thu nhập cá nhân"
    } else if (tien > 60000000 && tien <=120000000) {
        tienThue = (tien - 60000000) * 10/100 + 3000000;
        document.getElementById("txtThue").innerHTML = nguoiNop + " cần nộp " + tienThue.toLocaleString() + " VND tiền thuế thu nhập cá nhân"
    } else if (tien > 120000000 && tien <=210000000) {
        tienThue = (tien - 120000000) * 15/100 + 9000000;
        document.getElementById("txtThue").innerHTML = nguoiNop + " cần nộp " + tienThue.toLocaleString() + " VND tiền thuế thu nhập cá nhân"
    } else if (tien > 210000000 && tien <=384000000) {
        tienThue = (tien - 210000000) * 20/100 + 22500000;
        document.getElementById("txtThue").innerHTML = nguoiNop + " cần nộp " + tienThue.toLocaleString() + " VND tiền thuế thu nhập cá nhân"
    } else if (tien > 384000000 && tien <=624000000) {
        tienThue = (tien - 384000000) * 25/100 + 57300000;
        document.getElementById("txtThue").innerHTML = nguoiNop + " cần nộp " + tienThue.toLocaleString() + " VND tiền thuế thu nhập cá nhân"
    } else if (tien > 624000000 && tien <=960000000) {
        tienThue = (tien - 624000000) * 30/100 + 117300000;
        document.getElementById("txtThue").innerHTML = nguoiNop + " cần nộp " + tienThue.toLocaleString() + " VND tiền thuế thu nhập cá nhân"
    } else if (tien > 960000000) {
        tienThue = (tien - 960000000) * 35/100 + 117300000 + 100800000;
        document.getElementById("txtThue").innerHTML = nguoiNop + " cần nộp " + tienThue.toLocaleString() + " VND tiền thuế thu nhập cá nhân"
    } else {
        document.getElementById("txtThue").innerHTML = "Bạn không cần phải đóng thuế"

    }

}