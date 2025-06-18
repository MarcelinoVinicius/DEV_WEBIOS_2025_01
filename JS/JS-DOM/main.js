// window.setTimeout(mensagem, 2000)
//(nome da função. tempo para chama a função)
//6s > 6000 mile segundos

//Fucation > Ações que o código pode exceutar quando for solicitado pelo usuario no navegador

function Mensagem (){
    alert('Aprendendo DOM com JS')
    alert(Date())
}
//window.alert('Olá Mundo')
//window.prompt('Digite o número de 0 á 10')
//window.open()
//window.close()

let tagh1 = document.createElement("h1")

//innerHTML > Para adicionar uma informação dentro das tags HTML

tagh1.innerHTML = 'Olá mundo, criei você!'
//A quem ela vai pertencer

document.body.appendChild(tagh1)

