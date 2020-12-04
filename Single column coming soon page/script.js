const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault('');

    // check for email validation
    const email = form['email'];
    const emailValue = email.value;
    const small = form.querySelector('small');

    if (!emailValue) {
        // say it is empty
        email.classList.add('error');
        small.innerText = 'Please provide a valid email address!';
        small.style.display = 'inline-block';
    } else if (!isvalidEmail(emailValue)) {
        // Say it is invalid
        email.classList.add('error');
        small.innerText = 'Email address is invalid!!';
        small.style.display = 'inline-block';
    } else {
        // submit it
        email.classList.remove('error');
        small.innerText = '';
        small.style.display = 'none';
    }
});

function isvalidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}