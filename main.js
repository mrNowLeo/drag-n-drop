window.onload = function() {
  var container = document.querySelector('.container');

  container.addEventListener('dragover', dragover);

  for (var i = 0; i < 5; i++) {
      var item = document.createElement('div');
      item.classList.add('item');
      item.id = '' + i;
      item.style.backgroundColor = getRandomColor();
      item.addEventListener('dragstart', dragstart);

      item.addEventListener('dragend', dragend);

      item.addEventListener('dragenter', dragenterItem);
      container.appendChild(item);
  }
}

var activeItem = null;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function dragstart(event) {
  event.target.classList.add('hold');
  activeItem = event.target;
  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
  activeItem = null;
  event.target.className = 'item';
}

function dragover(event) {
  event.preventDefault();
}

function dragenterItem(event) {
  if (Number(event.target.id) >= Number(activeItem.id)) {
    event.target.after(activeItem);
  } else {
    event.target.before(activeItem);
  }
  console.log(activeItem.id);
  
  var container = document.querySelector('.container');
  for (var i = 0; i < 5; i++) {
    container.children[i].id = '' + i;
  }
}