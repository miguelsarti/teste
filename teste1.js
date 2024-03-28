let números = [3, 5, 4, 8, 13, 16];
números.sort((a, b) => a - b); 
console.log("Números: " + números);

let pares = [];
let ímpares = [];

for(let i = 0; i < números.length; i++){ 
    let número = números[i];
    if(número % 2 == 0){
        pares.unshift(número);
    } else{
        ímpares.push(número);
    }
}

console.log("Números pares em ordem decrescente: " + pares); 
console.log("Números ímpares em ordem crescente: " + ímpares);