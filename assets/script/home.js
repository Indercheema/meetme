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

const myDiv = select('.random-users');
const logout = select('.btn-menu');


const url = 'https://randomuser.me/api/?nat=CA&results=10'

const options = {
    method: 'GET',
    mode: 'cors'
}

async function getUsers() {
    try {

        const result = await fetch(url, options);
        if (result.status >= 200 && result.status < 400) {
            const data = await result.json();
            const users = data.results;
            console.log(data);


            for (let i = 0; i < users.length; i++) {
                let userSection = document.createElement('div')
                userSection.classList.add('user-data');

                let userInfo = document.createElement('div')
                userInfo.classList.add('user-info');

                let userDp = document.createElement('div')
                userDp.classList.add('user-dp2');

                let userImg = document.createElement('div');
                userImg.classList.add('user-dp');
                userDp.appendChild(userImg);
                let url = users[i].picture.medium;
                userImg.style.background = `#000 url(${url}) center center / cover no-repeat`

                let userName = document.createElement('p');
                userInfo.appendChild(userName);
                userName.innerText = `${users[i].name.first + ' ' + users[i].name.last}`;

                let userCity = document.createElement('p');
                userInfo.appendChild(userCity);
                userCity.innerText = `${users[i].location.city}`;

                userSection.appendChild(userDp);
                userSection.appendChild(userInfo);

                myDiv.appendChild(userSection);


            }
        }

    } catch (error) {
        console.log(error)
    }
}

onEvent('load', window, function(){
    getUsers();
});



