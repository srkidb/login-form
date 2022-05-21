const forma = document.querySelector('#forma');
let dugme = document.querySelector('#dugme-submit');

let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

forma.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = document.querySelector('#floatingInput').value;
    let password = document.querySelector('#floatingPassword').value;
    login(email, password);

});

function login(email, password) {
    if (mailFormat.test(email)) {
        if (password != "") {
            if ((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/).test(password)) {
                document.getElementById("forma").reset();
                document.querySelector('#error-text').innerHTML = "Successfully signed in, thank you!";    
            } else {
                document.querySelector('#error-text').innerHTML = "Password must be between 6 and 20 characters, contain uppercase and lowercase, one number and one special character!";
            }
        } else {
            document.querySelector('#error-text').innerHTML = "Password cannot be blank!"; 
        }
    } else {
        document.querySelector('#error-text').innerHTML = "Please enter valid email address!";
    }
}
dugme.addEventListener('click', login);

function showPass() {
    let x = document.getElementById('floatingPassword');
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
