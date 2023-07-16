function tongTienCanNop() {
    var tenNguoiDung = document.getElementById("nguoiDung").value;
    var tongSoKW = document.getElementById("soKW").value;
    var tongTien = 0;
    if (tongSoKW <= 50 && tongSoKW > 0) {
        tongTien = tongSoKW * 500;
        document.getElementById("txtTongTien").innerHTML = "Hộ " + tenNguoiDung + " nôp: " + tongTien + " VND";
    } else if (tongSoKW > 50 && tongSoKW <= 100){
        tongTien = (Number(tongSoKW) - 50) * 650 + 50 * 500;
        document.getElementById("txtTongTien").innerHTML = "Hộ " + tenNguoiDung + " nôp: " + tongTien + " VND";
    } else if (tongSoKW > 100 && tongSoKW <= 200){
        tongTien = (Number(tongSoKW) - 100) * 850 + 50 * 500 + 50 * 650;
        document.getElementById("txtTongTien").innerHTML = "Hộ " + tenNguoiDung + " nôp: " + tongTien + " VND";
    }  else if (tongSoKW > 200 && tongSoKW <= 350){
        tongTien = (Number(tongSoKW) - 200) * 1100 + 50 * 500 + 50 * 650 + 100 * 850;
        document.getElementById("txtTongTien").innerHTML = "Hộ " + tenNguoiDung + " nôp: " + tongTien + " VND";
    }   else if (tongSoKW > 350){
        tongTien = (Number(tongSoKW) - 350) * 1300 + 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100;
        document.getElementById("txtTongTien").innerHTML = "Hộ " + tenNguoiDung + " nôp: " + tongTien + " VND";
    } else{
        document.getElementById("txtTongTien").innerHTML = "Thông tin nhập sai, vui lòng nhập lại chính xác!!";
    }
}
document.getElementById("btnTongTien").onclick = tongTienCanNop;

