import { fetchUsers } from "./apiService.js";

async function initApp() {
  const userContainer = document.getElementById("user-list");

  const users = await fetchUsers();

  const userCardsHTML = users.map(({ name, email, website }) => {
    return `
            <div class="user-card" style="border: 1px solid #ccc; padding: 15px; margin: 10px; border-radius: 8px; font-family: sans-serif;">
                <h3 style="margin-top: 0; color: #333;">${name}</h3>
                <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 5px 0;"><strong>Website:</strong> <a href="http://${website}" target="_blank">${website}</a></p>
            </div>
        `;
  });

  userContainer.innerHTML = userCardsHTML.join("");
}

document.addEventListener("DOMContentLoaded", initApp);
