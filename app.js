// Filter Projects
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const cardsContainer = document.querySelector(".cards-container");
const projectCards = document.querySelectorAll(".project-card");

// Function to calculate scroll amount based on visible cards
function getScrollAmount() {
  const firstVisibleCard = cardsContainer.querySelector(
    '.project-card:not([style*="display: none"])'
  );
  if (firstVisibleCard) {
    return firstVisibleCard.offsetWidth + 20; // Card width + gap
  }
  return 300; // Default scroll amount
}

leftArrow.addEventListener("click", () => {
  const scrollAmount = getScrollAmount();
  cardsContainer.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

rightArrow.addEventListener("click", () => {
  const scrollAmount = getScrollAmount();
  cardsContainer.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // Reset scroll position after filtering
    cardsContainer.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  });
});

// Contact Form Submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});
// Scroll-to-Top Button
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    // Add the 'visible' class to show the button
    scrollToTopButton.classList.add("visible");
  } else {
    // Remove the 'visible' class to hide the button
    scrollToTopButton.classList.remove("visible");
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//responsive nav
let isMenuOpen = false;
const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");

// Function to toggle the menu
function navController() {
  isMenuOpen = !isMenuOpen;
  menu.style.display = isMenuOpen ? "block" : "none";
  hamburger.innerHTML = isMenuOpen ? "x" : "&#9776;";
}

// Close the menu when a link is clicked
const navLinks = document.querySelectorAll("#menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (isMenuOpen) {
      navController(); // Close the menu
    }
  });
});
// extra animation respons
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute("href"); // Get the target section ID
    const targetSection = document.querySelector(targetId); // Find the target section
    targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section

    if (isMenuOpen) {
      navController(); // Close the menu
    }
  });
});
////
// projectCards
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  // Filter functionality
  const filterProjects = (filter) => {
    projectCards.forEach((card) => {
      const category = card.dataset.category;
      if (filter === "all" || filter === category) {
        card.style.display = "block";
        setTimeout(() => (card.style.opacity = "1"), 50);
      } else {
        card.style.opacity = "0";
        setTimeout(() => (card.style.display = "none"), 300);
      }
    });
  };

  // Button click handler
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      filterProjects(button.dataset.filter);
    });
  });

  // Initial show all projects
  filterProjects("all");
});
// end
// testimonial
const testimonialwrapper = document.querySelector(".testimonial-wrapper");

testimonialwrapper.addEventListener("mouseenter", () => {
  testimonialwrapper.style.animationPlayState = "paused";
});

testimonialwrapper.addEventListener("mouseleave", () => {
  testimonialwrapper.style.animationPlayState = "running";
});
// end
// our partner
const partnersTrack = document.querySelector(".partners-track");

partnersTrack.addEventListener("mouseenter", () => {
  partnersTrack.style.animationPlayState = "paused";
});

partnersTrack.addEventListener("mouseleave", () => {
  partnersTrack.style.animationPlayState = "running";
});
//  counting no
// Function to check if an element is in the viewport
// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to animate the counting numbers
function animateCounters() {
  const counters = document.querySelectorAll(".designify-stat-number");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target"); // Get the target number
    const duration = 2000; // Animation duration in milliseconds
    const increment = target / (duration / 16); // Calculate increment per frame (60fps)

    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current); // Round up to the nearest integer
        requestAnimationFrame(updateCounter); // Continue the animation
      } else {
        counter.textContent = target + ""; // Ensure it ends exactly at the target number with a + sign
      }
    };

    if (isInViewport(counter)) {
      updateCounter();
    }
  });
}

// Trigger the animation when the user scrolls
window.addEventListener("scroll", animateCounters);

// Trigger the animation on page load if the section is already in view
window.addEventListener("load", animateCounters);


// >>>>>
// new 













