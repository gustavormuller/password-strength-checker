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