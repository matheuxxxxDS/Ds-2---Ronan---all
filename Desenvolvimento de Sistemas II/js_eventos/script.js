function validar(elemento) {
    // pega o br
    var erro = elemento.nextElementSibling;
    // pega o span
    erro = erro.nextElementSibling;

    if (elemento.value == "") {
        alert("Campo não pode ficar vazio");
        elemento.style.backgroundColor = "red";
        elemento.style.color = "white";
        erro.innerHTML = "Campo obrigatório!"
    } else if (elemento.value.length < 3) {
        alert("Texto deve ter ao mesmo 3 caracteres");
        elemento.style.backgroundColor = "red";
        elemento.style.color = "white";
        erro.innerHTML = "Texto deve ter ao menos 3 caracteres!"
    } else {
        elemento.style.backgroundColor = "white";
        elemento.style.color = "black";
        erro.innerHTML = "Tudo OK!";
    }
}