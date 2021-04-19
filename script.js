var submitBnt = document.getElementById("button")

submitBnt.addEventListener("click", function () {

    var nomeBurger = document.getElementById("name");
    var price = document.getElementById("price");
    var coupon = document.getElementById("coupon");
    var somma = 50

    coupon = somma*0.10

    // Seleziono tutti gli elementi delle checkbox
    var listaIngredienti = document.querySelectorAll(".ingredient [type='checkbox']");

    // Creo un ciclo for per aggiungere ogni ingrediente alla somma finale
    for (var i = 0; i < listaIngredienti.length; i++) {
        var ingrediente = listaIngredienti[i];

        if (ingrediente.checked) {
            somma += parseInt(ingrediente.value)
        } 
    }
    // Stampo il prezzo finale
    price.innerHTML = somma

    // Metto un alert se l'utente non inserisce il nome del burger

    if (!nomeBurger.value) {
        alert("Manca il nome del burger")
    }
})

