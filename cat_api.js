document.getElementById('fetchCat').addEventListener('click', ()=> {
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => document.querySelector('#cat_image').src = data[0].url)
  .catch(error => console.error(error));
});

document.getElementById('removeImg').addEventListener('click', ()=> {
  document.querySelector('#cat_image').src = '';
})