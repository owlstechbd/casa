const languageSwitcher = document.querySelector('.language-switcher');
const languageButton = document.querySelector('.language-button');
const languageItems = document.querySelectorAll('.language-item');

languageButton.addEventListener('click', () => {
  languageSwitcher.classList.toggle('open');
});

languageItems.forEach(item => {
  item.addEventListener('click', () => {
    languageItems.forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');
    languageButton.querySelector('span').innerText = item.innerText;
    languageSwitcher.classList.remove('open');
  });
});


// animation

  new WOW().init();