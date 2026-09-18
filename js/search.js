function filtrerListe() {
    let saisie = document.getElementById('searchInput').value;

    let liste = document.getElementById('itemList');
    let elements = liste.getElementsByTagName('li');

    for (let i = 0; i < elements.length; i++) {
        let texteElement = elements[i].textContent || elements[i].innerText;

        if (texteElement.indexOf(saisie) > -1) {
            elements[i].style.display = "";
        } else {
            elements[i].style.display = "none";
        }
    }
}

document.getElementById('searchInput').addEventListener('keyup', filtrerListe);