const buttonTenStudents = document.querySelector('#button-10-students');
const buttonTwentyStudents = document.querySelector('#button-20-students');
const buttonAllStudents = document.querySelector('#button-all-students');
const imgContainer = document.querySelector('#image-container');
const imageStudent = document.querySelector('#image-student');
const buttonStart = document.querySelector('#button-start-container');
const buttonNames = document.querySelector('#button-container');
const quizContainer = document.querySelector('#quiz-container');
const result = document.querySelector('#result');

// function to shuffle the students
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

buttonTenStudents.innerHTML += `<button class="btn col-8 col-md-6 btn-light">10 students</button>`;
buttonTwentyStudents.innerHTML += `<button class="btn col-8 col-md-6 btn-light">20 students</button>`;
buttonAllStudents.innerHTML += `<button class="btn col-8 col-md-6 btn-light">All students</button>`;



//function to get a random student and 3 other names 
const getRandomStudent = () => {
	//this will keep it to four names, otherwise it will add for names every time you select a button/answer
	buttonNames.innerHTML = "";
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
		buttonNames.innerHTML += `<button class="btn btn-outline-dark my-2">${student}</button>`;
	});
};


// button, start quiz with 10 students
buttonTenStudents.addEventListener('click', () => {
	//hide buttons
	buttonStart.style.display = 'none';
	//call the function to get a random student and three random names
	getRandomStudent();
	//take out 10 students
	const tenStudents = students.slice(0, 10);
	console.log(tenStudents.length);
});

// button, start quiz with 20 students
buttonTwentyStudents.addEventListener('click', () => {
	//hide buttons
	buttonStart.style.display = 'none';
	//call the function to get a random student and three random names
	getRandomStudent();
	//take out twenty students
	const twentyStudents = students.slice(0, 20);
	console.log(twentyStudents.length);
});

// button, start quiz with all students
buttonAllStudents.addEventListener('click', () => {
	buttonStart.style.display = 'none';
	//call the function to get a random student and three random names
	getRandomStudent();
	console.log(students.length);
});






let guesses = 0;
let correctGuess = 0;
let wrongGuess = 0;



// Listen for guesses
buttonNames.addEventListener('click', e => {
	// Stop form from being sent to the server
	e.preventDefault();

	
	//checking if someone is clicking the 'button'-element
	if (e.target.tagName === "BUTTON") {
		// Increase number of guesses made
		guesses++;

		// Check if guess was correct
		if (e.target.innerText === correctStudent.name) {
			correctGuess++;
			console.log(`${correctStudent.name} is correct!`);

		} else {
			console.log(`${students.name} is wrong!`);
		}
		result.innerText = `${correctGuess} / ${guesses} correct`;
		
		getRandomStudent();
	}
});
























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




// show right or wrong answer

// show result, how many right guesses





