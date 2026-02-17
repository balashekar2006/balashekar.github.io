function openModal(img) {
  document.getElementById("imgModal").style.display = "block";
  document.getElementById("modalImg").src = img.src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

// close when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("imgModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
