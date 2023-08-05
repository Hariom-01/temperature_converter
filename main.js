const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

const roundToTwoDP = (num) => {
    return num.toFixed(2);
};


const celciusToFaAndKe = () => {
    const celciusTemp = parseFloat(celciusInput.value);
    const fahrenheitTemp = (celciusTemp * 1.8) + 32;
    const kelvinTemp = celciusTemp + 273.15;

    fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
    kelvinInput.value = roundToTwoDP(kelvinTemp);
};


const fahrenheitToCeAndKe = () => {
    const fahrenheitTemp = parseFloat(fahrenheitInput.value);
    const celciusTemp = (fahrenheitTemp - 32) * (5 / 9);
    const kelvinTemp = (fahrenheitTemp + 459.67) * (5 / 9);

    celciusInput.value = roundToTwoDP(celciusTemp);
    kelvinInput.value = roundToTwoDP(kelvinTemp);
};

const kelvinToCeAndFa = () => {
    constkelvinTemp = parseFloat(kelvinInput.value);
    const celciusTemp = kelvinTemp - 273;
    const fahrenheitTemp = 1.8 * (kelvinTemp - 273) + 32;

    celciusInput.value = roundToTwoDP(celciusTemp);
    fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
};


const main = () => {
    celciusInput.addEventListener('input',celciusToFaAndKe);
    fahrenheitInput.addEventListener('input', fahrenheitToCeAndKe);
    kelvinInput.addEventListener('input', kelvinToCeAndFa);
};

main();