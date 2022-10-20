console.log("hello world");

let from = document.getElementById("login-from");

from.addEventListener("submit", function (e) {
  e.preventdefault();
  let email = form.email.value;
  let password = form.password.value;
  console.log(email, password);

  let data = {
    email,
    password,
  };
  fetch(api + "auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
