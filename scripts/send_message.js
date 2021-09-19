function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delay() {
    await sleep(1000);
    answer();
}

function send() {
    var dialog = document.querySelector("div.dialog");
    var empty_dialog = document.getElementById("empty-dialog");
    var input_message = document.getElementById("input_message").value;
    var input = document.getElementById("input_message");
    var new_message = document.createElement("div");
    new_message.innerHTML = input_message;
    new_message.className = 'new_message';
    empty_dialog.innerHTML = '';
    dialog.appendChild(new_message);
    input.value = '';
    sleep(2000)
    delay(); 
}