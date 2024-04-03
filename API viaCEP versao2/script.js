function PesquisarCEP() {

    const cep = document.getElementById('cepInput').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const requisicaoHttp = new XMLHttpRequest();
    requisicaoHttp.open("GET", url, false);
    requisicaoHttp.send(null);

    const endereco = JSON.parse(requisicaoHttp.responseText);

   
        exibirEndereco(endereco);
}


function exibirEndereco(endereco) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Logradouro:</strong> ${endereco.logradouro}</p>
        <p><strong>Bairro:</strong> ${endereco.bairro}</p>
        <p><strong>Cidade:</strong> ${endereco.localidade}</p>
        <p><strong>Estado:</strong> ${endereco.uf}</p>
        <p><strong>IBGE:</strong> ${endereco.ibge}</p>
    `;
}


