const sbt = document.querySelector('button');
sbt.addEventListener('click', () => {
    validation();
})

function validation() {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var password = document.getElementById('password').value;
}
/*email.match(pattern)*/