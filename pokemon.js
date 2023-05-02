const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    const pokemonIdsDivBy3 = pokémon.filter( pokemon => pokemon.id % 3 === 0 ).map( pokemon => pokemon.id );
    console.log(pokemonIdsDivBy3);

    const pokemonFireTypes = pokémon.filter(pokemon => pokemon.types.includes("fire")).map(pokemon => pokemon.name);
    console.log(pokemonFireTypes);
    
    const pokemonDualTypes = pokémon.filter(pokemon => pokemon.types.length > 1).map(pokemon => pokemon.name);
    console.log(pokemonDualTypes);

    const pokemonNames = pokémon.map(pokemon => pokemon.name);
    console.log(pokemonNames)

    const pokemonIdBiggerThan99 = pokémon.filter(pokemon => pokemon.id >= 99).map(pokemon => `ID: ${pokemon.id} - ${pokemon.name}`)
    console.log(pokemonIdBiggerThan99)

    const pokemonOnlyPoisonType = pokémon.filter(pokemon => pokemon.types.includes("poison") && pokemon.types.length < 2).map(pokemon => pokemon.name);
    console.log(pokemonOnlyPoisonType)

    const pokemonFirstTypeOfFlying = pokémon.filter(pokemon => pokemon.types.includes("flying") && pokemon.types.length > 1).map(pokemon => pokemon.types[0]);
    console.log(pokemonFirstTypeOfFlying)

    const pokemonNormalCount = pokémon.filter(pokemon => pokemon.types.includes("normal")).map(pokemon => pokemon.name)

    console.log(pokemonNormalCount.length);
    console.log(pokemonNormalCount);

