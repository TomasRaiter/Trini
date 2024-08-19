//let palabra= 'filo';
//let palabraIngresada= 'casi casi'
//let a = palabraIngresada.split('')
//console.log(a);
//for(letras of palabra)
// div.word>div.letter*5

function handleSubmit(event) {
    event.preventDefault();
    let container = document.querySelector('.container');
    let word = document.createElement('div');
    let input = event.target.word.value;
    if (input.length != 5) return;
    input = input.split('');
    console.log(input);
    word.classList.add('word');
    for (let c of input) {
      let letter = document.createElement('div');
      letter.textContent = c.toUpperCase();
      letter.classList.add('letter');
      word.append(letter);  
    }
    container.append(word);
    event.target.reset();
}