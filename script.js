const buttonTenStudents = document.querySelector('#button-10-students');
const buttonTwentyStudents = document.querySelector('#button-20-students');
const buttonAllStudents = document.querySelector('#button-all-students');
const imgContainer = document.querySelector('#image-container');
const imageStudent = document.querySelector('#image-student');
const buttonStart = document.querySelector('#button-start-container');
const buttonNames = document.querySelector('#button-container');
const quizContainer = document.querySelector('#quiz-container');

//let numberOfGuesse = 0;

// function to shuffle the students
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

buttonTenStudents.innerHTML += `<button class="btn col-8 col-md-6 btn-outline-primary">10 students?</button>`;
buttonTwentyStudents.innerHTML += `<button class="btn col-8 col-md-6 btn-outline-primary">20 students?</button>`;
buttonAllStudents.innerHTML += `<button class="btn col-8 col-md-6 btn-outline-primary">All students?</button>`;



//function to get a random student and 3 other names 
const getRandomStudent = () => {
	//calling the fuction to shuffle the students
	shuffleArray(students); 
	//slicing out 4 students and putting them in 'randomStudents'
	const randomStudents = students.slice(0, 4); 
	//setting the student on index 0 to be the 'correctStudent'
	correctStudent = students[0]; 
	//image of the student
	imageStudent.setAttribute('src', correctStudent.image);
	//shuffeling the 4 'randomStudents'
	shuffleArray(randomStudents); 
	//using map() to pick out the 4 names that are saved in 'randomStudents', to a new const named 'randomNames' 
	const randomNames = randomStudents.map(students => students.name); 
	//adding a button for every name/student in randomNames
	randomNames.forEach(student => {
		buttonNames.innerHTML += `<button class="btn btn-outline-primary my-2">${student}</button>`;
	});

};


//start the quiz, do you want to quiz with 10, 20 or all the students? button choices

//calling the function to get a random student
//getRandomStudent();





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





