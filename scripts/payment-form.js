let cardInfo = {};
let fullClientData = {};

const paymentForm = document.querySelector('#paymentForm');
const cardholderName = document.querySelector('#cardholderName');
const cardnumber = document.querySelector('#cardnumber');
const expiredDate = document.querySelector('#expiredDate');
const securityCode = document.querySelector('#securityCode');
const cardholderNameTooltip = document.querySelector('#cardholderNameTooltip');
const cardnumberTooltip = document.querySelector('#cardnumberTooltip');
const expiredDateTooltip = document.querySelector('#expiredDateTooltip');
const securityCodeTooltip = document.querySelector('#securityCodeTooltip');

//проверяем форму
paymentForm.addEventListener('submit', event => {

    event.preventDefault();

    if (!cardholderName.value.length) {
        cardholderName.classList.add('form-input--error');
        cardholderNameTooltip.classList.add('tooltip-open');
    }

    if (!cardnumber.value.length) {
        cardnumber.classList.add('form-input--error');
        cardnumberTooltip.classList.add('tooltip-open');
    }

    if (!expiredDate.value.length) {
        expiredDate.classList.add('form-input--error');
        expiredDateTooltip.classList.add('tooltip-open');
    }

    if (!securityCode.value.length) {
        securityCode.classList.add('form-input--error');
        securityCodeTooltip.classList.add('tooltip-open');
    }

    if (cardholderName.value &&
    	cardnumber.value &&
    	expiredDate.value &&
    	securityCode.value) {



    	cardInfo = {
    		cardholderName: cardholderName.value,
    		cardnumber: parseInt(deleteSpaces(cardnumber.value)),
    		expiredDate: expiredDate.value,
    		securityCode: securityCode.value
    	};

    	fullClientData = {
    		shippingRequisites,
    		billingRequisites,
    		cardInfo
    	};

    	console.log('client data object:', fullClientData);

    	paymentForm.style.display = 'none';
    	document.querySelector('#successMessage').style.display = 'block';
    }

});

//удаляет пробелы 
function deleteSpaces(str) {
    str = str.replace(/\s/g, '');
    return str;
}

//определяем тип карты
function getCardType(number) {
    // visa
    var re = new RegExp("^4");
    if (number.match(re) != null)
        return "Visa";

    // Mastercard 
    if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) 
        return "Mastercard";

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null)
        return "AMEX";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re) != null)
        return "Discover";

    // Diners
    re = new RegExp("^36");
    if (number.match(re) != null)
        return "Diners";

    // Diners - Carte Blanche
    re = new RegExp("^30[0-5]");
    if (number.match(re) != null)
        return "Diners - Carte Blanche";

    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (number.match(re) != null)
        return "JCB";

    // Visa Electron
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (number.match(re) != null)
        return "Visa Electron";

    return "";
}

//добавляем маску на ввод кредитки и определяем тип карты
document.addEventListener('DOMContentLoaded', function() {
    cardnumber.addEventListener('keyup', function() {
        var value = this.value;        
        if (getCardType(value) == 'Visa') {
			cardnumber.classList.add('form-input--visa');
        } else {
        	cardnumber.classList.remove('form-input--visa');
        }
        this.value = value.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ');
    }, false);
});


