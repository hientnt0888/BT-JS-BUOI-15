const kw50 = 50
const kw100 = 100
const kw200 = 200
const kw350 = 350

function tongTienCanNop() {
    var tenNguoiDung = document.getElementById("nguoiDung").value;
    var tongSoKW = document.getElementById("soKW").value;
    var tienCanNop = 0
    if (tongSoKW > 0 && tongSoKW <= kw50) {
        tienCanNop = tien50KWDau(tongSoKW)
    } else if (tongSoKW > kw50 && tongSoKW <= kw100) {
        tienCanNop = tien50KWKe(tongSoKW, tien50KWDau(kw50))
    } else if (tongSoKW > kw100 && tongSoKW <= kw200) {
        tienCanNop = tien100KWKe(tongSoKW, tien50KWKe(kw100, tien50KWDau(kw50)))
    } else if (tongSoKW > kw200 && tongSoKW <= kw350) {
        tienCanNop = tien150KWKe(tongSoKW, tien100KWKe(kw200, tien50KWKe(kw100, tien50KWDau(kw50))))
    } else if (tongSoKW > kw350) {
        tienCanNop = tienKWKhac(tongSoKW, tien150KWKe(kw350, tien100KWKe(kw200, tien50KWKe(kw100, tien50KWDau(kw50)))))
    }

    document.getElementById("txtTongTien").innerHTML = "Hộ " + tenNguoiDung + " nôp: " + tienCanNop.toLocaleString() + " VND";
}
document.getElementById("btnTongTien").onclick = tongTienCanNop;

function tien50KWDau(tongKW) {
    var tongTienDien = tongKW * 500
    return tongTienDien
}
function tien50KWKe(tongKW, tien50KW) {
    var tongTienDien = (Number(tongKW) - 50) * 650 + Number(tien50KW)
    return tongTienDien
}
function tien100KWKe(tongKW, tien100KW) {
    var tongTienDien = (Number(tongKW) - 100) * 850 + Number(tien100KW)
    return tongTienDien
}
function tien150KWKe(tongKW, tien200KW) {
    console.log("🚀 ~ file: demo.js:38 ~ tien150KWKe ~ tongKW:", tongKW)
    var tongTienDien = (Number(tongKW) - 200) * 1100 + Number(tien200KW)
    return tongTienDien
}
function tienKWKhac(tongKW, tien350KW) {
    console.log("🚀 ~ file: demo.js:43 ~ tienKWKhac ~ tongKW:", tongKW)
    var tongTienDien = (Number(tongKW) - 350) * 1300 + Number(tien350KW)
    return tongTienDien
}