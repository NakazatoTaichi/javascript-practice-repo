// const sonicBoom = () => {
//     return 20;
// }
// console.log(sonicBoom());

// function metalBurst(lastDamage) {
//     return lastDamage * 1.5;
// }

// console.log(metalBurst(10));

function hornDrill (theirHp) {
    const num = Math.random();
    if (num <= 0.3) {
        return theirHp;
    } else {
        return 0;
    }
}

console.log(hornDrill(100));