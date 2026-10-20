let courses = ['WDD131', 'ITM220', 'WDD231', 'CES212'];
// arrays start with index 0
console.log(courses[0]);
console.log(courses[4]);

let coursesAndGPA = ['WDD131', 3.7, 'ITM220', 4];
console.log(coursesAndGPA[1])

let courseAndGPA = [
    {
        courseName: 'WDD131',
        courseGPA: 3.7,
        professor: 'Brother Warner'
        assignments: [
            {
                assignmentName: "W01 Prove",
                assignemtGrade: 89
            }
        ]
    }
    {
        courseName: 'Wdd131',
        courseGPA: 4
        professor: 'Brother Warner'
    }
]

// challenge: retrieve the course name for the second item in the array of objects and print to screen
console.log(courseAndGPA[1].assignments[0].assignmentName);

//looping through an array
for(let i=0; i < coursesAndGPA.length; i++) {
    console.log(coursesAndGPA[i].courseName);
    console.log(coursesAndGPA[i].courseGPA);
}

// looping through with a foreach loop
coursesAndGPA.forEach(item => {
    console.log(item.courseName);
    console.log(item.courseGPA);
});

let body = document.querySelector('body')

// build out HTML dynamically based on array contentd
coursesAndGPA.forEach(course => {
    let dynamicHTML = `
        <div>
            <h1>${course.courseName}</h1>
            <h2>${course.courseGPA}</h2>
        </div>
        `;
        body.innerHTML += dynamicHTML;
})