const pokemonBoxes = document.querySelectorAll('.pokemon-box')

const ChangePokemon = (event) => {
    const box = event.currentTarget;  
    const pokemonBoxName = box.querySelector('.pokemon-name');  
    const pokemonBoxImg = box.querySelector('.pokemon');  
    const pokemonTextImg = document.querySelector('.text-img');
    const pokemonText = document.querySelector('.text');
    
    if(pokemonBoxName.textContent === 'Squirtle') {
        pokemonText.textContent = 'Squirtle jest wodnym pokemonem';  // Możesz tu dodać tekst o Squirtle
        pokemonTextImg.setAttribute('src', './img/Squirtle.png');
    } else if(pokemonBoxName.textContent === 'Bulbasaur') {
        pokemonText.textContent = 'Bulbasaur jest roślinnym pokemonem!';
        pokemonTextImg.setAttribute('src', './img/pngwing.com.png');
    }else{
        pokemonText.textContent = 'Charmander jest ognistym pokemonem';
        pokemonTextImg.setAttribute('src', './img/Charmander.webp');
    }
}

pokemonBoxes.forEach(box => {
    box.addEventListener('click', ChangePokemon);
});