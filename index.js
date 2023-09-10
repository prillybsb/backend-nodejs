const jsonEntrada =
  '{"nome": "Priscila", "idade": 30, "Professora": false, "turmas":[0, 2, 3], "endereço": {"rua": "teste de rua", "numero": 123, "bairro": "centro", "CEP":"123.123-12"}}';

const obj = JSON.parse(jsonEntrada);

console.log(obj);

obj.turmas.map(function (valor, posicao) {
  console.log(`posicao: ${posicao}, valor: ${valor}`);
});

obj.nome += " Lessa";
obj.salario = 10000;

console.log(obj);

const jsonString = JSON.stringify(obj);
console.log(jsonString);
