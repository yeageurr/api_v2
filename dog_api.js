document.getElementById('fetchDog').addEventListener('click', ()=> {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => document.querySelector('#dog_image').src = data.message)
  .catch(error => console.error(error));
});

document.getElementById('removeImg').addEventListener('click', ()=> {
  document.querySelector('#dog_image').src = '';
})