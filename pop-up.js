const openPopup = document.querySelector(".open-popup");
const backdrop = document.querySelector(".backdrop");
const closePopup = document.querySelector(".close-popup");

openPopup.addEventListener("click", () => {
  backdrop.style.display = "block";
});
closePopup.addEventListener("click", () => {
  backdrop.style.display = "none";
});
backdrop.addEventListener("click", (e) => {
  if (e.target.className === "drop") {
    backdrop.style.display = "none";
  }
});
