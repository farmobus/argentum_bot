console.log("Приветствую Вас от лица разработчика! Сюда я буду писать разные сообщения и логи. Они могут пригодится");
var style_links = ["css/l_style.css", "css/d_style.css", "css/v_style.css"]; // набор ссылок на стили
var style_links_m = ["css/l_style_m.css", "css/d_style_m.css", "css/v_style_m.css"]; // и мобильные
var user_name = localStorage["user_name"];
var visits = eval(localStorage["visits"]);
var command_symbol = "!"; // нужен для определения комманды
var is_greeting_was = false;
var is_farewell_was = false;
var answers = {
    "user": ["Воспользовалсь скрытой функцией? :)", "Вот, что я о вас знаю:", "Знаю я о Вас не много, но кое что"],
    "help": ["Вот вам инструкция к командам: ", "Справочный материал по командам: ", "Помощь по командам: "],
    "help_any": ["Конечно помогу. ", "Помогу Вам с удовольствием. ", "Постараюсь помочь. "],
    "hello": ["Приветствую Вас, " + localStorage["user_name"], "Доброго времени суток. ", "Здравствуйте, " + localStorage["user_name"]],
    "goodbye": ["До встречи. ", "Буду ждать Вас. ", "Буду рад видеть Вас снова. "],
    "thx": ["Всегда пожалуйста!. ", "Рад Вам помочь. ", "Пожалуйста. "],
    "calculate": ['Используйте команду "!calc" И напишите математическое выражение. Я его посчитаю. '],
    "calculate_res": ["Решено! Будет ", "Ответ: ", "Легко. Это будет "],
    "accept": ["Принял. ", "Ок. "]
};

var dialog = document.querySelector("div.dialog");

// кастомизация чата
var chat_theme = localStorage["chat_theme"];
setTheme(chat_theme);

// ud
visits += 1;
localStorage["visits"] = visits;
log("посещения: " + visits);

// вызывается пользователем при отправке сообщения из скрипта send_message
function answer(empty_dialog, message_counter) {
    var for_answer = document.getElementById("saver").textContent;
    if (
        for_answer.toLowerCase().includes("привет") | 
        for_answer.toLowerCase().includes("здравствуй")
    ) { if (!is_greeting_was) {createNewMessageDiv(buildAnswer("hello")); is_greeting_was = true;} else {createNewMessageDiv("Здоровались уже.")}}
    else if (
        for_answer.toLowerCase().includes("пока") |
        for_answer.toLowerCase().includes("свидания") |
        for_answer.toLowerCase().includes("встречи")
    ) { if (!is_farewell_was) {createNewMessageDiv(buildAnswer("goodbye")); is_farewell_was = true;} else {createNewMessageDiv("Да идите уже :)")}}
    else if (
        for_answer.toLowerCase().includes("пасиб") |
        for_answer.toLowerCase().includes("благодар")
    ) {createNewMessageDiv(buildAnswer("thx"));}
    else if (
        for_answer.toLowerCase().includes(command_symbol + "help")
    ) {helpInfo();}
    else if (
        for_answer.toLowerCase().includes(command_symbol + "user")
    ) {userInfo();}
    else if (
        for_answer.toLowerCase().includes(command_symbol + "clear")
    ) {dialog.innerHTML = ""; empty_dialog.innerHTML = 'Тут тихо. Вы можете написать боту сообщение. Для помощи - "!help"';
       dialog.appendChild(empty_dialog); log("проведена очистка чата");}
    else if (
        for_answer.toLowerCase().includes(command_symbol + "reset")
    ) {dialog.innerHTML = ""; empty_dialog.innerHTML = 'Тут тихо. Вы можете написать боту сообщение. Для помощи - "!help"';
       dialog.appendChild(empty_dialog); localStorage["visits"] = 1; localStorage["user_name"] = "пользователь"; messages_counter = 0; log("прогресс сброшен", "warn");}
    else if (
        for_answer.toLowerCase().includes(command_symbol + "name")
    ) {createNewMessageDiv(buildAnswer("accept")); setParam("Ваше имя: ", "user_name", for_answer.substring(6));}
    else if (
        for_answer.toLowerCase().includes(command_symbol + "theme")
    ) {setTheme(for_answer.substring(7));}
    else if (
        for_answer.toLowerCase().includes(command_symbol + "calc")
    ) {createNewMessageDiv(calculate(for_answer.substring(6)));}
    else if (
        for_answer.toLowerCase().includes("+") | 
        for_answer.toLowerCase().includes("-") | 
        for_answer.toLowerCase().includes("*") | 
        for_answer.toLowerCase().includes("**") |
        for_answer.toLowerCase().includes("/") |
        for_answer.toLowerCase().includes("%") |
        for_answer.toLowerCase().includes("посчита")
    ) {createNewMessageDiv(buildAnswer("calculate"));}
    
    else{createNewMessageDiv("Не понимаю это " + '"' + for_answer + '"'); log("непредвиденное сообщение '" + for_answer + "'", "warn");}
}

