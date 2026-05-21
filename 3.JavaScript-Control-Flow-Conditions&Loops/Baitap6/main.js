let w = parseInt(prompt("Nhập chiều rộng (w):"));
let h = parseInt(prompt("Nhập chiều cao (h):"));

let rectangle = ""; 

for (let i = 0; i < h; i++) {
  let row = "";
  for (let j = 0; j < w; j++) {
    row += "* ";
  }
  rectangle += row + "\n";
}
console.log(rectangle);