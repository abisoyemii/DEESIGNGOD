document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // Smooth Scrolling
  // ===============================
  const smoothScroll = (selector, offset = 0) => {
    document.querySelectorAll(selector).forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
          });
        }
      });
    });
  };
  smoothScroll(".link, .link2, .link3", 70);
  smoothScroll(".first-button, #learn");

  // ===============================
  // Hero Fade-Up Animation
  // ===============================
  const fadeElements = document.querySelectorAll(".run, .context, .first-button, .second-write");
  fadeElements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 300 + index * 200);
  });

  // ===============================
  // Testimonial Close Button
  // ===============================
  const closeBtn = document.querySelector(".close-icon");
  const testimonial = document.querySelector(".glass-block");
  if (closeBtn && testimonial) {
    closeBtn.addEventListener("click", () => {
      testimonial.style.display = "none";
    });
  }

  // ===============================
  // Contact Form Validation
  // ===============================
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = Object.fromEntries(new FormData(contactForm).entries());
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        alert("Please fill in all fields.");
        return;
      }
      if (!validateEmail(formData.email)) {
        alert("Please enter a valid email.");
        return;
      }
      alert("Message sent successfully! (Demo mode)");
      contactForm.reset();
    });
  }

  // ===============================
  // Newsletter Demo
  // ===============================
  const newsletterButton = document.querySelector(".newsletter button");
  const newsletterInput = document.querySelector(".newsletter input");
  if (newsletterButton && newsletterInput) {
    newsletterButton.addEventListener("click", () => {
      const email = newsletterInput.value.trim();
      if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
      }
      alert(`Thank you for subscribing! (Demo: ${email})`);
      newsletterInput.value = "";
    });
  }

  // ===============================
  // Portfolio Lightbox
  // ===============================
  document.querySelectorAll(".portfolio-card").forEach(card => {
    const btn = card.querySelector(".project-btn");
    const media = card.querySelector("img, video");
    if (btn && media) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openLightbox(media);
      });
    }
  });

  // ===============================
  // Social Icons Hover Animation
  // ===============================
  document.querySelectorAll(".social-icons a, .handles-div img").forEach(icon => {
    icon.addEventListener("mouseenter", () => icon.style.transform = "scale(1.15)");
    icon.addEventListener("mouseleave", () => icon.style.transform = "scale(1)");
  });

  // ===============================
  // Helper Functions
  // ===============================
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function openLightbox(media) {
    const lightbox = document.createElement("div");
    lightbox.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.85);
      display: flex; align-items: center; justify-content: center;
      z-index: 9999;
      cursor: pointer;
    `;
    let clone;
    if (media.tagName === "IMG") {
      clone = media.cloneNode();
      clone.style.maxWidth = "90%";
      clone.style.maxHeight = "90%";
    } else if (media.tagName === "VIDEO") {
      clone = media.cloneNode(true);
      clone.controls = true;
      clone.autoplay = true;
      clone.muted = true; // required for autoplay in some browsers
      clone.style.maxWidth = "90%";
      clone.style.maxHeight = "90%";
    }
    lightbox.appendChild(clone);
    document.body.appendChild(lightbox);
    lightbox.addEventListener("click", () => document.body.removeChild(lightbox));
  }

  // ===============================
  // Mobile Hamburger Menu
  // ===============================
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

});
