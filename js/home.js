
function inputValue(inputId) {
    const getDedpoField = document.getElementById(inputId);
    const getDepoinput = getDedpoField.value;
    const getFloat = parseFloat(getDepoinput);
    getDedpoField.value = ' ';
    return getFloat;
}
function getElement(elementId) {
    const getPreBallenceField = document.getElementById(elementId);
    const getPreballence = getPreBallenceField.innerText;
    const getPreballtoFloat = parseFloat(getPreballence);

}

document.getElementById('deposit-button').addEventListener('click', function () {
    // get deposite field and deposite input and convert to float from string
    const getFloat = inputValue('deposite-input');

    //get previus deposite ballance and convert to float from string
    const getPreDepoField = document.getElementById('deposite-amount');
    const getDepoText = getPreDepoField.innerText;
    const gettextFloat = parseFloat(getDepoText);
    getPreDepoField.innerText = '';

    // multiple by current and previus depo ballence
    const getTotalDepo = getFloat + gettextFloat;
    getPreDepoField.innerText = getTotalDepo;

    //get previus Total Ballence and Update
    getElement('total-ballence');
    getPreBallenceField.innerText = grtTotalDepo + getPreballtoFloat;
})
