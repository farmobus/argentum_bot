var user_name = "человек";
let answer_hello_var = ["Приветствую вас", "Привет", "Здравствуйте", "Рад видеть вас здесь! Тут обычно очень тихо..."]
let answer_thank_var = ["Всегда пожалйста", "Помощь нужна всем, просто в разной степени. Мой коллега говорил так же", 
                        "Помогать это часть моей работы. Кому-то я уже говорил эти слова", "Рад, что смог вам помочь. Хоть я и не очень имоционален"]
let answer_help_var = ["Я постараюсь сделать, что в пределах моих способностей", "Люблю помогать людям. Особенно с математикой", 
                       ("Попробую вам помочь, " + user_name), "Помогать - это, от части, моя работа", "Задействую все свои способности для помощи вам"]
let pre_answer_getted_user_name = ["Хорошо. ", "Отлично. ", "Хорошо, что сказали. "]
let answer_getted_user_name = ["Буду это помнить. Ваше имя - ", "Буду называть вас "]
let pre_answer_calculate_var = ["Не хочу хвастаться своими вычислительными навыками, но ", 
                                "Считать мне легко. Я как калькулятор, только умнее. В общем ", "Посчитал! И ", "Легко! Я уверен, что "]
let answer_calculate_var = ["ответ ", "это будет ", "это равно ", "будет ", "ответ точно "]
let pre_answer_bye_var = ["До свидания. ", "Буду ждать вашего возвращения. ", "Еще спишемся. "]
let answer_bye_var = ["Постараюсь тут не скучать в одиночестве", "А пока что развлеку себя математикой",
                      "Ну а сейчас.. буду просто спать в ожидании новых событий этого чата",
                      "*И снова, погружаясь в тишину безмолвия, ушел в строки своего кода*"]
let pre_answer_n_bye_var = ['Слово "прощай" для бота, словно Ctrl-A Delete. ', "Прощай? Вы серъезно хотите забросить меня навсегда? ", 
                            'Не нужно так кардинально. Лучше просто сказать "до встречи". ']
let answer_n_bye_var = ["Это очень обидно и грустно", "Надеюсь этого никогда не случится", "Быть забытым это ужасно", "Никогда так не говорите"]

function answer() {
    var dialog = document.querySelector("div.dialog");
    var new_answer = document.createElement("div");
    var input_message_for_answer = document.getElementById("input_message").value;
    if (input_message_for_answer.toLowerCase().includes("привет") | 
        input_message_for_answer.toLowerCase().includes("здравствуй")){new_answer.innerHTML = answer_hello();}
    else if (input_message_for_answer.toLowerCase().includes("помоги") |
            input_message_for_answer.toLowerCase().includes("поможешь") |
            (input_message_for_answer.toLowerCase().includes("помощь") & 
             input_message_for_answer.toLowerCase().includes("мне"))){new_answer.innerHTML = answer_help();}
    else if (input_message_for_answer.toLowerCase().includes("пасиб") | 
        input_message_for_answer.toLowerCase().includes("благодарю")){new_answer.innerHTML = answer_thank();}
    else if (input_message_for_answer.includes("мое имя")){new_answer.innerHTML = get_user_name(input_message_for_answer);}
    else if (input_message_for_answer.includes("пока") |
            input_message_for_answer.includes("до свидания")){new_answer.innerHTML = answer_bye();}
    else if (input_message_for_answer.includes("прощай")){new_answer.innerHTML = answer_n_bye();}
    else if (input_message_for_answer.toLowerCase().includes("+") | 
        input_message_for_answer.toLowerCase().includes("-") | 
        input_message_for_answer.toLowerCase().includes("*") | 
        input_message_for_answer.toLowerCase().includes("**") |
        input_message_for_answer.toLowerCase().includes("/") |
        input_message_for_answer.toLowerCase().includes("%")){new_answer.innerHTML = answer_calculate(input_message_for_answer);}
    else{new_answer.innerHTML = ("--Error-- Type: Unknown Question. Error in " + '"' + input_message_for_answer + '"');}
    new_answer.className = "new_answer";
    dialog.appendChild(new_answer);
}

function answer_bye(){
    pre_rand = Math.floor(Math.random() * pre_answer_bye_var.length);
    rand = Math.floor(Math.random() * answer_bye_var.length);
    return pre_answer_bye_var[pre_rand] + answer_bye_var[rand];
}

function answer_n_bye(){
    pre_rand = Math.floor(Math.random() * pre_answer_n_bye_var.length);
    rand = Math.floor(Math.random() * answer_bye_var.length);
    return pre_answer_n_bye_var[pre_rand] + answer_n_bye_var[rand];
}

function answer_calculate(input_message_for_answer){
    pre_rand = Math.floor(Math.random() * pre_answer_calculate_var.length);
    rand = Math.floor(Math.random() * answer_calculate_var.length);
    return pre_answer_calculate_var[pre_rand] + answer_calculate_var[rand] + eval(input_message_for_answer);
}

function get_user_name(input_message_for_answer){
    let arr = input_message_for_answer.split(' ');
    rand = Math.floor(Math.random() * answer_getted_user_name.length);
    rand_pre = Math.floor(Math.random() * pre_answer_getted_user_name.length);
    user_name = arr[arr.length - 1];
    return pre_answer_getted_user_name[rand_pre] + answer_getted_user_name[rand] + user_name;
}

function answer_thank(){
    rand = Math.floor(Math.random() * answer_thank_var.length);
    return answer_thank_var[rand];
}

function answer_hello(){
    rand = Math.floor(Math.random() * answer_hello_var.length);
    return answer_hello_var[rand];
}

function answer_help(){
    rand = Math.floor(Math.random() * answer_hello_var.length);
    return answer_help_var[rand];
}