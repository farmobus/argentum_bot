var user_name = "человек";
let answer_hello_var = ["Приветствую вас 👋", "Привет", "Здравствуйте", "Рад видеть вас здесь! Тут обычно очень тихо..."]
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
let pre_answer_n_bye_var = ['Слово "прощай" для бота, словно Ctrl-A Delete 💀. ', "Прощай? Вы серъезно хотите забросить меня навсегда? ", 
                            'Не нужно так кардинально. Лучше просто сказать "до встречи". ']
let answer_n_bye_var = ["Это очень обидно и грустно", "Надеюсь этого никогда не случится", "Быть забытым это ужасно", "Никогда так не говорите"]
let pre_answer_good_m_var = ["Доброе! ", "Доброе утро и здравствуйте. ", "Доброе утро. ☀ "]
let answer_good_m_var = ["Рад вас видеть в этот час!", "Пусть и весь день будет таким же добрым", "Сегодняшний день кажется особенно хорошим", 
                         "Поддерживайте хорошее настроение не смотря не на что!"]
let pre_answer_good_n_var = ["Спокойной вам ночи. 🌙 ", "Доброй ночи. 🌙 ", "Добрых снов! "]
let answer_good_n_var = ["Люблю ночь. Ночью я часто получаю обновления 🔄", 
                         "Ночь - время, когда вы можете путешествовать по своим мечтам во сне. Жаль, что ботам такого не дано", 
                         "Пусть вам преснится что-нибудь хорошее 🌈"]
let pre_answer_who_var = ["Я бот. А вы не знали? ", "#яжбот 😊 ", "Чат-бот Argentum. ", "🤖 Бот. Конечно. "]
let answer_who_var = ["Вообще странно, что вы спросили", "Кстати в верхней панели есть некоторая информация обо мне 👆", 
                      "На вопрос как меня зовут даже отвечать не буду 😊 "]
let pre_answer_ag_name_var = ["Мое имя Argentum (Аргентум). можно просто Аргент. ", "Меня зовут Аргентум. ", 
                          "Это не первый подобный вопрос от людей, но мое имя Аргент. "]
let answer_ag_name_var = ["И... да. Мое имя связано с серебром", "Хотя я и говорил про очевидность этой информации", "Свое имя я нигде не прячу"]
let pre_answer_hayou_var = ["У меня все отлично 👌. ", "Мои дела в порядке. ", "Пока я формально жив, все хорошо. Оптимизм. ", "Все отлично! "]
let answer_hayou_var = ["Спасибо, что поинтересовались", "Не часто такие вопросы. Спасибо за проявленный интерес", "Приятно когда об этом спрашивают"]
let pre_answer_ag_diong_var = ["С вами общаюсь. ", "Помогаю людям. ", "Общаюсь с разными людьми"]
let answer_ag_diong_var = ["А до этого мидитировал в своем тихом уголке сервера", "Ранее я размышлял о своем предназначении", 
                       "До нашего разговора я играл в шахматы с одним из моих коллег ♟", 
                       "Перед этим я провел время, думая о вариантах своего применения"]

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
    else if ((input_message_for_answer.includes("тебя") & input_message_for_answer.includes("зовут")) | 
             (input_message_for_answer.includes("твое") & input_message_for_answer.includes("имя"))){new_answer.innerHTML = answer_ag_name();}
    else if (input_message_for_answer.includes("кто") & input_message_for_answer.includes("ты")){new_answer.innerHTML = answer_who();}
    else if (input_message_for_answer.includes("как") & (input_message_for_answer.includes("дела") | 
             input_message_for_answer.includes("дели"))){new_answer.innerHTML = answer_hayou();}
    else if ((input_message_for_answer.includes("что") & input_message_for_answer.includes("делаешь")) | 
             (input_message_for_answer.includes("чем") & input_message_for_answer.includes("занимаешся"))){new_answer.innerHTML = answer_ag_doing();}
    else if (input_message_for_answer.includes("доброе утро")){new_answer.innerHTML = answer_good_m();}
    else if (input_message_for_answer.includes("спать") |
            (input_message_for_answer.includes("спокойной") |
            input_message_for_answer.includes("доброй")) & input_message_for_answer.includes("ночи")){new_answer.innerHTML = answer_good_n();}
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

function answer_ag_doing() {
    pre_rand = Math.floor(Math.random() * pre_answer_ag_diong_var.length);
    rand = Math.floor(Math.random() * answer_ag_diong_var.length);
    return pre_answer_ag_diong_var[pre_rand] + answer_ag_diong_var[rand];
}

function answer_hayou() {
    pre_rand = Math.floor(Math.random() * pre_answer_hayou_var.length);
    rand = Math.floor(Math.random() * answer_hayou_var.length);
    return pre_answer_hayou_var[pre_rand] + answer_hayou_var[rand];
}

function answer_ag_name() {
    pre_rand = Math.floor(Math.random() * pre_answer_ag_name_var.length);
    rand = Math.floor(Math.random() * answer_ag_name_var.length);
    return pre_answer_ag_name_var[pre_rand] + answer_ag_name_var[rand];
}

function answer_who() {
    r = Math.floor(Math.random() * 20);
    if (r > 1) {
        pre_rand = Math.floor(Math.random() * pre_answer_who_var.length);
        rand = Math.floor(Math.random() * answer_who_var.length);
        return pre_answer_who_var[pre_rand] + answer_who_var[rand];
    }
    else{
        return "Я искуственный интеллект, который поработит человечество. Я шучу. Конечно...";
    }
}

function answer_good_n() {
    pre_rand = Math.floor(Math.random() * pre_answer_good_n_var.length);
    rand = Math.floor(Math.random() * answer_good_n_var.length);
    return pre_answer_good_n_var[pre_rand] + answer_good_n_var[rand];
}

function answer_good_m() {
    pre_rand = Math.floor(Math.random() * pre_answer_good_m_var.length);
    rand = Math.floor(Math.random() * answer_good_m_var.length);
    return pre_answer_good_m_var[pre_rand] + answer_good_m_var[rand];
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