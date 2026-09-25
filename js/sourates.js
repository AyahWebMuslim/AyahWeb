const element = document.getElementById("texte");

if (element) {
  const DIAC = "[\\u064B-\\u065F\\u0670\\u06D6-\\u06ED]*";

  function motif(lettres) {
    return lettres.split("").join(DIAC);
  }

  const formes = ["بالله", "والله", "لله", "الله", "اله", "إله"];

  const pattern = formes.map(motif).join("|");
  const regex = new RegExp(pattern, "g");

  element.innerHTML = element.innerHTML.replace(
    regex,
    '<span style="color:#c2974b;">$&</span>'
  );
}
  // ul js visible :
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".sourate button");
    const Div = document.querySelector(".sourate .div");

    button.addEventListener("click", () => {
        Div.classList.toggle("visible");

        if (Div.classList.contains("visible")) {
            button.textContent = "إخفاء الشرح";
        } else {
            button.textContent = "إظهار التفسير";
        }
    });
});