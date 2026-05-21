let luong = prompt ("Nhập mức lương của bạn:");
let tuoi = prompt("Nhập tuổi của bạn:");
let noXau = prompt("Bạn có nợ xấu không? (Yes/No):");

if (
  luong > 15000000 &&
  tuoi >= 18 &&
  tuoi <= 60 &&
  noXau.toLowerCase() === "no"
) {
  alert("Chúc mừng! Bạn đủ điều kiện vay vốn.");
} else {
  alert("Rất tiếc! Bạn không đủ điều kiện vay vốn.");
}
