function addInDisplay(value) {
    console.log(value);
    var display = document.querySelector('#display-content');
    var display_content = display.value;
    console.log(display_content);
    display.value = display_content + value;  
}

function showResult() {
    var display = document.querySelector('#display-content');
    var display_content = display.value;
    if(display_content == '') {
        display_content = '';
    } else {
        display.value = eval(display_content);
    }
}

function cleanDisplay() {
    var display = document.querySelector('#display-content');
    display.value = '';
}