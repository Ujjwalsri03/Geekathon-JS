window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.querySelector('.form-container').style.display = 'block';
    }, 2000); 
});

function toggleForms() {
    document.getElementById('sign-up-form').classList.toggle('hidden');
    document.getElementById('sign-in-form').classList.toggle('hidden');
}

// Sign Up function
function signUp() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password) {
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Sign Up Successful! Please Sign In.');
        toggleForms();
    } else {
        alert('Please fill in all fields.');
    }
}

// Sign In function
function signIn() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert(`Welcome back, ${user.name}!`);
        document.querySelectorAll('#sign-in-form input, #sign-in-form div, .toggle-link, #sign').forEach(el => el.classList.add('hidden'));
        document.getElementById('redirect-link').classList.remove('hidden');
    } else {
        alert('Incorrect email or password. Please try again.');
    }
}
