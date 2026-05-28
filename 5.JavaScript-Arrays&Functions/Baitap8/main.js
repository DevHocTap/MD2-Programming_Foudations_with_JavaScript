function simulateTask(isSuccess = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("Dữ liệu tải thành công");
      } else {
        reject(new Error("Lỗi: không tải được dữ liệu"));
      }
    }, 2000);
  });
}

async function runTask() {
  console.log("Bắt đầu thực hiện ...");

  try {
    const result = await simulateTask(true);
    console.log("kết quả:", result);
  } catch (error) {
    console.error("Lỗi:", error.message);
  }

  try {
    console.log("Thử lại nếu lỗi xảy ra ...");
    const result = await simulateTask(false);
    console.log("kết quả:", result);
  } catch (error) {
    console.error("Lỗi:", error.message);
  }
  console.log("Kết thúc chương trình.");
}
runTask();