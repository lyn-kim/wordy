/* exported data */

var data = {
  view: 'main-page',
  rejectedCard: [],
  savedCard: [],
  allCards: [],
  currentRandomCard: null,
  currentStudyCard: null,
  nextWordId: 1
};

var previousInputJSON = localStorage.getItem('data');
if (previousInputJSON !== null) {
  data = JSON.parse(previousInputJSON);
}

window.addEventListener('beforeunload', storeInput);

function storeInput(event) {
  var entryInputJSON = JSON.stringify(data);
  localStorage.setItem('data', entryInputJSON);
}
