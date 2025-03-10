let personaje = {
   
   nombre: "tanjiro",
   anime: "Demon Slayer",
   edad: 16,
};

console.log(personaje);
console.log(personaje.anime);
console.log(personaje['nombre']);



personaje.edad = 13;
personaje['edad'] = 16;
let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime;

console.log(personaje);




