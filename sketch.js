const sceneSpeed = 3;
const heroWidth = 110;
const heroHeight = 135;

let sceneImage;
let heroImage;
let scene;
let hero;
let sound;

function preload() {
  sceneImage = loadImage('imagens/cenario/floresta.png');
  heroImage = loadImage('imagens/personagem/correndo.png');
  sound = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scene = new Scene(sceneImage, sceneSpeed);
  hero = new Hero(heroImage, heroWidth, heroHeight);
  frameRate(40);
  // sound.loop()
}

function draw() {
  scene.show();
  scene.move();
  hero.show();
}
