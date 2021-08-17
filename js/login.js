
// login button listener 
document.getElementById("login").addEventListener('click', function () {
    // get user name field and text
    const getUserField = document.getElementById('getUserName');
    const getUserName = getUserField.value;

    // get user pass field and pass
    const getPassField = document.getElementById('getPass');
    const getPassword = getPassField.value;

    // login condition
    if (getUserName == 'Sharif@gmail.com' && getPassword == 'sharif') {
        window.location.href = 'home.html';
    }
    else {
        console.log('pass incorect');
    }
})
//login button listener end
