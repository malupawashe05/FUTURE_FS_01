const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll('section');

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const navbar = document.getElementsByClassName("navbar")[0];
window.addEventListener("scroll",() =>{
    if(window.scrollY > 60){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove("scrolled");
    }
}) ;

const togglebtn = document.getElementById('togglebtn');

togglebtn.addEventListener("click", () => {
    const page = document.querySelector(".page-content");
    const navbar = document.querySelector("nav");
    page.classList.toggle("dark");
  
    navbar.classList.toggle("bg-dark");
    navbar.classList.toggle("navbar-dark");
    navbar.classList.toggle("bg-light");
    navbar.classList.toggle("navbar-light");

    const navLinks = navbar.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        if (page.classList.contains("dark")) {
            link.style.color = "white";
        } else {
            link.style.color = "";
        }
    });
  togglebtn.innerText = togglebtn.innerText === "Light" ? "Dark" : "Light";
});


document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const items = Array.from(document.querySelectorAll(".content-item"));

  if (!searchInput || items.length === 0) return;

  searchInput.addEventListener("input", function () {
    const value = searchInput.value.trim().toLowerCase();
    let firstMatchIndex = -1;

    for (let i = 0; i < items.length; i++) {
      const title = items[i].dataset.title?.toLowerCase() || "";
      if (value && title.includes(value)) {
        firstMatchIndex = i;
        break;
      }
    }

    items.forEach((item, index) => {
      if (!value) {
        item.style.display = "";
      } else if (firstMatchIndex !== -1 && index >= firstMatchIndex) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_qjjb0al",
    "template_feg2za9",
    this
  ).then(() => {
    alert("Message sent successfully!");
    this.reset();
  }, (error) => {
    alert("Failed to send message");
    console.error(error);
  });
});

