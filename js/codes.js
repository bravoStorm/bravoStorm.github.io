function changeDropListHeader(){
    let x = $("#headerNav");
    if(x.css("display") === "none"){
        x.css("display","block")
    }else{
        x.css("display", "none")
    }
}



async function startCarrossel(){
    const carrosselItens = {
        bombeiro: {"titulo":"Bombeiro Civil","path":"images/carrosselBombeiro.jpg", "num":1, "conteudo": "Nossos bombeiros civis são treinados rigorosamente para garantir a qualidade e exclência aos nossos clientes, colaboradores e do patrimônio."},
        enfermeira: {"titulo":"Enfermeiro","path":"images/carrosselEnfermeira.jpg", "num":2, "conteudo": ""},
        tecnico: {"titulo":"Téc. Segurança do Trabalho","path":"images/carrosselTecnico.jpeg", "num":3, "conteudo": ""}
    };
    
    $("#carrosselImage").attr("src", carrosselItens.bombeiro["path"]);
    $("#tituloCarrossel").text(carrosselItens.bombeiro["titulo"]);
    $("#conteudoCarrossel").text(carrosselItens.bombeiro["conteudo"]);
    $("#tipoCotacao").attr("value",carrosselItens.bombeiro["titulo"]);
    while (true) {
        await new Promise(r => setTimeout(r, 6000));
        $("#carrosselImage").attr("src", carrosselItens.enfermeira["path"]);
        $("#tituloCarrossel").text(carrosselItens.enfermeira["titulo"]);
        $("#conteudoCarrossel").text(carrosselItens.enfermeira["conteudo"]);
        $("#tipoCotacao").attr("value", carrosselItens.enfermeira["titulo"]);

        await new Promise(r => setTimeout(r, 6000));
        $("#carrosselImage").attr("src", carrosselItens.tecnico["path"]);
        $("#tituloCarrossel").text(carrosselItens.tecnico["titulo"]);
        $("#conteudoCarrossel").text(carrosselItens.tecnico["conteudo"]);
        $("#tipoCotacao").attr("value",carrosselItens.tecnico["titulo"]);

        await new Promise(r => setTimeout(r, 6000));
        $("#carrosselImage").attr("src", carrosselItens.bombeiro["path"]);
        $("#tituloCarrossel").text(carrosselItens.bombeiro["titulo"]);
        $("#conteudoCarrossel").text(carrosselItens.bombeiro["conteudo"]);
        $("#tipoCotacao").attr("value",carrosselItens.bombeiro["titulo"]);
    }

}

window.onload = () =>{ startCarrossel()};