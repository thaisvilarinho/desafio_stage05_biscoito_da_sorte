const firstScreen = document.querySelector(".first-screen");
const secondScreen = document.querySelector(".second-screen");
const cookie = firstScreen.querySelector("img");
const button = secondScreen.querySelector("button");
const fortuneMessage = secondScreen.querySelector("p");

const phrases = [
  "Pare de procurar eternamente; a felicidade está bem ao seu lado",
  "Você passará por algumas experiências maravilhosas",
  "Você e sua mulher terão uma vida feliz",
  "Seus princípios valem mais para você do que dinheiro ou sucesso",
  "A sorte destinada a você será cobiçada pelo próximo",
  "Conhecimento é a única virtude e ignorância é o único vício",
  "A vontade das pessoas é a melhor das leis",
  "Você tem um equipamento incomum para o sucesso, use-o corretamente",
  "Espere para breve grandes emoções",
  "O vício de hoje pode se tornar a virtude de amanhã",
  "Você vai herdar uma grande quantia em dinheiro",
  "Generosidade e perfeição são seus eternos objetivos",
  "Sua mente é criativa, original e perspicaz",
  "Uma surpresa agradável está à sua espera",
  "Você tem cabeça aberta e é bastante sociável",
  "Você tem um coração generoso e é bem-amado",
  "Você terá uma velhice muito confortável",
  "A felicidade está no horizonte da sua vida",
  "Você é uma pessoa culta.",
  "O melhor profeta do futuro é o passado",
  "Você escapará por um triz de um problema sério",
  "A beleza em suas variadas formas atrai você",
  "Você é o centro das atenções de todos os grupos",
  "Seu talento para o mundo dos negócios é evidente na sua personalidade",
  "Você sempre é bem recebido em qualquer grupo",
  "Você é generoso, hospitaleiro, alegre e querido",
  "O grande prazer da vida é fazer o impossível",
  "Evite tomar decisões precipitadas",
  "A filosofia de um século é o bom senso do próximo",
  "Você nunca economiza conselhos ou ajuda",
  "O nosso primeiro e último amor é… o amor-próprio",
  "Você será afortunado em tudo",
  "Quem se apaixona por si mesmo não tem rivais",
  "Deixe de lado as preocupações e seja feliz",
  "A sociedade prepara o crime, o criminoso o comete",
  "Você é o mestre das situações",
  "Divida sua felicidade com os outros hoje mesmo",
  "A sorte vem ao seu encontro",
  "Seu grande sonho é constituir família",
  "A vontade das pessoas é a melhor das leis.",
  "Você é diligente e sistemático em seus acordos comerciais",
  "Você será uma pessoa bem viajada, seja por lazer, seja por trabalho",
  "Agora é a hora de fazer novos amigos",
  "Você é profundamente ligado à sua casa e família",
  "Você terá felicidade e harmonia na sua vida amorosa",
  "Confiamos só em Deus; quanto aos outros, paguem à vista",
  "A pessoa que lê sua sorte entrou em greve. Não há biscoitos para você hoje. Envie um recado para alguém",
  "Hoje pode ser um dia excelente e maravilhoso. Só depende de você",
  "Nós somos o que pensamos (só não pense que você é um super-herói e não tente voar)",
  "Todos ganham presentes, mas nem todos abrem o pacote",
  "A pessoa que lê sua sorte não está bem. Esperamos que você esteja",
  "A pessoa que lê sua sorte está dormindo. Não a acorde",
  "A maior barreira para o sucesso é o medo do fracasso",
  "Se quiser que os outros sejam felizes, pratique a compaixão. Se quiser ser feliz, pratique a compaixão.",
  "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.",
  "A pessoa que lê sua sorte está se casando hoje. Deseje a ele boa sorte!",
  "Para cada minuto que perdemos organizando as coisas, ganhamos uma hora",
  "A pessoa que lê sua sorte foi demitida. Enquanto não contratamos outra, visite o álbum de um amigo",
  "A pessoa que lê sua sorte perdeu a cabeça (e o emprego). Esperamos que você esteja com sorte.",
  "Um dia sem sorrisos é um dia perdido",
  "A pessoa que lê sua sorte desapareceu e nosso chefe está furioso. Esperamos que você tenha um dia de sorte",
  "Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram trabalhando",
  "Você nunca mais vai precisar se preocupar em ter uma renda estável",
  "Hoje você vai ver um biscoito da sorte que nunca viu antes",
  "Se seus desejos não forem extravagantes, eles serão realizados",
  "Seu sorriso singelo será sua salvaguarda garantida.",
  "Uma imaginação bem canalizada é fonte de grandes proezas.",
  "você vai ganhar roupas novas.",
  "A mudança é a lei da vida",
];

document.addEventListener("keypress", keyEnter);

cookie.addEventListener("click", openCookie);
button.addEventListener("click", toggleScreen);

function keyEnter(event) {
  if (event.key == "Enter" && !secondScreen.classList.contains("hide")) {
    openCookie();
  }
}

function toggleScreen() {
  firstScreen.classList.toggle("hide");
  secondScreen.classList.toggle("hide");
}

function openCookie() {
  const random = (Math.random() * (phrases.length - 0) + 0).toFixed(0);
  fortuneMessage.innerText = phrases[random];

  toggleScreen();
}
