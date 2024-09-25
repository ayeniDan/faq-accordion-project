const ul = document.querySelector('ul');
const answers = ul.querySelectorAll('.answer');
const minusIcons = ul.querySelectorAll('.iconMinus');

answers.forEach((answer) => answer.classList.add('hidden'));
minusIcons.forEach((answer) => answer.classList.add('hidden'));
answers[0].classList.remove('hidden');
minusIcons[0].classList.remove('hidden');
ul.querySelector('.iconPlus').classList.add('hidden');

function toggleAnswer(e) {
	if (e.target.classList.contains('iconPlus')) {
		e.target.classList.add('hidden');
		e.target.nextElementSibling.classList.remove('hidden');
		e.target.parentElement.parentElement.nextElementSibling.classList.remove(
			'hidden'
		);
	} else if (e.target.classList.contains('iconMinus')) {
		e.target.classList.add('hidden');
		e.target.previousElementSibling.classList.remove('hidden');
		e.target.parentElement.parentElement.nextElementSibling.classList.add(
			'hidden'
		);
	} else if (e.target.parentElement.classList.contains('question')) {
		e.target.nextElementSibling.firstElementChild.classList.toggle('hidden');
		e.target.nextElementSibling.lastElementChild.classList.toggle('hidden');
		e.target.parentElement.parentElement.lastElementChild.classList.toggle(
			'hidden'
		);
	}
}

function init() {
	//event listeners
	ul.addEventListener('click', toggleAnswer);
}

init();
