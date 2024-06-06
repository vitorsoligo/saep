function redirecionar() {
    if (document.getElementById('aluno').checked) {
        window.location.href = "aluno.html";
    }  else if (document.getElementById('biblioteca').checked) {
        window.location.href = "biblioteca.html";
    } else{
        alert("Por favor, selecione uma opção.")
    }
}