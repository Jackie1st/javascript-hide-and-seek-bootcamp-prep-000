function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  var incLis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < incLis.length; i++) {
    incLis[i].innerHTML = ((parseInt(incLis[i].innerHTML)) + n);
  }
  return incLis;
}

function deepestChild() {
  var nestedChild = document.querySelectorAll('#grand-node div');
  var deepChild = nestedChild[nestedChild.length-1]
  
  return deepChild;
}


