let chuyenCan = parseFloat(prompt("Nhập số chuyên cần: "))
let diemTrungBinh = parseFloat(prompt("Nhập điểm trung bình: "))
let coGiayPhep = confirm("Bạn có giấy phép không?")

if ((chuyenCan >80 && diemTrungBinh >=5) || coGiayPhep) {
    console.log("Bạn được tham gia thi")
} else {
    console.log("Bạn không được tham gia thi")
}