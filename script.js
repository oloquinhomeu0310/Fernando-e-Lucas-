const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Onde o personagem encontra o mapa que dá início à sua aventura?",
        alternativas: [
            {
                texto: "No sótão de uma velha mansão.",
                afirmacao: "O personagem descobre o mapa empoeirado no sótão de uma mansão esquecida, onde poucos se aventuram."
            },
            {
                texto: "No mercado de uma cidade antiga.",
                afirmacao: "O personagem adquire o mapa em um mercado repleto de relíquias, onde um mercador misterioso o oferece."
            }
        ]
    },
    {
        enunciado: "Quem acompanha o personagem durante a jornada?",
        alternativas: [
            {
                texto: "Um guerreiro destemido.",
                afirmacao: "O personagem é acompanhado por um guerreiro destemido, que jura protegê-lo a todo custo."
            },
            {
                texto: "Uma feiticeira enigmática.",
                afirmacao: "Uma feiticeira enigmática se junta ao personagem, oferecendo magia e sabedoria para ajudá-lo."
            }
        ]
    },
    {
        enunciado: "Qual é o primeiro obstáculo no caminho do personagem?",
        alternativas: [
            {
                texto: "Um labirinto de espinhos.",
                afirmacao: "O personagem e seu companheiro enfrentam um labirinto cheio de espinhos, onde cada passo pode ser fatal."
            },
            {
                texto: "Um deserto interminável.",
                afirmacao: "Eles devem atravessar um deserto escaldante, onde a falta de água e orientação coloca suas vidas em risco."
            }
        ]
    },
    {
        enunciado: "Como o personagem encontra o caminho certo?",
        alternativas: [
            {
                texto: "Seguindo as estrelas no céu.",
                afirmacao: "O personagem usa o conhecimento das estrelas para navegar na escuridão, encontrando o caminho certo."
            },
            {
                texto: "Usando um amuleto mágico.",
                afirmacao: "Um amuleto mágico, que brilha na presença do perigo, guia o personagem pelo caminho correto."
            }
        ]
    },
    {
        enunciado: "O que o personagem descobre ao final de sua jornada?",
        alternativas: [
            {
                texto: "Uma civilização perdida.",
                afirmacao: "No final, o personagem descobre uma civilização perdida, cheia de conhecimento antigo e segredos esquecidos."
            },
            {
                texto: "O verdadeiro poder do mapa.",
                afirmacao: "Ele percebe que o mapa tem um poder oculto, revelando a verdade sobre o reino esquecido e sua própria origem."
            }
        ]
    }
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A Busca pela Verdade: Mistérios do Reino Esquecido.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
