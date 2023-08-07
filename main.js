const form = document.getElementById("formulario");

function validaInput(a,b){
    return b > a
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    let numeroA = document.getElementById("numero-a").value;
    let numeroB = document.getElementById("numero-b").value;

    if (!validaInput(numeroA, numeroB)){
        alert("Errado!");
    } else{
        alert("Boa, o B é maior que A!");
    }
})
