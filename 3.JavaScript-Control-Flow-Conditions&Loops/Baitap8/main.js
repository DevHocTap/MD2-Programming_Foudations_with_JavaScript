let tong = 0;
let danhSachSo = [];

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    continue;
  }
  if (tong + i > 200) {
    console.log(
      `-> Dừng vòng lặp tại số ${i} vì cộng thêm sẽ vượt quá 200 (Tổng hiện tại: ${tong})`,
    );
    break;
  }
  tong += i;
  danhSachSo.push(i);
}
console.log("Danh sách các số thỏa mãn:", danhSachSo.join(", "));
console.log("Tổng cuối cùng:", tong);
