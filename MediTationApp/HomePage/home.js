window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      document.querySelector('.main-content').style.display = 'block';
    }, 2000); 
    
    const user = JSON.parse(localStorage.getItem('user'));
    const signupBtn = document.querySelector('.signup-btn');

    if (user && user.name) {
      signupBtn.textContent = `Hi ${user.name}`;
    } else {

      alert('Please sign up to access more features!');
  }

    
  });

  document.getElementById('menuIcon').addEventListener('click', function() {
    const sideNavbar = document.getElementById('sideNavbar');
    sideNavbar.classList.toggle('open');
});

const greeting = document.getElementById("greeting");

function setGreeting() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    greeting.textContent = "Good morning, ";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon, ";
  } else {
    greeting.textContent = "Good evening, ";
  }
}
setGreeting();

const Mname = document.getElementById("name");

function getName() {
  if (localStorage.getItem("name") === null) {
    Mname.textContent = " [Enter name]";
  } else {
    Mname.textContent = localStorage.getItem("name");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      Mname.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

Mname.addEventListener("keypress", setName);
Mname.addEventListener("blur", setName);
getName();


const text = [
  "You matter.",
  "You're awesome!",
  "You did great today!",
  "I believe in you!",
  "You are loved!",
  "You are worthy",
  "Keep going!",
  "Make it happen.",
  "Be a light.",
  "Know your worth.",
  "Things will get better",
  "Be good. Do good.",
  "Follow your heart.",
  "Stay hopeful!",
  "You are strong!",
  "Protect your peace.",
  "You are HandSome!",
  "Keep on fighting!",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 5000);
})();


document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains("active");

            accordionButtons.forEach(btn => {
                btn.classList.remove("active");
                btn.nextElementSibling.style.maxHeight = null;
            });

            if (!isActive) {
                this.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

const modalBtn = document.getElementById("modal-Button");
const modalBg = document.querySelector(".modal-bg");
const close = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("modal-active");
});
close.addEventListener("click", () => {
  modalBg.classList.remove("modal-active");
});
