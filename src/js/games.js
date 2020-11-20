import { character, enemy } from './Hero';

const refs = {
  btn: document.getElementById('btn-kick'),
  messageOfFight: document.getElementById('messageOfFight'),
};

refs.messageOfFight.textContent = `Жми на кнопку`;

const init = () => {
  renderHP(character);
  renderHP(enemy);
};

const renderHP = hero => {
  renderHPLife(hero);
  renderProgressBar(hero);
};

const renderHPLife = hero => {
  hero.elHP.textContent = `${hero.damageHP} / ${hero.defaultHP}`;
};

const renderProgressBar = hero => {
  hero.elProgressBar.style.width = hero.damageHP + '%';
};

const changeXP = (count, hero) => {
  if (!hero.damageHP || hero.damageHP < count) {
    hero.damageHP = 0;
    refs.messageOfFight.textContent = `${hero.name} проиграл`;
    refs.btn.disabled = true;
  } else {
    hero.damageHP -= count;
  }

  renderHP(hero);
};

const random = num => {
  return Math.ceil(Math.random() * num);
};

refs.btn.addEventListener('click', () => {
  changeXP(random(20), character);
  changeXP(random(20), enemy);
});

init();
