const a = document.querySelector(".clr-control-container_1");
const b = document.querySelector(".clr-input_1");
const c = document.querySelector(".clr-subtext_1");


function validate() {
  if (b.value == b.pattern) {
    a.classList.remove("clr-error");
    c.textContent = "";
  } else {
    a.classList.add("clr-error");
    c.textContent = "Ошибка";
  }
}

b.addEventListener("input", validate);
