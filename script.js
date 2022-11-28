const buttonTenStudents = document.querySelector('#button-10-students');
const buttonTwentyStudents = document.querySelector('#button-20-students');
const buttonAllStudents = document.querySelector('#button-all-students');
const imgContainer = document.querySelector('#image-container');
const imageStudent = document.querySelector('#image-student');
const buttonNames = document.querySelector('#button-container');
const quizContainer = document.querySelector('#quiz-container');



// function to shuffle the students
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

//start the quiz, do you want to quiz with 10, 20 or all the students? button choices
/* buttonTenStudents.addEventListener('click', (e)) => {
	if 
	

}; */
buttonTenStudents.innerHTML += `<button class="btn btn-outline-primary">10 students?</button>`;
buttonTwentyStudents.innerHTML += `<button class="btn btn-outline-primary">20 students?</button>`;
buttonAllStudents.innerHTML += `<button class="btn btn-outline-primary">All students?</button>`;






// choose how many students, 10 / 20 / all
//buttons

// shuffle array of students
/* shuffleArray(students);
console.log("shuffleing students:", students);

// slice in 10
const tenStudents = students.slice(1, 11);
console.log("slicing students", tenStudents);

// slice in 20
const twentyStudents = students.slice(1, 21);
console.log("slicing students", twentyStudents);
 */
// get random student
/* const getRandomStudent = students[Math.floor(Math.random() * students.length)];
console.log(getRandomStudent); */

// img to DOM
//imgStudent.setAttribute("src", students.image);
//imgStudent.src = `assets/images/students${students.image}`;
//const img = document.createElement("img");
//imgStudent.src = `assets/images/students/${getRandomStudent.image}`;



// get random 3 names
/* const randomStudentNames = students.slice(1, 4);

console.log("three names", randomStudentNames); */


// shuffle all 4 names

// show right or wrong answer

// show result, how many right guesses