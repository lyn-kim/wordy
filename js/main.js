
var clickHereButton = document.querySelector('.click-here-btn');
clickHereButton.addEventListener('click', generateWord);
function generateWord(event) {
  getNewWord();
  goToNewWord();
  var word = data.currentRandomCard.word;
  var definition = data.currentRandomCard.definition;
  var cardGenerated = {
    word: word,
    definition: definition,
    wordId: data.nextWordId++
  };

  data.allCards.push(cardGenerated);
  return cardGenerated;
}

function goToNewWord() {
  switchView('new-word');
}

var $views = document.querySelectorAll('div[data-view]');

function switchView(dataView) {
  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === dataView) {
      $views[i].className = 'row';
    } else {
      $views[i].className = 'row hidden';
    }
  }
}

var wordElement = document.querySelector('.generated-word');
var definitionElement = document.querySelector('.generated-def');

function getNewWord() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://random-words-api.vercel.app/word');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    data.currentRandomCard = xhr.response[0];
    definitionElement.textContent = data.currentRandomCard.definition;
    wordElement.textContent = data.currentRandomCard.word;
  });
  xhr.send();
}

var saveButton = document.querySelector('.save-button');
saveButton.addEventListener('click', saveWord);
function saveWord(event) {
  data.savedCard.push(data.currentRandomCard);
}

var homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', goToHome);
function goToHome(event) {
  switchView('main-page');
}
