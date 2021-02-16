const criarNovaLinha = (descricao, link) => {
  const linhaNovoCliente = document.createElement("tr");
  const conteudo = `<td class="td" data-td>${descricao}</td>
    <td><a href="${link}">${link}</a></td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`;

  linhaNovoCliente.innerHTML = conteudo;
  return linhaNovoCliente;
};

const tabela = document.querySelector("[data-tabela]");

const http = new XMLHttpRequest();

http.open("GET", "http://localhost:3000/profile");
http.send();

http.onload = () => {
  const data = JSON.parse(http.response);
  data.forEach((element) => {
    tabela.appendChild(criarNovaLinha(element.descricao, element.link));
  });
};
