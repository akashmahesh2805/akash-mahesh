document.addEventListener("DOMContentLoaded", () => {
    const headerOffset = 100; // Adjust to match your fixed navbar height
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    const searchInput = document.getElementById("searchInput");
    const projectCards = document.querySelectorAll(".project-card");
  
    // Smooth scroll with offset
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
  
        if (target) {
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      });
    });
  
    // Search filter for projects
    if (searchInput && projectCards.length > 0) {
      searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();
  
        projectCards.forEach(card => {
          const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
          const description = card.querySelector("p")?.textContent.toLowerCase() || "";
  
          const matches = title.includes(query) || description.includes(query);
          card.style.display = matches ? "block" : "none";
        });
      });
    }
  });
  