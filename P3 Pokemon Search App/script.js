const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonId = document.getElementById('pokemon-id');
const pokemonName = document.getElementById('pokemon-name');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const spriteContainer = document.querySelector('.pokemon');

searchButton.onclick = async function() {
    let input = searchInput.value.trim()
    if (!input) return;
        
    const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Pokemon not found');
        const data = await response.json(); //JSON response into a JavaScript object 
        showpokemon(data);
    } catch (err) {
        alert('Pokemon not found!');
        clearStuff();
    }
};

function showpokemon(poke) {
    const oldImg = document.getElementById('sprite');
    if (oldImg) oldImg.remove();

    pokemonName.textContent = poke.name.toUpperCase();
    pokemonId.textContent = '#' + poke.id;
    weight.textContent = 'Weight: ' + poke.weight;
    height.textContent = 'Height: ' + poke.height;

        
    let typesHTML = '';
    for (const type of poke.types) {
        typesHTML += `<span class="type">${type.type.name.toUpperCase()}</span>`;
    }

    types.innerHTML = typesHTML;

    hp.textContent = poke.stats[0].base_stat;       
    attack.textContent = poke.stats[1].base_stat;  
    defense.textContent = poke.stats[2].base_stat;  
    specialAttack.textContent = poke.stats[3].base_stat;
    specialDefense.textContent = poke.stats[4].base_stat;
    speed.textContent = poke.stats[5].base_stat;    

    const img = document.createElement('img');
    img.id = 'sprite';
    img.src = poke.sprites.front_default;
    spriteContainer.prepend(img);
}
function clearStuff() {
    pokemonName.textContent = '';
    pokemonId.textContent = '';
    weight.textContent = '';
    height.textContent = '';
    types.innerHTML = '';
    hp.textContent = '';
    attack.textContent = '';
    defense.textContent = '';
    specialAttack.textContent = '';
    specialDefense.textContent = '';
    speed.textContent = '';
    const img = document.getElementById('sprite');
    if (img) img.remove();
}