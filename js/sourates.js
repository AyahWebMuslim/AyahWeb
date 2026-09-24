const element = document.getElementById("texte");

element.innerHTML = element.innerHTML.replaceAll(
  "اللَّهِ",
  '<span style="color:#c2974b;">اللَّهِ</span>');
element.innerHTML = element.innerHTML.replaceAll(
  "اللَّهُ",
  '<span style="color:#c2974b;">اللَّهُ</span>');
element.innerHTML = element.innerHTML.replaceAll(
  "اللّهَ",
  '<span style="color:#c2974b;">اللَّهَ</span>');
  element.innerHTML = element.innerHTML.replaceAll(
  "إِلَٰهِ",
  '<span style="color:#c2974b;">إِلَٰهِ</span>');
  // ul js visible :
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".sourate button");
    const Div = document.querySelector(".sourate .div");

    button.addEventListener("click", () => {
      Div.classList.toggle("visible");
    });
});