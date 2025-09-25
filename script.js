// ------------------ Theme Toggle ------------------
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function setTheme(isDark) {
  if (isDark) {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// On load
setTheme(localStorage.getItem('theme') === 'dark');

// Toggle on click
themeToggle.onclick = () => setTheme(!body.classList.contains('dark'));

// ------------------ Project Modals ------------------
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Close modal on clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if(event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// ------------------ Smooth Scroll Active Link ------------------
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop - sectionHeight/3) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.getAttribute('href') === '#' + current){
            li.classList.add('active');
        }
    });
});

// ------------------ Optional: Animate skill bars ------------------
const skillLevels = document.querySelectorAll('.skill-level');

window.addEventListener('scroll', () => {
    skillLevels.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(skillTop < windowHeight - 50) {
            skill.style.width = skill.style.width;
        }
    });
});