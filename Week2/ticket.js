const form = document.querySelector("#ticketForm");
const type = document.querySelector('#type');
const noteContainer = document.querySelector('#noteContainer');
const output = document.querySelector('#output');
const studentID = document.querySelector('#studentID');
const student = document.querySelector('#hello');
const code = document.querySelector('#zj');
const id = document.querySelector('#accessCode')

function upDateNotesField(){
    if(type.value === 'student'){
        student.classList.remove('hidden');
        studentID.required = true;
        id.required = false;
        code.classList.add('hidden');
        
    }
    if(type.value === 'guest'){
        student.classList.add('hidden');
        studentID.required = false;
        id.required = true;
        code.classList.remove('hidden')
    }
}

type.addEventListener('change', upDateNotesField);
upDateNotesField();

function isPastDate(value){
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event.target.email.value);
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.type.value;
    const date = form.date.value;

    if(type === 'guest'){

        if(id.value !== 'Event131'){
            output.textContent = 'wrong code';
            return
        }
    }


    if(type === 'student'){
        if(studentID.value.trim() === ''|| studentID.value.length !== 9 || isNaN(Number(studentID.value))){
            output.textContent = 'Student ID must be 9 digits';
            return;
        }
    }

    


    if(isPastDate(date)){
        output.textContent = 'choose a later date';
        return
    }


    output.innerHTML=`
    <h2>Ticket Created</h2>
    <p>${firstName},${lastName}</p>
    <p>${type}</p>
    <p>${date}</p>
    `
    
})

