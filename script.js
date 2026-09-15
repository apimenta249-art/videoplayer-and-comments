window.alert("Hello, World")
window.confirm("Bem-vindo ao nosso site! Continue por favor.")
var usuario = document.getElementById("user");
var comentario = document.getElementById("comment");
var nome = window.prompt("qual é o seu user?")
window.alert("Hello, " + nome + " :)")
let comentary = window.prompt("o que deseja comentar??")
let x = nome + comentary
 //aqui o que eu fiz inicialmente foi pegar dois nomes tratando como string e os juntei 


usuario.value = nome
comentario.value = comentary
//logo em seguida coloquei como as duas "id" dos input/label para receberem um valor, sendo esses dois valores as variáveis (var ou let) user e comment


let resultado = document.getElementById("resultado");
let n1 = parseFloat(window.prompt("digite um número para verificar se você não é um robô"));
let n2 = parseFloat(window.prompt("digite o próximo número"));
    //acabei de aprender que não só parseInt, mas também parseFloat, servem para explicar ao JS quais variáveis são números e quais são strings

let conta =  n1 + n2
window.alert("Você passou no teste e aqui o resultado da conta: " + conta)

resultado.value = conta
//segue a mesma lógica para essa conta de multiplicação, entretanto como pode ver há apenas um id para duas variáveis, enquanto a outra acima possuia 2 para 2

