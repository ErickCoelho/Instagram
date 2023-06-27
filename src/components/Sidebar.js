function Sugestoes(props) {

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imgsrc} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

export default function Sidebar(props) {
    const sugestaoArray = [
        { imgsrc: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
        { imgsrc: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
        { imgsrc: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
        { imgsrc: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
        { imgsrc: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" }
    ];

    return (
        <div class="sidebar">
            <div class="usuario">
                <img src={props.imgsrc} />
                <div class="texto">
                    <strong>{props.username}</strong>
                    {props.name}
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestaoArray.map(sugestao => <Sugestoes imgsrc={sugestao.imgsrc} nome={sugestao.nome} razao={sugestao.razao} />)}

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}