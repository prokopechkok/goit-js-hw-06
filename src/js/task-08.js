const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;

  const inputEmail = form.elements.email.value;
  const inputPassword = form.elements.password.value;

  if (inputEmail === "" || inputPassword === "") {
    alert("Please fill in all the fields!");
  } else {
    const data = {
      email: inputEmail,
      password: inputPassword,
    };
    console.log(data);
    form.reset();
  }
}
