const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const clickedButton = event.target;
    const targetLi = clickedButton.parentElement;
    targetLi.remove();
    console.log(
      "Đã xóa phần tử:",
      targetLi.textContent.replace("Xóa", "").trim(),
    );
  });
});
