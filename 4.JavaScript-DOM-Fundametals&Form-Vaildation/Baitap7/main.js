const registerForm = document.getElementById("register");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usernameValue = document.getElementById("username").value;
  const emailValue = document.getElementById("email").value;

  const formData = {
    username: usernameValue,
    email: emailValue,
  };

  console.log("Dữ liệu Form thu thập được:", formData);
  alert(`Đăng ký thành công tài khoản ${formData.username}`);
});
