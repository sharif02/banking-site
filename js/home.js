function inputValue(inputId) {
    const getDedpoField = document.getElementById(inputId);
    const getDepoinput = getDedpoField.value;
    const getFloat = parseFloat(getDepoinput);
    getDedpoField.value = '';
    return getFloat;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    //call function
    const setFlotvalue = inputValue('deposite-input');

    const getPreDepoField = document.getElementById('deposite-amount');
    const getPreDepoValue = getPreDepoField.innerText;
    const setPrevaluefloat = parseFloat(getPreDepoValue);

    const totalDepoAmount = setFlotvalue + setPrevaluefloat;
    getPreDepoField.innerText = totalDepoAmount;

    // get PreTotal Ballance and multiple by depoAmount
    const getPreTotal = document.getElementById('total-ballence');
    const getpreTotalValue = getPreTotal.innerText;
    const setFloatPreValue = parseFloat(getpreTotalValue);

    const updateTotalBallence = setFloatPreValue + setFlotvalue;
    getPreTotal.innerText = updateTotalBallence;

    getDepofield.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    //call 
    const setwithdovalue = inputValue('withdraw-input');

    const getPrewithdoField = document.getElementById('withdraw-amount');
    const getPrewithdoValue = getPrewithdoField.innerText;
    const setPrevaluefloat = parseFloat(getPrewithdoValue);

    const totalwithdoAmount = setwithdovalue + setPrevaluefloat;
    getPrewithdoField.innerText = totalwithdoAmount;

    // get withdoTotal Ballance and multiple by PreTotalBallence
    const getPreTotal = document.getElementById('total-ballence');
    const getpreTotalValue = getPreTotal.innerText;
    const setFloatPreValue = parseFloat(getpreTotalValue);

    const updateTotalBallence = setFloatPreValue - setwithdovalue;
    getPreTotal.innerText = updateTotalBallence;

    getWithdofield.value = ' ';
})