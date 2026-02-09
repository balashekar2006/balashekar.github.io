document.querySelectorAll(".journey-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 40px rgba(56, 189, 248, 0.25)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});
