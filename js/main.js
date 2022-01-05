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

function getNewWord() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://random-words-api.vercel.app/word');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
  });
  xhr.send();
}

var saveButton = document.querySelector('.save-button');
saveButton.addEventListener('click', storeWord);
function storeWord(event) {
  // console.log('event.target:', event.target);
}