// создает сообщение-ответ
function createNewMessageDiv(message){
    dialog = document.querySelector("div.dialog");
    var new_answer = document.createElement("div");
    new_answer.className = "new_answer";
    new_answer.innerHTML = message; 
    dialog.appendChild(new_answer);
}

// отчитывается в консоли
function log(message = "None", status = "log"){
    if (status == "log") {console.log(message);}
    if (status == "warn") {console.warn(message);}
    if (status == "err") {console.error(message);}
}

// занимается обычными ответами
function buildAnswer(theme){
    log("ответ стандартного вида по теме '" + theme + "'");
    rand = answers[theme][Math.floor(Math.random() * answers[theme].length)];
    return rand;
}

// только считает
function calculate(math_str){
    try {
        eval_math_str = eval(math_str);
        rand = answers["calculate_res"][Math.floor(Math.random() * answers["calculate_res"].length)] + String(eval_math_str);
        log("посчитано выражение: " + math_str + "; получен результат: " + eval_math_str);
        return rand;
    }
    catch (ReferenceError) {
        log("'" + math_str + "' не может быть посчитано!", "err");
        return "Сомневаюсь, что это можно посчитать.";
    }
}

// помощь по дополнительным функциям
function helpInfo(){
    log("запрошена помощь по командам")
    return (createNewMessageDiv(buildAnswer("help") + "<br>!help - вызывает это окно<br>!name <аргумент: ваше имя> - я буду вас так называть<br>!theme <аргумент: тема> - тема чата может быть light/dark/violet<br>!calc <аргумнт: матем. выражение> - использование математики для подсчетов<br>!clear - удаляет переписку"));
}

// информация о пользователе
function userInfo(){
    log("запрошена информация о пользователе")
    return (createNewMessageDiv(buildAnswer("user") + "<br>Ваше имя: " + localStorage["user_name"] + "<br>Вы заходили в чат: " + localStorage["visits"] + " раз<br>Вы отправили " + localStorage["messages_counter"] + " сообщений"));
}

// делает параметр param равным значению value
function setParam(message, param, value){
    log("параметр '" + param + "' получил значение: " + value);
    if (param == "user_name"){user_name = value; localStorage["user_name"] = value;}
    createNewMessageDiv(message + value);
}

// задает тему оформления чата
function setTheme(theme){
    log("попытка смены темы на " + theme);
    if (screen.width > screen.height){
        if (theme == "light") {document.getElementById("link_on_style").href = style_links[0]; localStorage["chat_theme"] = "light";}
        else if (theme == "dark") {document.getElementById("link_on_style").href = style_links[1]; localStorage["chat_theme"] = "dark";}
        else if (theme == "violet") {document.getElementById("link_on_style").href = style_links[2]; localStorage["chat_theme"] = "violet";}
    }
    else {
        if (theme == "light") {document.getElementById("link_on_style").href = style_links_m[0]; localStorage["chat_theme"] = "light";}
        else if (theme == "dark") {document.getElementById("link_on_style").href = style_links_m[1]; localStorage["chat_theme"] = "dark";}
        else if (theme == "violet") {document.getElementById("link_on_style").href = style_links_m[2]; localStorage["chat_theme"] = "violet";}
    }
    
}