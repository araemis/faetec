document.getElementById('cadastroAtleta').addEventListener('submit', function(event) {
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    let sexo = document.querySelector('input[name="sexo"]:checked');
    let estado = document.getElementById('estado').value;
    let email = document.getElementById('email').value;

    if (!nome || !sexo || !estado || !email) {
        alert('Todos os campos obrigatórios devem ser preenchidos.');
        return;
    }

    alert('Formulário enviado com sucesso!');
});

