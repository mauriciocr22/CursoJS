function contar() {
    let n1 = document.getElementById('txtn1')
    let n2 = document.getElementById('txtn2')
    let n3 = document.getElementById('txtn3')
    let res = document.getElementById('res')

    if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(n3.value)

        for(let c = i; c <= f; c += p) {
            if (c % 2 != 0) {
                res.innerHTML += `<strong>${c}</strong> Coxinha é bom. \u{1F60B} <br/>`
            } else {
                res.innerHTML += `<strong>${c}</strong> Coxinha é muito melhor \u{1F924} <br/>`
            }
        }
        res.innerHTML += `Estou cheio \u{1F62A}`
    }
}

/* for (n1; n1 < n2; n1 += n3) {
    res.innerHTML = (`${n1}`) 
} */