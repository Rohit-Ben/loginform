let email = document.querySelector(".email");
let extra = document.querySelector(".extra");
let a = 0,
  b = 0;
email.addEventListener("blur", () => {
  let str = email.value;
  let reg = /^([a-zA-Z0-9]+)@([a-z]{0,5})(\.)([a-z]{3,5})$/;
  if (reg.test(str)) {
    a++;
    console.log(a);
    email.classList.remove("wrong");
    extra.innerHTML = "";
  } else {
    email.classList.add("wrong");
    extra.innerHTML = "Enter Correct Email";
  }
});

let pass = document.querySelector(".pass");
let extrapass = document.querySelector(".extrapass");
pass.addEventListener("blur", () => {
  let str = pass.value;
  let reg = /^([a-zA-Z0-9]{8})$/;
  if (reg.test(str)) {
    b++;
    console.log(b);
    pass.classList.remove("wrong");
    extrapass.innerHTML = "";
  } else {
    pass.classList.add("wrong");
    extrapass.innerHTML = "Enter Correct Password";
  }
});

let log = document.querySelector(".log");
let extralog = document.querySelector(".extralog");
log.addEventListener("click", (e) => {
  e.preventDefault();
  if (a != 1 || b != 1) {
    if (b == 0) {
      pass.classList.add("wrong");
    }
    if (a == 0) {
      email.classList.add("wrong");
    }
    extralog.innerHTML = `Enter Credentials!! ${a} ${b}`;
  } else {
    let container = document.querySelector(".container");
    container.classList.add("logged");
    let text = document.querySelector(".text");
    text.innerHTML = "<h1>Logged In!!!</h1>";
    extralog.innerHTML = "";
    pass.classList.remove("wrong");
    email.classList.add("wrong");
  }
});
