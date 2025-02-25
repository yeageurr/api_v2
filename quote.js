document.getElementById('removeImg').addEventListener('click', ()=> {
  document.querySelector('.label').innerHTML = 'Quote will appear here.';
});

document.getElementById('getQuote').addEventListener('click', ()=>{
  fetch('https://quotes-api-self.vercel.app/quote')
    .then(response => response.json())
    .then(data => document.querySelector('.label').innerHTML = `${data['quote']}`);
    document.querySelector('.label').style.fontStyle = 'italic';
})