# BtnRandomColor

### JQuery
Utilizando JQuery fiz um teste com a seguinte descrição:
```
O cliente deseja um site utilizando JQuery, que possui somente um botão no centro da página,
e cada vez que se clica nesse botão, ele muda de cor.
```

### Desenvolvimento
Com um tempo sem o código sem funcionar, percebi que o modo de script funcional era esse:
```
<script src="[site do JQuery]"></script>
<script src="[arquivo .js local]"></script>
```

E mesmo assim o código não funcionava, porém adicionando isso entre o código, tudo funcionou:
```
$(function(){
  
  //código
  
});
```
### Código
Simplesmente peguei um número aleatório e adicionei "#" no início de sua String, fazendo ser uma 
cor válida para o HTML, com o seletor
```
$(".btn").css("background-color",corRetornadaDaFuncao);
```
dentro da função, o botão muda de cor.
