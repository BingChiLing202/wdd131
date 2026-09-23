// How to manipulate the DOM with JavaScript

// Grab our h1 from the page
let heading = document.querySelector('h1');

console.log(heading);

// change the text of the element
heading.textContent = 'ZJ is cool guy!';

// change the text color
heading.style.color = '#0000ff';

// pick your own style and change it
heading.style.fontStyle = 'italic';

//retrieve an ID element from the page
document.getElementById('topics').style.color = 'red';
// same thing
document.querySelector('#topics').style.color = 'red';

// select the img tag
let image = document.querySelector('img');

console.log(image.getAttribute('src'));

image.setAttribute('src', "https://en.wikipedia.org/wiki/List_of_Frieren_episodes" )



let selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                