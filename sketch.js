function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(1024, 800);

  frameRate(40);
  //somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  //if (cenaAtual === 'jogo') {
  //  jogo.draw();
  //}
  cenas[cenaAtual].draw();
}