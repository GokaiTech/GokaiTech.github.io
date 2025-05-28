// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.innerHTML = navbar.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    }
  });
});

// Form Submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  // Here you would typically send the data to a server
  // For demo, we'll just show an alert
  alert(
    `Terima kasih ${name}! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda melalui email ${email} mengenai layanan ${service}.`
  );

  // Reset form
  contactForm.reset();
});

// Scroll Animation
const fadeElements = document.querySelectorAll(".fade-in");

const fadeInOnScroll = () => {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Initial check
fadeInOnScroll();

// Check on scroll
window.addEventListener("scroll", fadeInOnScroll);
