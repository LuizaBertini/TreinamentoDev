function populaTabela() {
    if (localStorage.getItem("produtos")) {
        
        let produtos = JSON.parse(localStorage.getItem("produtos")); // JSON.parse() - transforma um texto em array

        $("#tblProdutos tbody").html(""); // limpa a table

        produtos.forEach((produto) => {
            $("#tblProdutos tbody").append(`
            <tr>
                <td>${produto.nome}</td>
                <td>${produto.qntd}</td>
                <td>${produto.valor}</td>
                <td style="width: 20px;"><button type="button" class="btn btn-info">E</button></td>
                <td style="width: 20px;"><button type="button" class="btn btn-danger">D</button></td>
            </tr>`) // append acrescenta uma tag ou um script no html
        });
        
    }
}

$(() => {
    //Código executado no carregamento da página

    $("#btnSalvar").click(() => {

        let produto = {};
        produto.nome = $("#nmProduto").val(); // guarda o valor do id nmProduto
        produto.qntd = $("#quantidade").val();
        produto.valor = $("#vlrProduto").val();

        let listaProdutos = [];

        if (localStorage.getItem("produtos")) {
            listaProdutos = JSON.parse(localStorage.getItem("produtos"));
        }

        listaProdutos.push(produto); // insere o produto no array ListaProduto

        //localStorage.setItem("key", "efetivo valor que será armazenado"); // cookies - as informações ficam salvas até o usuário limpar o cache
        localStorage.setItem("produtos", JSON.stringify(listaProdutos)); //JSON.stringify() - tranforma o array em string

        alert("Produto salvo com sucesso!")
        
        $("#nmProduto").val("") // se for usado val(""), o conteúdo do id será "apagado" (sobrescreve o conteúdo)
        $("#quantidade").val("")
        $("#vlrProduto").val("")

        populaTabela();
    })
})