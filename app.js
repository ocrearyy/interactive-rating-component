function displaypopup() {
  document.querySelector('#popup').style.display = 'block';
  document.querySelector('#rating-section').style.display = 'none';
}

function rating1() {
  document.querySelector('#one').style.backgroundColor = 'hsl(25, 97%, 53%)';
  document.querySelector('#two').style.backgroundColor = '#273039';
  document.querySelector('#three').style.backgroundColor = '#273039';
  document.querySelector('#four').style.backgroundColor = '#273039';
  document.querySelector('#five').style.backgroundColor = '#273039';
  const msg = document.querySelector('.popup-rating');
  msg.textContent = 'You selected 1 out of 5';
}

function rating2() {
  document.querySelector('#one').style.backgroundColor = '#273039';
  document.querySelector('#two').style.backgroundColor = 'hsl(25, 97%, 53%)';
  document.querySelector('#three').style.backgroundColor = '#273039';
  document.querySelector('#four').style.backgroundColor = '#273039';
  document.querySelector('#five').style.backgroundColor = '#273039';
  const msg = document.querySelector('.popup-rating');
  msg.textContent = 'You selected 2 out of 5';
}

function rating3() {
  document.querySelector('#one').style.backgroundColor = '#273039';
  document.querySelector('#two').style.backgroundColor = '#273039';
  document.querySelector('#three').style.backgroundColor = 'hsl(25, 97%, 53%)';
  document.querySelector('#four').style.backgroundColor = '#273039';
  document.querySelector('#five').style.backgroundColor = '#273039';
  const msg = document.querySelector('.popup-rating');
  msg.textContent = 'You selected 3 out of 5';
}

function rating4() {
  document.querySelector('#one').style.backgroundColor = '#273039';
  document.querySelector('#two').style.backgroundColor = '#273039';
  document.querySelector('#three').style.backgroundColor = ' #273039';
  document.querySelector('#four').style.backgroundColor = 'hsl(25, 97%, 53%)';
  document.querySelector('#five').style.backgroundColor = '#273039';
  const msg = document.querySelector('.popup-rating');
  msg.textContent = 'You selected 4 out of 5';
}

function rating5() {
  document.querySelector('#one').style.backgroundColor = '#273039';
  document.querySelector('#two').style.backgroundColor = '#273039';
  document.querySelector('#three').style.backgroundColor = ' #273039';
  document.querySelector('#four').style.backgroundColor = '#273039';
  document.querySelector('#five').style.backgroundColor = 'hsl(25, 97%, 53%)';
  const msg = document.querySelector('.popup-rating');
  msg.textContent = 'You selected 5 out of 5';
}

const allRatings = [rating1, rating2, rating3, rating4, rating5];

document.querySelectorAll('.list-btn').forEach((btn, i) => {
  btn.addEventListener('click', allRatings[i]);
});

const submitBtn = document.querySelector('#popup');
submitBtn.addEventListener('click', displaypopup);
