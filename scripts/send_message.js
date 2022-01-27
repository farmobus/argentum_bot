var empty_dialog;
var input_message;
var input;
var last_message;
var new_message;
var messages_counter = eval(localStorage["messages_counter"]); if (localStorage["messages_counter"] == NaN) {messages_counter = 0; localStorage["messages_counter"] = 0;}
var empty_messages_counter = 0;
var empty_answers = {5: "Какой смысл в пустых сообщениях?",
                     13: "Вам так нравится эта кнопка?",
                     17: "Если вы продолжите, я ее заблокирую",
                     32: "А что вам это даст?", 
                     40: "Я просто обижусь на Вас и не буду отвечать", 
                     64: "Вот вы и прошли испытание!<br>Я имею скрытые функции. Дам вам одну.<br>!user - расскажу Вам о том, как вижу Вас я :)"}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delay() {
    await sleep(1000);
    answer(empty_dialog, messages_counter);
}

function send() {
    var dialog = document.querySelector("div.dialog");
    empty_dialog = document.getElementById("empty-dialog");
    input_message = document.getElementById("input_message").value;
    input = document.getElementById('input_message');
    last_message = document.getElementById('saver');
    if (input_message.length > 0) {
        messages_counter += 1;
        localStorage["messages_counter"] = messages_counter;
        empty_messages_counter = 0;
        new_message = document.createElement("div");
        new_message.innerHTML = input_message;
        new_message.className = 'new_message';
        empty_dialog.innerHTML = '';
        dialog.appendChild(new_message);
        last_message.innerHTML = input_message;
        input.value = '';
        sleep(2000);
        delay(); 
    }
    else {
        empty_messages_counter += 1;
        if (empty_messages_counter in empty_answers) {createNewMessageDiv(empty_answers[empty_messages_counter]);}
    }
}30