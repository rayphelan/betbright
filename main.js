var card = document.getElementsByClassName('card')[0];
var flipCardButton = document.getElementById('flipCardButton');
var unFlipCardButton = document.getElementById('unFlipCardButton');

flipCardButton.addEventListener('click', function() {  
  card.classList.add('hover');
})

unFlipCardButton.addEventListener('click', function () {
  card.classList.remove('hover');
})
