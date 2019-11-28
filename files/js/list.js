// массив с заявками
const applications = [
  { "applicant": "Петров", "tel_applicant": "+7 916 940 00 00", "mail_applicant": "ss@mail.ru", "where_from": "Москва, Шмитовский проезд, 4", "where": "Долгопрудный, Лукьянова, 5", 
  "recipient": "Анжела Петренко", "tel_recipient": "+7 910 770 00 00", "date": "27.11.2019", "time": "c 10 до 12",
  "comment": "предварительно позвонить за 30 мин" },
  { "applicant": "Иванов", "tel_applicant": "+7 916 940 00 00", "mail_applicant": "anton@mail.ru", "where_from": "Москва, Ивановский проезд, 44", "where": "Москва, Пятницкое шоссе, 66", 
  "recipient": "Кристина Вудина", "tel_recipient": "+7 910 770 00 00", "date": "27.11.2019", "time": "c 10 до 12",
  "comment": "предварительно позвонить за 30 мин обязательно, очень важно и срочно!!предварительно позвонить за 30 мин обязательно, очень важно и срочно!!!!" },
  { "applicant": "Сидоров", "tel_applicant": "+7 916 940 00 00", "mail_applicant": "sergey@mail.ru", "where_from": "Москва, площадь Курчатова, 19", "where": "Химки, ул. Долгорукова, 13", 
  "recipient": "Валентина Татар", "tel_recipient": "+7 910 770 00 00", "date": "27.11.2019", "time": "c 10 до 12",
  "comment": "" },
];


// переменные глобальной видимости
const tbody = document.querySelector(".tbody");
const phrase = document.querySelector('.clr-input');


// функции
// фунция поиска по таблице
function tableSearch() {
    const table = document.querySelector('.table');
    const regPhrase = new RegExp(phrase.value, 'i');
    let flag = false;
    for (let i = 1; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } 
        else {
            table.rows[i].style.display = "none";
        }
    }
}

// функция, отрисовывающая строки таблицы
function render() {
    for (let k = 0; k < applications.length; k++) {
        tbody.innerHTML += `
    <tr>
        <th>${applications[k].applicant}</th>
        <th>${applications[k].tel_applicant}</th>
        <th>${applications[k].mail_applicant}</th>
        <th>${applications[k].where_from}</th>
        <th>${applications[k].where}</th>
        <th>${applications[k].recipient}</th>
        <th>${applications[k].tel_recipient}</th>
        <th>${applications[k].date}</th>
        <th>${applications[k].time}</th>
        <th>${applications[k].comment}</th>
        <th><select id="select-basic" class="clr-select">
            <option value="1">Мелков</option>
            <option value="2">Сидорчук</option>
            <option value="3">Пятерочкин</option>
        </select></th>
        <th><select id="select-basic" class="clr-select">
            <option value="1">запланировано</option>
            <option value="2">принято к исполнению</option>
            <option value="3">выполнено</option>
            <option value="4">отменено</option>
            <option value="5">требует уточнения</option>
        </select></th>
    </tr>`
    }
}

// вызов функции, чтобы при загрузке страницы были видны все заявки
render();

// слушатели
// запускаем функцию поиска при инпуте
phrase.addEventListener("input", tableSearch)