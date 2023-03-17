let parameters = {
    count: false,
    letters: false,
    numbers: false,
    special: false
}
let strengthBar = document.getElementById('strength-bar');
let msg = document.getElementById('msg');

function strengthChecker() {
    let password = document.getElementById('password').value;

    parameters.letters = (/[A-Za-z]+/.test(password)) ? true : false;
    parameters.numbers = (/[0-9]+/.test(password)) ? true : false;
    parameters.special = (/[!\"$%&/()=?@`\\.\';:+=^*_-]+/.test(password)) ? true : false;
    parameters.count = (password.length > 7) ? true : false;

    console.log(Object.values(parameters));
}

function toggle() {
    let password = document.getElementById('password');
    let eye = document.getElementById('toggle');

    if(password.getAttribute('type') == 'password') {
        password.setAttribute('type', 'text');
        eye.style.color = '#0be881';
    } else {
        password.setAttribute('type', 'password');
        eye.style.color = '#808080';
    }
}