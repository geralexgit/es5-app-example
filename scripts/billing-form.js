const billingForm = document.querySelector('#billingForm');
const billingFullName = document.querySelector('#billingFullName');
const billingEmail = document.querySelector('#billingEmail');
const billingStreetAddress = document.querySelector('#billingStreetAddress');
const billingSelectCountry = document.querySelector('#billingSelectCountry');
const billingInputCity = document.querySelector('#billingInputCity');
const billingZipCode = document.querySelector('#billingZipCode');

const billingFullNameTooltip = document.querySelector('#billingFullNameTooltip');
const billingEmailTooltip = document.querySelector('#billingEmailTooltip');
const billingStreetAddressTooltip = document.querySelector('#billingStreetAddressTooltip');
const billingSelectCountryTooltip = document.querySelector('#billingSelectCountryTooltip');
const billingInputCityTooltip = document.querySelector('#billingInputCityTooltip');
const billingZipCodeTooltip = document.querySelector('#billingZipCodeTooltip');

let billingRequisites = {};

//обрабатываем billing form
billingForm.addEventListener('submit', event => {
	event.preventDefault();

	if (!billingFullName.value.length) {
		billingFullName.classList.add('form-input--error');
		billingFullNameTooltip.classList.add('tooltip-open');		
	}

	if (!billingEmail.value.length) {
		billingEmail.classList.add('form-input--error');
		billingEmailTooltip.classList.add('tooltip-open');		
	}	

	if (!billingStreetAddress.value.length) {
		billingStreetAddress.classList.add('form-input--error');
		billingStreetAddressTooltip.classList.add('tooltip-open');		
	}	

	if (!billingSelectCountry.value.length) {
		billingSelectCountry.classList.add('form-input--error');
		billingSelectCountryTooltip.classList.add('tooltip-open');		
	}	

	if (!billingInputCity.value.length) {
		billingInputCity.classList.add('form-input--error');
		billingInputCityTooltip.classList.add('tooltip-open');		
	}	

	if (!billingZipCode.value.length) {
		billingZipCode.classList.add('form-input--error');
		billingZipCodeTooltip.classList.add('tooltip-open');		
	}

	if (billingFullName.value.length && 
		billingEmail.value.length && 
		billingStreetAddress.value.length &&
		billingSelectCountry.value.length &&
		billingInputCity.value.length &&
		billingZipCode.value.length) {

		billingRequisites = {
			fullName: billingFullName.value,
			email: billingEmail.value,
			street: billingStreetAddress.value,
			country: billingInputCity.value,
			city: billingInputCity.value,
			zipCode: billingZipCode.value
		};

		document.querySelector('#billingFormContainer').style.display = 'none';
		document.querySelector('#paymentForm').style.display = 'block';
		document.querySelector('#clientEmail').innerHTML = billingRequisites.email;

	}

});

//заполняем billing form
function fillBillingData() {
	billingFullName.value = shippingRequisites.fullName;	
	billingStreetAddress.value = shippingRequisites.street;	
	billingSelectCountry.value = shippingRequisites.country;
	billingInputCity.value = shippingRequisites.city;
	billingZipCode.value = shippingRequisites.zipCode;
};

document.querySelector('#fillBillingForm').addEventListener('click', fillBillingData);

window.addEventListener('click', event => {
	if (!event.target.classList.contains('form-input')) {
		inputs.forEach(input => input.classList.remove('form-input--error'));
		tooltips.forEach(tooltip => tooltip.classList.remove('tooltip-open'));
	}
});