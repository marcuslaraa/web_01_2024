# Exercício 01 

## Escreva uma função em TypeScript que aceite um array de números como parâmetro e retorne o array ordenado em ordem crescente. 

### [Resolução ex01](./src/ex01.ts)

# Exercício 02

## Escreva uma função em TypeScript que calcule a média ponderada de um conjunto de valores, dados seus valores e pesos correspondentes.

### [Resolução ex02](./src/ex02.ts)

# Exercício 03
Crie uma função em TypeScript que valide se um CPF é válido ou não. O CPF é
composto por 11 dígitos numéricos. Considere a entrada como numérica. Para ser válido, ele deve
seguir algumas regras específicas de formação e ter dígitos verificadores corretos, conforme a
informações a seguir:

## Validação CPF – Primeiro dígito

Antes de qualquer coisa, devemos notar que o cálculo para validação de um número de CPF é
determinado pelo próprio Ministério da Fazenda. O órgão é o responsável pelos cadastros de
pessoas jurídicas.

Dito isso, devemos notar que um documento como o CPF é composto por 11 números,
considerando dígitos. Estes números obedecem a já mencionada máscara “###.###.###-##”,
todavia, para que se chegue à validade do mesmo a verificação utiliza os 9 primeiros números.
Agora, falando do processo em si, podemos dizer que ele é feito por meio de um cálculo simples.
Para perfeita compreensão, tomamos emprestado um exemplo onde o CPF fictício tem a seguinte
numeração: 529.982.247-25.

Nesse caso, para a validação do primeiro dígito é preciso que se faça uma multiplicação dos 9
primeiros números por meio da sequência decrescente de 10 à 2 e se some os valores resultantes.
O exemplo nesse caso fica assim:

5 * 10 + 2 * 9 + 9 * 8 + 9 * 7 + 8 * 6 + 2 * 5 + 2 * 4 + 4 * 3 + 7 * 2

Em consequência, o resultado é 295.

## Segunda etapa da validação do primeiro dígito

Assim como no primeiro exemplo, o segundo passo da fórmula do CPF também é bastante simples.
Nesse caso, é preciso que se multiplique o resultado obtido por 10 e na sequência o divida por 11.

O exemplo fica assim:

295 * 10 / 11

Vale notar, no entanto, que o resultado útil para a fórmula nesse caso será o RESTO do que foi
dividido. No caso dele ser igual ao primeiro dígito verificador, que é aquele depois do “-“, significa
que a primeira parte do processo está certo.

É importante ressaltar, no entanto, que quando o resto do que foi dividido é igual a 10 é preciso
considerá-lo como 0.

Voltando para o exemplo com o qual temos trabalhado, temos então os seguintes fatos:
O valor resultante da divisão é “268” e o RESTO é 2.

Na prática isso representa que o número de CPF fictício que citamos no início foi validado no que
diz respeito ao seu primeiro dígito.

## Validação do segundo dígito

Depois de validado o primeiro dígito, é hora de determinar a validade do segundo. O processo é
bastante similar, só que ainda mais simples, pois a fórmula do CPF aqui é trabalhada a partir do
primeiro dígito já verificado.

Nesse caso, é preciso considerar os 9 primeiros dígitos junto do primeiro dígito verificador. Depois
disso multiplica-se os 10 números pela se sequência decrescente partindo de 11 a 2. No exemplo
com o qual trabalhamos a coisa fica assim:

5 * 11 + 2 * 10 + 9 * 9 + 9 * 8 + 8 * 7 + 2 * 6 + 2 * 5 + 4 * 4 + 7 * 3 + 2 * 2

Diante disso, podemos obter o 347 como resultado.

A partir daí, basta levar em consideração o processo da primeira verificação, onde o resultado é
multiplicado por 10 e dividido por 11. O exemplo então fica assim:

347 * 10 / 11

Levando em conta o que foi dito anteriormente, é preciso verificar o RESTO. Considerando que o
resultado do que foi dividido é 315, o RESTO é 5.

Depois disso é preciso verificar se o resto é correspondente ao segundo dígito verificador. A partir
dessa confirmação, então pode-se considerar o CPF como válido, que no caso é o número fictício
529.982.247-25.

### [Resolução ex03](./src/ex03.ts)
