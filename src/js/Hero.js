const character = {
  name: 'Picahu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressBar: document.getElementById('progressbar-character'),
};

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressBar: document.getElementById('progressbar-enemy'),
};

export { character, enemy };
