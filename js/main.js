
var clickHereButton = document.querySelector('.click-here-btn');
clickHereButton.addEventListener('click', generateWord);
function generateWord(event) {
  getNewWord();
  goToNewWord();
  checkEmptyList();
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
  checkEmptyList();
  singleWord.prepend(generateWordDom(cardGenerated));
}

var homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', goToHome);
function goToHome(event) {
  switchView('main-page');
  checkEmptyList();
}

var listButton = document.querySelector('.list-button');
listButton.addEventListener('click', goToStudyList);

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
  checkEmptyList();
}

var noWordMessage = document.querySelector('.message');
function checkEmptyList() {
  if (data.savedCard.length === 0) {
    noWordMessage.className = 'message';
  } else {
    noWordMessage.className = 'message hidden';
  }
}
var savedCardIndex = 0;

var studyButton = document.querySelector('.study-button');
studyButton.addEventListener('click', openFlashCard);
function openFlashCard(event) {
  switchView('flashcard-front');
  var firstWord = document.querySelector('.study-word');
  firstWord.textContent = data.savedCard[savedCardIndex].word;

  if (data.currentStudyCard === null) {
    data.currentStudyCard = data.savedCard[savedCardIndex];
  } else {
    data.currentStudyCard = data.savedCard[savedCardIndex++];
  }
}

var studyDefinition = document.querySelector('.study-def');
var flipButton = document.querySelector('.flip-button');
flipButton.addEventListener('click', goToDefinition);
function goToDefinition(event) {
  switchView('flashcard-rear');
  studyDefinition.textContent = data.currentStudyCard.definition;
}

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', goToNextWord);
function goToNextWord(event) {
  switchView('flashcard-front');
  if (savedCardIndex >= data.savedCard.length) {
    savedCardIndex = 0;
  }
  openFlashCard();
}

var backButton = document.querySelector('.back-button');
backButton.addEventListener('click', goBackToWord);
function goBackToWord(event) {
  switchView('flashcard-front');
}
