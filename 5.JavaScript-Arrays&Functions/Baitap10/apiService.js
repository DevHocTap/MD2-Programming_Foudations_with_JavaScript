export async function fetchUsers(){
  const url = "https://jsonplaceholder.typicode.com/users";
  try{
    const response = await fetch(url);
    if(!response.ok){
      throw new Error(`Lỗi không thể kết nối: ${response.status}`);
    } 
    return await response.json();
  } catch (error){
    console.error("Lỗi:", error.message);
    return[];
}}