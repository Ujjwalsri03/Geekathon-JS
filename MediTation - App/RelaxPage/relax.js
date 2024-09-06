window.addEventListener('load', () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const signupBtn = document.querySelector('.signup-btn');

  if (user && user.name) {
      signupBtn.textContent = `Hi ${user.name}`;
  } else {
      alert('Please sign up to access more features!');
  }
  
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      document.querySelector('.main-content').style.display = 'block';
    }, 2000); 
  });

  document.getElementById('menuIcon').addEventListener('click', function() {
    const sideNavbar = document.getElementById('sideNavbar');
    sideNavbar.classList.toggle('open');
});