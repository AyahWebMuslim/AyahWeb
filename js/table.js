window.onload = function() {
    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    let tbody = document.getElementById("contenu-panier");

    if (panier.length === 0) {
        tbody.innerHTML = "<tr><td colspan='2'>السلة فارغة حالياً</td></tr>";
        return;
    }

    panier.forEach(function(produit) {
        let ligne = document.createElement("tr");

        ligne.innerHTML = `
            <td>
                <img src="${produit.image}" 
                     style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; display: block; margin: 0 auto;" 
                     alt="produit">
            </td>
            <td>${produit.texte}</td>
        `;

        tbody.appendChild(ligne);
    });
};

        function viderPanier() {
            if(confirm("هل أنت متأكد من أنك تريد تفريغ السلة؟")) {
                localStorage.removeItem("panier");
                location.reload();
            }
        }
function acheter() {
    window.location.href = "buy.html";
}
