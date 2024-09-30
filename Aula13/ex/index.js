const nome = prompt('Digite seu nome completo!')
window.document.body.innerHTML += `O seu nome é: <strong>${nome}</strong> <br>`
window.document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br>`
window.document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong>  <br>`
window.document.body.innerHTML += `Qual seria o primeiro indice da letra do seu nome? <strong>${nome.indexOf('a')}</strong> <br>`
window.document.body.innerHTML += `Qual seria o último indice da letra do seu nome? <strong>${nome.lastIndexOf('a')}</strong> <br>`
window.document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong><br>`
window.document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br>`
window.document.body.innerHTML += `Seu nome com letras maiúculas: <strong>${nome.toLocaleUpperCase()}</strong>  <br>`
window.document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLocaleLowerCase()}</strong>  <br>`

