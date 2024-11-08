function paresImpares() {
    const numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000) + 1);
    
    console.log("el array original:", numeros);
    
    const pares = numeros.filter(num => num % 2 === 0);
    const impares = numeros.filter(num => num % 2 !== 0);
    const organizados = [...pares, ...impares];
    
    console.log("el array organizado:", organizados);
}

paresImpares();