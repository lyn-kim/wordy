var clickHereButton = document.querySelector('click-here-btn');
clickHereButton.addEventListener('click', generateWord);
function generateWord(event) {

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
