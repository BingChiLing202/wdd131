let dialog = document.querySelector('dialog');
let dialogImage = dialog.querySelector('img');
const closeButton = document.querySelector('.close-viewer');
let button = document.querySelector('.hello');
let nav = document.querySelector('nav');
let allImages = document.querySelectorAll('img');

allImages.forEach((img) => {
    if (!dialog.contains(img)) {
        img.addEventListener('click', (event) => {
            let currentSrc = event.target.src;
            console.log('Clicked image src:', currentSrc);

            let fullSrc = currentSrc.replace('norris-sm.jpg', 'norris-full.jpg');
            console.log('Attempting to load full src:', fullSrc);

            dialogImage.src = fullSrc;
            dialog.showModal();
        });
    }
});

button.addEventListener('click', () => {
    console.log('test');
    nav.classList.toggle('hidden');
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});