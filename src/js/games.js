// import { character, enemy } from './Hero';

const refs = {
  btn: document.getElementById('btn-kick'),
  messageOfFight: document.getElementById('messageOfFight'),
  messageOfVS: document.querySelector('.block-vs'),
};

const character = {
  name: 'Picahu',
  defaultHP: 100,
  damageHP: 100,
  elHP: getElByID('health-character'),
  elProgressBar: getElByID('progressbar-character'),
  changeXP: changeXP,
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressBar: renderProgressBar,
};

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: getElByID('health-enemy'),
  elProgressBar: getElByID('progressbar-enemy'),
  changeXP: changeXP,
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressBar: renderProgressBar,
};

function getElByID(id) {
  return document.getElementById(id);
}

const init = () => {
  character.renderHP();
  enemy.renderHP();
  fightMessage(character, enemy);
};

function renderHP() {
  this.renderHPLife();
  this.renderProgressBar();
}

function renderHPLife() {
  this.elHP.textContent = `${this.damageHP} / ${this.defaultHP}`;
}

function renderProgressBar() {
  this.elProgressBar.style.width = this.damageHP + '%';
}

function changeXP(count) {
  this.damageHP -= count;

  const log =
    this === enemy
      ? generateLog(this, character, count)
      : generateLog(this, enemy, count);
  logMessage(log);

  if (this.damageHP <= 0) {
    this.damageHP = 0;
    refs.messageOfFight.textContent = `${this.name} проиграл`;
    refs.btn.disabled = true;
  }

  this.renderHP();
}

const random = num => {
  return Math.ceil(Math.random() * num);
};

refs.btn.addEventListener('click', () => {
  character.changeXP(random(20));
  enemy.changeXP(random(20));
  fightMessage(character, enemy);
});

function generateLog(firsPerson, SecondPerson, n) {
  console.log(n);
  const logs = [
    `${firsPerson.name} вспомнил что-то важное, но неожиданно ${SecondPerson.name}, не помня себя от испуга, ударил в предплечье врага -${n} жизни [${firsPerson.damageHP}]`,
    `${firsPerson.name} поперхнулся, и за это ${SecondPerson.name} с испугу приложил прямой удар коленом в лоб врага -${n} жизни [${firsPerson.damageHP}]`,
    `${firsPerson.name} забылся, но в это время наглый ${SecondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил  -${n} жизни [${firsPerson.damageHP}]`,
    `${firsPerson.name} пришел в себя, но неожиданно ${SecondPerson.name} случайно нанес мощнейший удар -${n} жизни [${firsPerson.damageHP}]`,
    `${firsPerson.name} поперхнулся, но в это время ${SecondPerson.name} нехотя раздробил кулаком <вырезанно цензурой> противника -${n} жизни [${firsPerson.damageHP}]`,
    `${firsPerson.name} удивился, а ${SecondPerson.name} пошатнувшись влепил подлый удар -${n} жизни [${firsPerson.damageHP}]`,
    `${firsPerson.name} высморкался, но неожиданно ${SecondPerson.name} провел дробящий удар -${n} жизни [${firsPerson.damageHP}]`,
    `${firsPerson.name} пошатнулся, и внезапно наглый ${SecondPerson.name} беспричинно ударил в ногу противника -${n} жизни [${firsPerson.damageHP}]`,
    `${firsPerson.name} расстроился, как вдруг, неожиданно ${SecondPerson.name} случайно влепил стопой в живот соперника -${n} жизни [${firsPerson.damageHP}]`,
    `${firsPerson.name} пытался что-то сказать, но вдруг, неожиданно ${SecondPerson.name} со скуки, разбил бровь сопернику -${n} жизни [${firsPerson.damageHP}]`,
  ];

  return logs[random(logs.length) - 1];
}

function logMessage(log) {
  messageOfFight.insertAdjacentHTML('afterbegin', `<p>${log}</p>`);
}

function fightMessage(firsPerson, SecondPerson) {
  refs.messageOfVS.textContent = `${firsPerson.name} [${firsPerson.elHP.textContent}] против ${SecondPerson.name} [${SecondPerson.elHP.textContent}]`;
}

init();
