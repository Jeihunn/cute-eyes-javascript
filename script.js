const eyes = document.querySelectorAll(".eye");
const pupils = document.querySelectorAll(".pupil");

document.addEventListener("mousemove", (event) => {
  const mouseX = (event.clientX * 100) / window.innerWidth + "%";
  const mouseY = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < eyes.length; i++) {
    pupils[i].style.left = mouseX;
    pupils[i].style.top = mouseY;
    pupils[i].style.transform = `translate(-${mouseX}, -${mouseY})`;
    pupils[i].style.transition = "transform 0.001s ease-in-out";
  }
});
