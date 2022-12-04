/* 
*
* Inlämningsuppgift 1, JavaScript grundkurs - Helga Börjesson
* 
*/
const imgContainer = document.querySelector('#image-container');
const imageStudent = document.querySelector('#image-student');
const buttonStart = document.querySelector('#button-start-container');
const buttonNames = document.querySelector('#button-container');
const quizContainer = document.querySelector('#quiz-container');
const result = document.querySelector('#result');
const showResult = document.querySelector('#show-result');
const resultContainer = document.querySelector('#result-container');

// Fisher-Yates, function to shuffle the students
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

// adding start buttons
document.querySelector('#button-start-container').innerHTML = `
<button type="button" class="btn my-2 col-8 col-md-6 btn-light" id="button-10-students">10 students</button>
<button type="button" class="btn my-2 col-8 col-md-6 btn-light" id="button-20-students">20 students</button>
<button type="button" class="btn my-2 col-8 col-md-6 btn-light" id="button-all-students">All students</button>
`

let numGuesses = 0;
let currentStudents;
let randomStudents;
let correctStudent; 

// function for sorting out number of students to guess on 
const sortStudents = (num) => {
	numGuesses = num;
	// copy of student array
	currentStudents = [...students]; 
	// shuffle the new student array
	shuffleArray(currentStudents);
	// sliceing out how many students you want to guess on
	currentStudents = currentStudents.slice(0, num);
	// copy of student array, from this I´ll take three random names
	randomStudents = [...students]; 
	shuffleArray(randomStudents);
}

// function to get a random student to guess on 
const getRandomStudent = () => {
	// this will keep it to four names, otherwise it will add names every time you select a button/answer
	buttonNames.innerHTML = "";
	// take out the correct student
	correctStudent = currentStudents.shift();
	const arrayOfNames = randomStudents.filter((student) => student.name !== correctStudent.name);
	// calling the fuction to shuffle the names
	shuffleArray(arrayOfNames); 
	// slicing out 3 random student names
	const randomStudentNames = arrayOfNames.slice(0, 3);
	// push the name of the correct student
	randomStudentNames.push(correctStudent);
	// shuffle the names
	shuffleArray(randomStudentNames);
	// image of the student
	imageStudent.setAttribute('src', correctStudent.image);
	// using map() to pick out the names that are saved in 'randomStudents', to a new const named 'randomNames' 
	const randomNames = randomStudentNames.map(students => students.name); 
	// adding a button for every name/student in randomNames
	randomNames.forEach(student => {
		buttonNames.innerHTML += `<button class="btn btn-outline-dark my-2">${student}</button>`;
	});
};

// button, start quiz with 10 students
document.querySelector('#button-10-students').addEventListener('click', () => {
	// hide buttons
	buttonStart.style.display = 'none';
	// call function to sort out 10 random students to guess on
	sortStudents(10);
	// call function to get a random student
	getRandomStudent();
});

// button, start quiz with 10 students
document.querySelector('#button-20-students').addEventListener('click', () => {
	// hide buttons
	buttonStart.style.display = 'none';
	// call function to sort out 20 random students to guess on
	sortStudents(20);
	// call function to get a random student
	getRandomStudent();
});

// button, start quiz with all students
document.querySelector('#button-all-students').addEventListener('click', () => {
	// hide buttons
	buttonStart.style.display = 'none';
	// call function to guess on all students
	sortStudents(students.length);
	// call function to get a random student
	getRandomStudent();
});

let guesses = 0;
let correctGuess = 0;
let wrongGuess = 0;

// listen for guesses
buttonNames.addEventListener('click', e => {
	// stop form from being sent to the server
	e.preventDefault();

	// checking if someone is clicking the 'button'-element
	if (e.target.tagName === "BUTTON") {
		// Increase number of guesses made
		guesses++;

		// Check if guess was correct
		if (e.target.innerText === correctStudent.name) {
			correctGuess++;
			console.log(`${correctStudent.name} is correct!`);
		} else {

		} // stop game when choosen number of students has been shown
		if (guesses === numGuesses) {
			// get the wrong guesses
			wrongGuess = guesses - correctGuess; 
			// hide image and names to show result and 'play again button'
			quizContainer.classList.add("d-none");
			showResult.innerHTML = `
			<div class="" id="show-result">
				<p>Du fick ${correctGuess} rätt och ${wrongGuess} fel av totalt ${guesses} gissningar.</p>
			</div>
			<button onclick="window.location.reload();" class="btn btn-outline-dark my-2">
				Play again
			</button>
			`;
		} else {
			getRandomStudent();
		} 
		// show number of right guesses while you guess
		result.innerText = `${correctGuess} / ${guesses} correct`;
	}
});