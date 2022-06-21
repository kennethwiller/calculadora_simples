function gerarTabuada() {

    let n = document.getElementById('numero');
    let tab = document.getElementById('seltab');

    if (n.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    
    } else {
        let num = Number(n.value); 
        let c = 1;
        tab.innerHTML = '';

        while (c <=10) {
            let item = document.createElement('option');
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }

    


}