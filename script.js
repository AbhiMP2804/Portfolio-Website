
// =====================
// Responsive Navbar Toggle
// =====================
const nav = document.querySelector("nav");
const navList = nav.querySelector("ul");
const menuToggle = document.createElement("button");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰"; // Hamburger icon
nav.insertBefore(menuToggle, navList);

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// =====================
// Skills Section Animation on Load
// =====================
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".skill-category");

  categories.forEach((category, index) => {
    // Set initial hidden state
    category.style.opacity = 0;
    category.style.transform = "translateY(40px)";

    // Reveal each category with a staggered animation
    setTimeout(() => {
      category.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      category.style.opacity = 1;
      category.style.transform = "translateY(0)";
    }, 300 + index * 200);
  });
});


// =====================
// Timeline Experience Section Scroll Animation
// =====================

window.addEventListener('DOMContentLoaded', () => {
  filterExperience('2025'); // Show 2025 experience by default
});

function filterExperience(year) {
  const timelines = document.querySelectorAll('.timeline');
  const items = document.querySelectorAll('.timeline-item');
  const buttons = document.querySelectorAll('.year-selector button'); // Get all year buttons
  
  // Remove 'selected' class from all timelines and buttons
  timelines.forEach(timeline => timeline.classList.remove('selected'));
  buttons.forEach(button => button.classList.remove('selected'));

  // Add 'selected' class to the timeline and button for the clicked year
  const selectedTimeline = document.querySelector(`.timeline[data-year="${year}"]`);
  if (selectedTimeline) {
    selectedTimeline.classList.add('selected');
  }

  const selectedButton = Array.from(buttons).find(button => button.textContent.includes(year));
  if (selectedButton) {
    selectedButton.classList.add('selected');
  }

  // Show/Hide timeline items based on selected year
  items.forEach(item => {
    const itemYear = item.closest('.timeline').getAttribute('data-year');

    if (year === 'all' || itemYear === year) {
      item.style.display = 'block';
      requestAnimationFrame(() => {
        item.classList.remove('show');
        void item.offsetWidth; // force reflow
        item.classList.add('show');
      });
    } else {
      item.style.display = 'block'; // Ensure all items are visible
    }
  });
}




// =====================
// Certificate Carousel
// =====================
const certificates = [
  {
    src: "assets/java.png",
    title: "Java"
  },
  {
    src: "assets/python.png",
    title: "Python - Hackerrank"
  },
  {
    src: "assets/SQL.png",
    title: "SQL"
  },
  {
    src: "assets/problem solving.png",
    title: "Problem - Solving"
  },
  {
    src: "assets/python dsa.jpeg",
    title: "Data Structures with Python"
  },
  {
    src: "assets/Python Programming.jpeg",
    title: "Python Fundamentals - Coursera"
  },
  {
    src: "assets/Graph Theory.jpeg",
    title: "Introduction to Graph Theory"
  },
  {
    src: "assets/SE Intern.png",
    title: "Software Engineer Intern"
  },
  {
    src: "assets/BE Paper.png",
    title: "Published paper “This-Abled: An aid to get Paid”"
  }
];

let currentIndex = 0;

// Update the certificate display
function updateCert() {
  const image = document.getElementById("certificateImage");
  const title = document.getElementById("certTitle");

  // Fade out before switching
  image.style.opacity = 0;

  setTimeout(() => {
    image.src = certificates[currentIndex].src;
    image.alt = certificates[currentIndex].title + " Certificate";
    title.textContent = certificates[currentIndex].title;
    image.style.opacity = 1;
  }, 200); // Match fade transition duration
}

// Show next certificate
function nextCert() {
  currentIndex = (currentIndex + 1) % certificates.length;
  updateCert();
}

// Show previous certificate
function prevCert() {
  currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
  updateCert();
}

// Initialize certificates on page load
document.addEventListener("DOMContentLoaded", updateCert);


// =====================
// Projects
// =====================

document.getElementById("showMoreBtn").addEventListener("click", () => {
  const moreSection = document.getElementById("moreProjects");
  const showMoreBtn = document.getElementById("showMoreBtn");

  const isHidden = moreSection.classList.contains("hidden");

  if (isHidden) {
    moreSection.classList.remove("hidden");      // make it visible first
    setTimeout(() => {
      moreSection.classList.add("show");         // then fade in
    }, 10);
    showMoreBtn.textContent = "Show Less";
  } else {
    moreSection.classList.remove("show");        // start fade out
    setTimeout(() => {
      moreSection.classList.add("hidden");       // hide after animation
    }, 400);                                      // match CSS transition duration
    showMoreBtn.textContent = "Show More";
  }
});


// =====================
// Dark/Light Mode Toggle
// =====================
const themeToggleBtn = document.getElementById("themeSwitch");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark" || (prefersDark && !storedTheme)) {
  document.body.classList.add("dark");
  themeToggleBtn.textContent = "☀️";
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
});
