/* var c = 1
while (c <= 5){
    console.log(c)
    c++
} */
console.log(`Vai começar...`)
for(var c = 1; c <= 5; c++){
    if(c % 2 != 0){
        console.log(`${c} Elefante incomoda muita gente!`)
    } else {
        console.log(`${c} Elefante incomoda muito mais!`)
    }
}
console.log('FIM!')