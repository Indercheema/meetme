'use strict';


/*
    JavaScript Basics
    Inderjeet Cheema

*/
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}



const loginBtn = select('.btn');
const login = select('.user-name');
const password = select('.password');
const mesg = select('.info');

// let userName = 'inder@email.com';
// let pass = 'Inder@123';

localStorage.setItem('userName', '1');
localStorage.setItem('pass', '1');

onEvent('click' , loginBtn, function() {
    let userLogin = login.value.trim();
    let userPasswrod = password.value.trim();
if (userLogin === localStorage.userName && userPasswrod === localStorage.pass)  {
    let newUrl = './home.html';
        window.location.assign(newUrl);
} else if (login.value === '' || password.value === '') {
    mesg.innerText = 'Please enter Username and Passowrd';
} else {
    mesg.innerText = 'Username or Password is incorrect';
}
});
window.history.forward();
        function noBack() {
            window.history.forward();
        }

