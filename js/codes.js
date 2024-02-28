function changeDropListHeader(){
    let x = $("#headerNav");
    if(x.css("display") === "none"){
        x.css("display","block");
    }else{
        x.css("display", "none");
    }
}



async function startCarrossel(){
    const carrosselItens = {
        bombeiro: {"titulo":"Bombeiro Civil","path":"images/carrosselBombeiro.jpg", "num":1, "conteudo": "Nossos bombeiros civis são treinados rigorosamente para garantir a qualidade e excelência aos nossos clientes, colaboradores e do patrimônio."},
        enfermeira: {"titulo":"Enfermeiro","path":"images/carrosselEnfermeira.jpg", "num":2, "conteudo": "Nossos enfermeiros possuem capacitação para lidar com situações de risco, de maneira ágil, prática e precisa, com o objetivo de preservar a integridade e o bem-estar dos nossos clientes."},
        tecnico: {"titulo":"Téc. Segurança do Trabalho","path":"images/carrosselTecnico.jpeg", "num":3, "conteudo": "Nossos profissionais de segurança do trabalho são capacitados para oferecer a solução mais adequada e avaliar os riscos, garantindo a integridade de seu patrimônio e a segurança de seus funcionários."}
    };
    
    $("#carrosselImage").attr("src", carrosselItens.bombeiro["path"]);
    $("#carrosselImage").attr("alt", "Imagem de um Bombeiro")
    $("#tituloCarrossel").text(carrosselItens.bombeiro["titulo"]);
    $("#conteudoCarrossel").text(carrosselItens.bombeiro["conteudo"]);
    $("#tipoCotacao").attr("value",carrosselItens.bombeiro["titulo"]);
    while (true) {
        await new Promise(r => setTimeout(r, 6000));
        $("#carrosselImage").attr("src", carrosselItens.enfermeira["path"]);
        $("#carrosselImage").attr("alt", "Imagem de uma Enfermeira")
        $("#tituloCarrossel").text(carrosselItens.enfermeira["titulo"]);
        $("#conteudoCarrossel").text(carrosselItens.enfermeira["conteudo"]);
        $("#tipoCotacao").attr("value", carrosselItens.enfermeira["titulo"]);

        await new Promise(r => setTimeout(r, 6000));
        $("#carrosselImage").attr("src", carrosselItens.tecnico["path"]);
        $("#carrosselImage").attr("alt", "Imagem de um Técnico de segurança do trabalho")
        $("#tituloCarrossel").text(carrosselItens.tecnico["titulo"]);
        $("#conteudoCarrossel").text(carrosselItens.tecnico["conteudo"]);
        $("#tipoCotacao").attr("value",carrosselItens.tecnico["titulo"]);

        await new Promise(r => setTimeout(r, 6000));
        $("#carrosselImage").attr("src", carrosselItens.bombeiro["path"]);
        $("#carrosselImage").attr("alt", "Imagem de um Bombeiro")
        $("#tituloCarrossel").text(carrosselItens.bombeiro["titulo"]);
        $("#conteudoCarrossel").text(carrosselItens.bombeiro["conteudo"]);
        $("#tipoCotacao").attr("value",carrosselItens.bombeiro["titulo"]);
    }

}

function showCotacao(){
    // $("body").css("filter", "blur(10px)");
    $("#cotacaoBox").css("display", "block");

    if($("#tituloCarrossel").text () === "Bombeiro Civil"){
        $("#optBC").attr("selected","");
    }if($("#tituloCarrossel").text () === "Enfermeiro"){
        $("#optEnf").attr("selected","");
    }if($("#tituloCarrossel").text () === "Téc. Segurança do Trabalho"){
        $("#optTST").attr("selected","");
    }


}

function closeCotacao(){
    $("#cotacaoBox").css("display", "none");
}

function goToCotacao(){
    document.getElementById("cotacaoBox").scrollIntoView();
    showCotacao();
}

function goToNav(id){
    document.getElementById(id).scrollIntoView();

}


window.onload = () =>{ startCarrossel()};