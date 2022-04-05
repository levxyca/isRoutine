let user = document.getElementById("user");
let enter = document.getElementById("enter");

function store() {
  localStorage.setItem("user", user.value);
}

function check() {
  let storedName = localStorage.getItem("user");
  if (window.location.pathname == "/index.html") {
    if (storedName) window.location.href = "app.html";
  } else if (!storedName) {
    window.location.href = "index.html";
  }
}

enter.addEventListener("click", () => {
  store();
  check();
});

window.onload = check();
