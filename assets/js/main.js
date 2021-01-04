const card = document.querySelector('#card'),
	  openForm_btn = document.querySelector('#open-form-btn'),
	  continue_btn = document.getElementById('continue-btn'),
	  form = document.querySelector('#card-form'),
	  container = document.querySelector(".container"),
	  cardNumber = document.querySelector('#card .number'),
	  cardName = document.querySelector('#card .name'),
	  logo_brand = document.querySelector('#logo-brand'),
	  signing = document.querySelector('#card .signing p'),
	  expirationMonth = document.querySelector('#card .month'),
	  expirationYear = document.querySelector('#card .year'),
	  ccv = document.querySelector('#card .ccv');

const showFront = () => {
	if(card.classList.contains('active')){
		card.classList.remove('active');
	}
}

// Rotate card
card.addEventListener('click', () => {
	card.classList.toggle('active');
});


openForm_btn.addEventListener('click', () => {
	container.classList.toggle('active');
	continue_btn.classList.toggle('active');
	if(continue_btn.classList.contains('active')){
		openForm_btn.innerHTML = '<i class="fas fa-times fa-plus"></i>Cerrar';
	} else{
		openForm_btn.innerHTML = '<i class="fas fa-plus"></i>Agregar tarjeta';
	}
});

// Select dinamic month
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	form.selectMonth.appendChild(opcion);
}

// Select dinamic year
const currentYear = new Date().getFullYear();
for(let i = currentYear; i <= currentYear + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	form.selectYear.appendChild(opcion);
}


form.inputNumber.addEventListener('keyup', (e) => {
	let inputValue = e.target.value;

	form.inputNumber.value = inputValue
	// delete spaces
	.replace(/\s/g, '')
	// delete letters
	.replace(/\D/g, '')
	// put a space beteween every 4 numbers
	.replace(/([0-9]{4})/g, '$1 ')
	// delete last space
	.trim();

	cardNumber.textContent = inputValue;

	if(inputValue == ''){
		cardNumber.textContent = '#### #### #### ####';

		logo_brand.innerHTML = '';
	}

	if(inputValue[0] == 4){
		logo_brand.innerHTML = '';
		const image = document.createElement('img');
		image.src = './assets/img/logos/visa.png';
		logo_brand.appendChild(image);
	} else if(inputValue[0] == 5){
		logo_brand.innerHTML = '';
		const image = document.createElement('img');
		image.src = './assets/img/logos/mastercard.png';
		logo_brand.appendChild(image);
	}

	showFront();
});


form.inputName.addEventListener('keyup', (e) => {
	let inputValue = e.target.value;

	form.inputName.value = inputValue.replace(/[0-9]/g, '');
	cardName.textContent = inputValue;
	signing.textContent = inputValue;

	if(inputValue == ''){
		cardName.textContent = 'Jhon Doe';
	}

	showFront();
});

// Select month
form.selectMonth.addEventListener('change', (e) => {
	expirationMonth.textContent = e.target.value;
	showFront();
});

// Select year
form.selectYear.addEventListener('change', (e) => {
	expirationYear.textContent = e.target.value.slice(2);
	showFront();
});

// CCV
form.inputCCV.addEventListener('keyup', () => {
	if(!card.classList.contains('active')){
		card.classList.toggle('active');
	}

	form.inputCCV.value = form.inputCCV.value
	// delete spaces
	.replace(/\s/g, '')
	// delete letters
	.replace(/\D/g, '');

	ccv.textContent = form.inputCCV.value;
});