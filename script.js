var submitBnt = document.getElementById("button")

submitBnt.addEventListener("click", function () {
    // Metto un alert se l'utente non inserisce il nome del burger


    var nomeBurger = document.getElementById("name");
    var price = document.getElementById("price");
    var coupon = document.getElementById("coupon").value;
    var somma = 50


    if (!nomeBurger.value) {
        alert("Manca il nome del burger")
        return;
    }

    // coupon = ["1234frdnmi", "2342jfkkfr"]
    // console.log(coupon[1])

    // Seleziono tutti gli elementi delle checkbox
    var listaIngredienti = document.querySelectorAll(".ingredient [type='checkbox']");

    // Creo un ciclo for per aggiungere ogni ingrediente alla somma finale
    for (var i = 0; i < listaIngredienti.length; i++) {
        var ingrediente = listaIngredienti[i];

        if (ingrediente.checked) {
            somma += parseInt(ingrediente.value)
        }
    }

    // Calcolo coupon
    var sconto = 0;
    // calcolo sconto in base a coupon
    if (coupon == "1234frdnmi") {
        sconto = somma * 0.10;
    } else if (coupon == "2342jfkkfr") {
        sconto = somma * 0.20;
    } else {
        sconto = 0
    }

    // Stampo il prezzo finale
    price.innerHTML = somma - sconto


})

