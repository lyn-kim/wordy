
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

  // xhr.onreadystatechange = function () {
  //   if (this.readyState === 200) {

  //   }
  // }

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

var newButton = document.querySelector('.new-button');
newButton.addEventListener('click', generateWord);

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
  listItem.className = 'saved-word relative';

  var icon = document.createElement('i');
  icon.className = 'fas fa-trash trash-icon';
  listItem.appendChild(icon);

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
    studyButton.className = 'hidden';
  } else {
    noWordMessage.className = 'message hidden';
    studyButton.className = 'study-button';
  }
}
var savedCardIndex = 0;

var studyButton = document.querySelector('.study-button');
studyButton.addEventListener('click', openFlashCard);
function openFlashCard(event) {
  data.currentStudyCard = data.savedCard[savedCardIndex];

  var studyWord = document.querySelector('.study-word');
  studyWord.textContent = data.currentStudyCard.word;

  switchView('flashcard-front');
}

var studyDefinition = document.querySelector('.study-def');
var flipButton = document.querySelector('.flip-button');
flipButton.addEventListener('click', goToDefinition);
function goToDefinition(event) {
  studyDefinition.textContent = data.currentStudyCard.definition;
  switchView('flashcard-rear');
}

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', goToNextWord);
function goToNextWord(event) {
  savedCardIndex++;

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

var wordList = document.querySelector('.saved-word-list');
wordList.addEventListener('click', toggleModal);

function toggleModal(event) {
  if (event.target.tagName !== 'I') {
    return;
  }

  for (var i = 0; i < data.savedCard.length; i++) {
    var parentElement = event.target.closest('li');
    var specificId = parentElement.getAttribute('word-id');
    var specificIdNumber = parseInt(specificId);
    if (data.savedCard[i].wordId === specificIdNumber) {
      openDeleteModal();

      data.deleting = data.savedCard[i];
    }
  }
}

var modalView = document.getElementById('modal-view');
function openDeleteModal(event) {
  modalView.className = 'row';
}

var cancelButton = document.querySelector('.cancel-btn');
cancelButton.addEventListener('click', goToStudyList);

var deleteButton = document.querySelector('.delete-btn');
deleteButton.addEventListener('click', deleteWordFromDom);

function deleteWordFromDom(event) {
  var deleting = data.deleting;
  if (deleting !== null) {
    var wordIndex = data.savedCard.findIndex(function (word) {
      return word.wordId === deleting.wordId;
    });
    data.savedCard.splice(wordIndex, 1);
    var currentWord = document.querySelector('[word-id="' + deleting.wordId + '"]');
    currentWord.remove();
  }
  checkEmptyList();
  goToStudyList();
}
