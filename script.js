function sendEmail() {
    window.location.href = "mailto:balashekar202@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Balashekar,";
}

window.onload = () => {
    document.getElementById("loader").style.display = "none";
};
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


const text = "Balashekar";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

typeEffect();

const sections = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            section.classList.add("show");
        }
    });
});

function toggleTheme() {
    document.body.classList.toggle("light");
}
const heroTestimonials = [
    {
        text: "“Balashekar is a dedicated learner with strong problem-solving skills and a strong passion for development.”",
        author: "— Technical Mentor"
    },
    {
        text: "“He shows excellent understanding of Java and web technologies with a creative mindset.”",
        author: "— Project Guide"
    },
    {
        text: "“A fast learner who delivers clean, structured, and professional work.”",
        author: "— Team Member"
    }
];

let testimonialIndex = 0;

setInterval(() => {
    const testimonial = heroTestimonials[testimonialIndex];
    document.getElementById("heroTestimonial").textContent = testimonial.text;
    document.querySelector(".hero-testimonial span").textContent = testimonial.author;

    testimonialIndex = (testimonialIndex + 1) % heroTestimonials.length;
}, 4000);


const thankYouSection = document.getElementById("thankYouSection");

window.addEventListener("scroll", () => {
    const sectionPosition = thankYouSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        thankYouSection.classList.add("show");
    }
});
// Simple fade-in animation on scroll
const skillCards = document.querySelectorAll(".skill-card");

const revealSkills = () => {
  skillCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
};

skillCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealSkills);
revealSkills();


