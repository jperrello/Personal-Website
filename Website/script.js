document.addEventListener("DOMContentLoaded", () => {
    // Fade-in animation for the main sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("fade-in");
    });
  
    // Highlight effect for portfolio cards
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("highlight");
      });
      card.addEventListener("mouseleave", () => {
        card.classList.remove("highlight");
      });
    });
  });
  