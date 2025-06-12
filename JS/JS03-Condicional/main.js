let atividadeEntregue = true
let diaFinalEntrega = 19
let mensagemParabens = 'Parabéns, valeu fera'
if(atividadeEntregue == true){
    console.log(mensagemParabens)
    if(diaFinalEntrega <= 13){
        console.log('Entregou a atividade na data e sua nota é 10!')
    }
    else{
        console.log('Entregou a atividade fora da data prevista e sera retirado dois pontos da nota final')
    }

}
else if(atividadeEntregue == false){
    console.log('Ops, você ainda não entregou sua atividade')
}
else{
    console.log('Você inseriu uma informação invalida')
}

let nota = 6.9
//se a nota for igual ou acima de 7 então o aluno passou na materia 
// se não a nota for menor ou igual a 6.9 o aluno vai ficar de recuperação

if(nota >= 7){
    console.log('Passou na materia')
}
else{
    console.log('Vai ficar de recuperação');
}

let resultado = nota >= 7 ? console.log('Passou na materia') : console.log( "Vai ficar de revuperação")



