
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');
let classHey = document.querySelector('.hey')


selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        body.style.backgroundColor = 'gray';
        body.style.color = 'white';
        logo.setAttribute('src','byui-logo-white.png')
        classHey.style.color = 'lightblue'
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black'
        logo.setAttribute('src','byui-logo-blue.webp')
        classHey.style.color = '#3C99DC'

    }
}           
                    