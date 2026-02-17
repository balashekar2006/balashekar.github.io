document.querySelectorAll(".journey-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 40px rgba(56, 189, 248, 0.25)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".note-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeBtn.onclick = () => modal.style.display = "none";

modal.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
};
