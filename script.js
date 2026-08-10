const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Ao sair da escola, Davi vê um parque cheio de lixo e pens no impacto disso para a naturea. O que ele decide?",
    alternativas: [
        "Cuidar do meio ambiente é responsabilidade de todos.",
        "Pequenas atitudes não fazem, diferença para o meio ambiente."
    ]
},
{
    enunciado: "Depois de aprender sobre a preservação da natureza, a professora pede que Davi proponha uma ação para reduzir o lixo na escola. Qual atitude Davi toma?",
    alternativas: [
        "Organiza uma campanha de reciclagem com a turma.",
        "Decide não participar da campanha porque acredita que não fará dirença."
    ]
},
{
    enunciado: "Depois de Davi participoude um projeto sobre preservação da natureza a turma iniciou um discussão sobre como proteger o meio ambiente. O que Davi faz?",
    alternativas: [
        "Defende a reciclagem, a economia de água e o plantio de árvores.",
        "Afirma que pequenas ações não fazem diferença e que a responsabilidade é apenas do governo."
    ]
},
{
    enunciado: "Ao final da discussão, Davi precisou criar um cartaz no computdor para conscientizar as pessoas sobre a preservação do meio ambiente. E agora?",
    alternativas: [
        "Criar um cartaz com imagens e mensagens sobre reciclagem e preservação da natureza.",
        "Criar um cartaz dizendo que as ações das pessoas não influenciam na preservação da natureza."
    ]
},
{
    enunciado: "Depois de apresentar o cartaz, a professora propôs uma ação para reduzir o desperdicio na escola. O que Davi faz?",
    alternativas: [
        "Organiza uma campanha para economizar água e separar o lixo reciclável.",
        "Continua desperdiçando água e jogando lixo em qualquer lugar."
    ]
}
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta()