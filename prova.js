function main() {
    let i, j;
    let solucio = "";
    let dibuix = "*";
    for(i = 0; i < 10; i++) {
        solucio += "</br>";
        for (j = 0; j < i; j++) {
            solucio += dibuix;
        }
    }
    document.getElementById("resultat").innerHTML = solucio;
    console.log("Hola");
}