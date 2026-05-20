const ADMIN_USER = "admin"
const ADMIN_PASSWORD = "admin123"

let username = prompt("Nhập tên đăng nhập: ")
let password = prompt("Nhập mật khẩu: ")

if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
    alert("Đăng nhập thành công")
} else {
    alert("Đăng nhập thất bại")
}