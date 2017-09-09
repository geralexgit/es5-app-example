let shippingRequisites = {};

//inputs
const shippingForm = document.querySelector('#shippingForm');
const fullName = document.querySelector('#fullName');
const phoneNumber = document.querySelector('#phoneNumber');
const streetAddress = document.querySelector('#streetAddress');

//tooltips
const fullNameTooltip = document.querySelector('#fullNameTooltip');
const phoneNumberTooltip = document.querySelector('#phoneNumberTooltip');
const streetAddressTooltip = document.querySelector('#streetAddressTooltip');
const selectCountryTooltip = document.querySelector('#selectCountryTooltip');
const inputCityTooltip = document.querySelector('#inputCityTooltip');
const zipCodeTooltip = document.querySelector('#zipCodeTooltip');


//inputs&tooltips in array
const inputs = Array.from(document.querySelectorAll('.form-input'));
const tooltips = Array.from(document.querySelectorAll('.tooltip'));


shippingForm.addEventListener('submit', event => {
	event.preventDefault();

	if (!fullName.value.length) {
		fullName.classList.add('form-input--error');
		fullNameTooltip.classList.add('tooltip-open');		
	}

	if (!phoneNumber.value.length) {
		phoneNumber.classList.add('form-input--error');
		phoneNumberTooltip.classList.add('tooltip-open');		
	}	

	if (!streetAddress.value.length) {
		streetAddress.classList.add('form-input--error');
		streetAddressTooltip.classList.add('tooltip-open');		
	}	

	if (!selectCountry.value.length) {
		selectCountry.classList.add('form-input--error');
		selectCountryTooltip.classList.add('tooltip-open');		
	}	

	if (!inputCity.value.length) {
		inputCity.classList.add('form-input--error');
		inputCityTooltip.classList.add('tooltip-open');		
	}	

	if (!zipCode.value.length) {
		zipCode.classList.add('form-input--error');
		zipCodeTooltip.classList.add('tooltip-open');		
	}

	if (fullName.value.length && 
		phoneNumber.value.length && 
		streetAddress.value.length &&
		selectCountry.value.length &&
		inputCity.value.length &&
		zipCode.value.length) {

		shippingRequisites = {
			fullName: fullName.value,
			street: streetAddress.value,
			country: selectCountry.value,
			city: inputCity.value,
			zipCode: zipCode.value
		};

		document.querySelector('#shippingFormContainer').style.display = 'none';
		document.querySelector('#billingFormContainer').style.display = 'block';
	}
});


window.addEventListener('click', event => {
	if (!event.target.classList.contains('form-input')) {
		inputs.forEach(input => input.classList.remove('form-input--error'));
		tooltips.forEach(tooltip => tooltip.classList.remove('tooltip-open'));
	}
});