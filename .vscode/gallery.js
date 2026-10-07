// 1. Retrieve elements from the DOM
let dialog = document.querySelector('dialog');
let gallery = document.querySelector('.gallery');
let dialogImage = dialog.querySelector('dialog img');
const closeButton = modal.querySelector('.close-viewer');

// 2. Add an event listener to show dialog
gallery.addEventListener('click', function(event) {
    console.log(event.target.src);
    // swap out src of dialog image
    if(event.target.src !== undefined){
        dialogImage.src = event.target.src.replace('-sm','-full');
        // show dialog box
        dialog.showModel();
    }
});

// Close modal on button click
closeButton.addEventListener('click', () => {
    dialog.close();
});

// Close modal if clicking outside the image
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});