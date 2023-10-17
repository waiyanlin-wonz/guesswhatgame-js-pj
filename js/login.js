const toLoginBtn = document.querySelector("#toLoginBtn");
const toRegBtn = document.querySelector("#toRegBtn");
const register = document.querySelector("#register");
const login = document.querySelector("#login");
const loginNoti=document.querySelector("#loginNoti")

toRegBtn.addEventListener("click", () => {
  register.classList.remove("d-none");
  login.classList.add("d-none");
});

toLoginBtn.addEventListener("click", () => {
  login.classList.remove("d-none");
  register.classList.add("d-none");
});



const formRegister = document.querySelector("#formRegister");
const formLogin = document.querySelector("#formLogin");

formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {
    name: formData.get("loginName"),
    email: formData.get("loginEmail"),
    password: formData.get("loginPassword"),
  };

  localStorage.setItem("Guesswhat-js-page", JSON.stringify(data));
  location.href = "Main-page.html";
});

formLogin.addEventListener("submit", (e) => {
  const storage = JSON.parse(localStorage.getItem("Guesswhat-js-page"));
  e.preventDefault();
  if (
    formLogin.email.value === storage.email &&
    formLogin.password.value === storage.password
  ) {
    location.href = "Main-page.html";
  }else{
    loginNoti.classList.remove("d-none")
  }
});
