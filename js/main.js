
var clickHereButton = document.querySelector('.click-here-btn');
clickHereButton.addEventListener('click', generateWord);
function generateWord(event) {
  getNewWord();
  goToNewWord();
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

function goToStudyList() {
  switchView('study-list');
}

var saveButton = document.querySelector('.save-button');
saveButton.addEventListener('click', saveWord);
function saveWord(event) {
  var cardGenerated = {
    word: data.currentRandomCard.word,
    definition: data.currentRandomCard.definition,
    wordId: data.nextWordId++
  };
  data.savedCard.push(cardGenerated);
  goToStudyList();
}

var homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', goToHome);
function goToHome(event) {
  switchView('main-page');
}

function generateWordDom(card) {
  var listItem = document.createElement('li');
  var wordText = document.createTextNode(card.word);
  listItem.appendChild(wordText);
  listItem.className = 'saved-word';

  var wordId = card.wordId;
  listItem.setAttribute('word-id', wordId);

  return listItem;
}

var singleWord = document.querySelector('.saved-word-list');
window.addEventListener('DOMContentLoaded', loadSingleWord);
function loadSingleWord(event) {
  for (var i = 0; i < data.savedCard.length; i++) {
    singleWord.prepend(generateWordDom(data.savedCard[i]));
  }
}

var listButton = document.querySelector('.list-button');
listButton.addEventListener('click', goToStudyList);
