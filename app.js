// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Captura o campo de entrada
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

    // Valida se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome."); // Exibe um alerta se o campo estiver vazio
        return; // Interrompe a execução da função
    }

    amigos.push(nomeAmigo); // Adiciona o nome ao array de amigos
    inputAmigo.value = ""; // Limpa o campo de entrada
    atualizarListaAmigos(); // Atualiza a lista de amigos exibida na página
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); // Captura o elemento da lista
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    // Percorre o array de amigos e adiciona cada nome à lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = amigo; // Define o texto do <li> como o nome do amigo
        listaAmigos.appendChild(li); // Adiciona o <li> à lista
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) { // Verifica se há nomes na lista
        alert("Adicione pelo menos um amigo para sortear."); // Exibe um alerta se a lista estiver vazia
        return; // Interrompe a execução da função
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    const amigoSorteado = amigos[indiceSorteado]; // Obtém o nome sorteado

    const resultado = document.getElementById('resultado'); // Captura o elemento de resultado
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`; // Exibe o resultado
}

