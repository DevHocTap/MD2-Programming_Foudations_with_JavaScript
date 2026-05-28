async function getUser() {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    console.log("Đang kết nối ...");
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Lỗi không thể kết nối: ${response.status}`);
    }
    const users = await response.json();
    console.log("Danh sách người dùng:", users);
    users.forEach((user, index) => {
      console.log(`Người dùng ${index + 1}:`, user.name);
    });
  } catch (error) {
    console.error("Lỗi:", error.message);
  }
}

getUser();
