window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      document.querySelector('.main-content').style.display = 'block';
    }, 2000); 
  });

  document.getElementById('menuIcon').addEventListener('click', function() {
    const sideNavbar = document.getElementById('sideNavbar');
    sideNavbar.classList.toggle('open');
});