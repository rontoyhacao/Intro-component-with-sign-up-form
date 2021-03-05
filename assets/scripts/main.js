const form = document.querySelector('#form');
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const fnameContainer = document.querySelector('.fname-container');
const lnameContainer = document.querySelector('.lname-container');
const emailContainer = document.querySelector('.email-container');
const passwordContainer = document.querySelector('.password-container');

const fnameError = document.querySelector('.fname-error');
const lnameError = document.querySelector('.lname-error');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');

form.addEventListener('submit', e => {
    e.preventDefault();
    const fnameVal = fname.value;
    const lnameVal = lname.value;
    const emailVal = email.value;
    const passwordVal = password.value;

    if(!validateEmail(emailVal)) {
        emailContainer.classList.add('error');
        emailError.style.display = 'block';
        email.style.marginBottom = '45px';
    }else {
        emailContainer.classList.remove('error');
        emailError.style.display = 'none';
        email.style.marginBottom = '20px';
    }

    if(fnameVal === "") {
        fnameContainer.classList.add('error');
        fnameError.style.display = 'block';
        fname.style.marginBottom = '45px';
        fname.placeholder = '';

    }else {
        fnameContainer.classList.remove('error');
        fnameError.style.display = 'none';
        fname.style.marginBottom = '20px';
    }
    if(lnameVal === "") {
        lnameContainer.classList.add('error');
        lnameError.style.display = 'block';
        lname.style.marginBottom = '45px';
        lname.placeholder = '';

    }else {
        lnameContainer.classList.remove('error');
        lnameError.style.display = 'none';
        lname.style.marginBottom = '20px';
    }
    if(passwordVal === "") {
        passwordContainer.classList.add('error');
        passwordError.style.display = 'block';
        password.style.marginBottom = '45px';
        password.placeholder = '';

    }else {
        passwordContainer.classList.remove('error');
        passwordError.style.display = 'none';
        password.style.marginBottom = '20px';
    }
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}