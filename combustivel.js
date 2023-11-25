
do{ 
console.clear()
alert('  Programa verificador do combustível mais vantajoso')
alert('------------------------------------------------------')
alert('A relação de consumo entre álcool e gasolina é de 70%,')
alert('ou seja,  se temos  o mesmo  volume  de combustível, a')
alert('energia  gerada  por  70%  do  consumo de gasolina é o')
alert('mesmo de 100% do consumo de álcool')
alert('')

var gasolina = parseFloat(prompt('Digite o preço da gasolina: '))

alert('Preço da gasolina: R$ ' + gasolina.toFixed(2))

var alcool = parseFloat(prompt('Digite o preço do álcool: '))
alert('Preço do álcool: R$ ' + alcool.toFixed(2))
alert ('')

var divisao = alcool / gasolina
if (divisao >=0){
  alert('A proporção é de: ' + divisao*100 + ' %')
  alert('')
if (divisao > 0.7){
  alert('Conclusão: É melhor abastecer com gasolina')}
else if (divisao < 0.7){
  alert('Conclusão: É melhor abastecer com álcool')}
else if (divisao == 0.7){
  alert('Conclusão: tanto faz abastecer com gasolina ou álcool')}
}
else {
  alert('Valores digitados inválidos')
}

alert ('')
alert ('Deseja realizar novo cálculo?')
alert ('1 - Sim')
alert ('2 - Não')
var voltar = prompt('Opção: ')

switch(voltar){
  case '1':
    voltar == 1
    alert ('')
    break
  case '2':
   voltar == 2
   alert ('')
    break
  default:
  do{
alert('')
    alert('Opção Inválida. Selecione uma opção válida:')
    alert ('1 - Realizar novo cálculo')
    alert ('2 - Finalizar programa')
    var voltar = prompt('Opção: ')
  alert('')
  }while (voltar !=1 && voltar !=2)
}
}while (voltar ==1)
if (voltar ==2){
  alert ('Fim do programa')

}
