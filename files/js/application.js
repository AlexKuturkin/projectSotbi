// переменные
// блок переменных заявителя
const divApplicant = document.querySelector(".clr-control-container_applicant");
const inputApplicant = document.querySelector(".clr-input_applicant");
const spanApplicant = document.querySelector(".clr-subtext_applicant");

// блок переменных телефон заявителя
const divTelApplicant = document.querySelector(
  ".clr-control-container_tel_applicant"
);
const inputTelApplicant = document.querySelector(".clr-input_tel_applicant");
const spanTelApplicant = document.querySelector(".clr-subtext_tel_applicant");

// блок переменных почта заявителя
const divMailApplicant = document.querySelector(
  ".clr-control-container_mail_applicant"
);
const inputMailApplicant = document.querySelector(".clr-input_mail_applicant");
const spanMailApplicant = document.querySelector(".clr-subtext_mail_applicant");

// блок переменных откуда
const divWhereFrom = document.querySelector(
  ".clr-control-container_where_from"
);
const inputWhereFrom = document.querySelector(".clr-input_where_from");
const spanWhereFrom = document.querySelector(".clr-subtext_where_from");

// блок переменных куда
const divWhere = document.querySelector(".clr-control-container_where");
const inputWhere = document.querySelector(".clr-input_where");
const spanWhere = document.querySelector(".clr-subtext_where");

// блок переменных получателя
const divRecipient = document.querySelector(".clr-control-container_recipient");
const inputRecipient = document.querySelector(".clr-input_recipient");
const spanRecipient = document.querySelector(".clr-subtext_recipient");

// блок переменных телефон получателя
const divTelRecipient = document.querySelector(
  ".clr-control-container_tel_recipient"
);
const inputTelRecipient = document.querySelector(".clr-input_tel_recipient");
const spanTelRecipient = document.querySelector(".clr-subtext_tel_recipient");

// блок переменных дата
const divDate = document.querySelector(".clr-control-container_date");
const inputDate = document.querySelector(".clr-input_date");
const spanDate = document.querySelector(".clr-subtext_date");

// блок переменных время
const divTime = document.querySelector(".clr-control-container_time");
const inputTime = document.querySelector(".clr-input_time");
const spanTime = document.querySelector(".clr-subtext_time");

// блок переменных комментарий
const divСomment = document.querySelector(".clr-control-container_comment");
const inputСomment = document.querySelector(".clr-input_comment");
const spanСomment = document.querySelector(".clr-subtext_comment");

const buttonSend = document.querySelector(".btn-success");

// функции
// функция валидации полей без телефона
function validateField(input, div, span) {
  if (input.value.length >= 5) {
    div.classList.remove("clr-error");
    span.textContent = "";
  } else {
    div.classList.add("clr-error");
    span.textContent = "Обязательное поле. Введите, пожалуйста, от 5 символов";
  }
  validateButtonSend();
}

// функция валидации полей с телефонами
function validateTel(input, div, span) {
  if (input.value.match(input.pattern)) {
    div.classList.remove("clr-error");
    span.textContent = "";
  } else {
    div.classList.add("clr-error");
    span.textContent = "Телефон в формате: +7 (123) 456-78-90";
  }
  validateButtonSend();
}

// функция валидации почты
function validateEmail(input, div, span) {
  if (input.value.match(input.pattern)) {
    div.classList.remove("clr-error");
    span.textContent = "";
  } else {
    div.classList.add("clr-error");
    span.textContent = "e-mail в формате: sega@yandex.ru";
  }
  validateButtonSend();
}

// функция активации-дезактивации кпопки "Отправить"
function validateButtonSend() {
  if (
    divApplicant.classList.contains("clr-error") == false &&
    divTelApplicant.classList.contains("clr-error") == false &&
    divMailApplicant.classList.contains("clr-error") == false &&
    divWhereFrom.classList.contains("clr-error") == false &&
    divWhere.classList.contains("clr-error") == false &&
    divRecipient.classList.contains("clr-error") == false &&
    divTelRecipient.classList.contains("clr-error") == false &&
    divDate.classList.contains("clr-error") == false &&
    divTime.classList.contains("clr-error") == false &&
    divСomment.classList.contains("clr-error") == false
  ) {
    buttonSend.removeAttribute("disabled");
  } else {
    buttonSend.setAttribute("disabled", "disabled");
  }
}

// слушатели
// слушатель на заявителя
inputApplicant.addEventListener("input", function() {
  validateField(inputApplicant, divApplicant, spanApplicant);
});

// слушатель на телефон заявителя
inputTelApplicant.addEventListener("input", function() {
  validateTel(inputTelApplicant, divTelApplicant, spanTelApplicant);
});

// слушатель на почту заявителя
inputMailApplicant.addEventListener("input", function() {
  validateEmail(inputMailApplicant, divMailApplicant, spanMailApplicant);
});

// слушатель на откуда
inputWhereFrom.addEventListener("input", function() {
  validateField(inputWhereFrom, divWhereFrom, spanWhereFrom);
});

// слушатель на куда
inputWhere.addEventListener("input", function() {
  validateField(inputWhere, divWhere, spanWhere);
});

// слушатель на получателя
inputRecipient.addEventListener("input", function() {
  validateField(inputRecipient, divRecipient, spanRecipient);
});

// слушатель на телефон получателя
inputTelRecipient.addEventListener("input", function() {
  validateTel(inputTelRecipient, divTelRecipient, spanTelRecipient);
});

// слушатель на дату
inputDate.addEventListener("input", function() {
  validateField(inputDate, divDate, spanDate);
});

// слушатель на время
inputTime.addEventListener("input", function() {
  validateField(inputTime, divTime, spanTime);
});

// слушатель на комментарий
inputСomment.addEventListener("input", function() {
  validateField(inputСomment, divСomment, spanСomment);
});
