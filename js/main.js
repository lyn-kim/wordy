var clickHereButton = document.querySelector('.click-here-btn');
clickHereButton.addEventListener('click', generateWord);
function generateWord(event) {
  getNewWord();
}

function getNewWord() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://random-words-api.vercel.app/word');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
  });
  xhr.send();
}
