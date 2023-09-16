let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
/*
num.push(7)
console.log(`Nosso vetor é o ${num}`)
console.log(num.length)
console.log(num.sort())

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}
*/
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let pos = num.indexOf(7)
if(pos === -1 ){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}
console.log(num.indexOf(7))
console.log(num.indexOf(3))