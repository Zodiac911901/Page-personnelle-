document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "") {
        alert("Le champ nom ne peut pas être vide !");
        event.preventDefault();
    } else if (!email.includes("@")) {
        alert("Veuillez entrer une adresse email valide !");
        event.preventDefault();
    } else {
        alert("Formulaire soumis avec succès !");
    }
});