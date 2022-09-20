// E01, Rita Soares, WD2S

// msg de boas vindas (:
alert("Olá (:");

//proposta
confirm("Queres jogar um jogo comigo?");


//perguntar e arquivar o nome do jogador 'person'
const person = prompt("Mas antes disso, como queres que te chame?");
alert("Boa " + person + ", agora sim podemos começar!");

alert("Vamos lá!");

//explicação do joguinho
confirm("Então o que vamos fazer é pensar num número de 0-100, e se pensares no mesmo número que eu ganhas o jogo... e um prémio! Estás pront@?");

//prompt jogo + resultados possíveis
let number = prompt ("De 0-100 estás a pensar em qual?");

//resultados de respostas ao jogo
if (number == "20") {
      alert("OMG! Eu pensei nesse! Ganhaste " + person + "! Venceste o jogo (:"); //ganhar o joguinho, com o número 20, o melhor número ever...

      alert("Aposto que estás entusiamad@ com o prémio, huh?");
      alert("O teu prémio é a seguinte mensagem parabenizadora: \n\n Parabéns " + person + " venceste o jogo!!! (:"); //prémio por vencer o jogo (:
  }

  else if (number >100){
      alert ("Era suposto ser um número de 1-100... vamos tentar denovo..."); //respostas fora do limite 0-100
  }

  else {
      alert("Opah... não era nesse que eu estava a pensar, tenta denovo..."); //perder o joguinho ):
  };
