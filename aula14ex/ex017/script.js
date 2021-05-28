function gerar() {
    let num = document.getElementById('txtn1')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor insira um número.')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }

    }

}