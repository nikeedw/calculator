let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(value) {
	calculation += value;
	displayCalculation();
	localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
	document.querySelector('.digital-display').innerHTML = calculation;
}

document.querySelector('.equals_btn').addEventListener('click', () => {
  if (calculation.trim() !== '') { // Check if there's a calculation to evaluate
    calculation = eval(calculation);
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  }
});

document.querySelector('.clear_btn').addEventListener('click', () => {
	calculation = '';
	displayCalculation();
	localStorage.setItem('calculation', calculation);
});

document.querySelector('.undo_btn').addEventListener('click', () => {
	calculation = calculation.slice(0, -1);
	displayCalculation();
	localStorage.setItem('calculation', calculation);
});

document.body.addEventListener('keydown', (event) => {
	if(event.key === 'Enter') {
		event.preventDefault();
		calculation = eval(calculation);
		displayCalculation();
		localStorage.setItem('calculation', calculation);
	}
});

document.body.addEventListener('keydown', (event) => {
	if(event.key === 'Backspace') {
		event.preventDefault();
		calculation = calculation.slice(0, -1);
		displayCalculation();
		localStorage.setItem('calculation', calculation);
	}
});

document.body.addEventListener('keydown', (event) => {
	if(event.key === 'Escape') {
		event.preventDefault();
		calculation = '';
		displayCalculation();
		localStorage.setItem('calculation', calculation);
	}
});

function enterByKey(keyButton) {
	document.body.addEventListener('keydown', (event) => {
		if(event.key === keyButton) {
			updateCalculation(keyButton);
		}
	});
};

const keysPressed = ['1', '2', '3', '4', '5', '6',
											 '7', '8', '9', '0', '+', '-', '*', '/', '.'];
keysPressed.forEach( (val) => enterByKey(val) );