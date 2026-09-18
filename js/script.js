function ajouterAuPanier(btn) {

    const card = btn.parentElement;

    const image = card.querySelector("img").src;
    const texte = card.querySelector(".price").innerText;

    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    panier.push({
        image: image,
        texte: texte
    });

    localStorage.setItem("panier", JSON.stringify(panier));

    alert("تمت إضافة المنتج إلى السلة");
    window.location.href = "table.html";
}

