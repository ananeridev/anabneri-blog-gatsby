---
title: React.js em 5 minutos
description: Introdução ao React em 5 minutos 😎
date: 2019-08-08
template: blog
thumbnail: ./react-capa2.jpg
image: ./react-capa2.jpg
banner: ./react-capa2.jpg
---

#### Esse tutorial é inteiramente traduzido e adaptado por mim, então o conteúdo não é inteiramente meu!!! Mas como eu achei muito interessante, resolvi deixar no meu site porque me ajudou e creio que pode ajudar mais pessoas! ENJOY DUDES

## A configuração

Ao começar a utilizar o REACT, você deve usar a configuração mais simples possível: um arquivo HTML que importa as bibliotecas `React` e `ReactDOM` usando Tags de script, como esta:

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/gvukucle2xbu9onuyeae.png)

Também importamos Babel, já que o React usa algo chamado JSX para escrever marcações. Vamos precisar transformar esse JSX em JavaScript simples, para que o navegador possa entendê-lo.

Há mais duas coisas que vocês precisam observar:

1. a `<div>` com o ID de `#root`. Este é o ponto de entrada para o nosso aplicativo. Este é o lugar onde todo o nosso aplicativo vai viver.
1. o `< script type = "texto/babel " >` tag no corpo. É aqui que escreveremos o nosso código React. js.

Se você quiser experimentar com o código, confira este playground Scrimba.

## Componentes/ Components

Tudo em REACT é um componente, e estes geralmente tomam a forma de classes JavaScript. Você cria um componente estendendo-se sobre a classe `react-component`. Vamos criar um componente chamado `Eai rapaziada`.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/a52jut61zu7d357sutpz.png)

Então é aqui que conectamos nosso componente `Hello` com o ponto de entrada para o aplicativo (`<div id="root"></div>`). Isso resulta:

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/57cqb4hzm1y76qnkjquu.png)

A sintaxe de HTML'ish que apenas olhou para (`<h1>` e `<Hello/>`) é o código JSX que mencionei anteriormente. Não é realmente HTML, embora o que você escreve lá acaba como Tags HTML no DOM.

O próximo passo é obter o nosso aplicativo para manipular dados.

## Manipulação de dados

Existem dois tipos de dados no React: props e State. A diferença entre os dois é um pouco complicado de entender no início, por isso não se preocupe se você encontrá-lo um pouco confuso. Vai se tornar mais fácil quando você começar a trabalhar com eles.

A principal diferença é que o estado é privado e pode ser alterado de dentro do próprio componente. Os adereços são externos e não são controlados pelo próprio componente. Ele é passado de componentes acima da hierarquia, que também controlam os dados.
**"um componente pode alterar seu estado interno diretamente. Ele não pode mudar seus adereços diretamente."**

Vamos dar uma olhada mais de perto em props/adereços primeiro.

## Props/ Adereços

Nosso componente `Hello` é muito estático e renderiza a mesma mensagem independentemente. Uma grande parte do REACT é a reutilização, o que significa a capacidade de escrever um componente uma vez e, em seguida, reutilizá-la em casos de uso diferentes — por exemplo, para exibir mensagens diferentes.

Para alcançar esse tipo de reutilização, adicionaremos adereços. É assim que você passa adereços para um componente:

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/amkugslexlm7q2roszzl.png)

Este prop é chamado de `message` e tem o valor "my friend". Podemos acessar este prop dentro do componente Hello referenciando `this. props. Message`, assim:

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/heqcqkvtax9co4u4h0tc.png)

Como resultado, isso é renderizado na tela:

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/m0jpc8qij1tmici4480m.png)

A razão pela qual estamos escrevendo {this. props. Message} com chavetas é porque precisamos informar ao JSX que queremos adicionar uma expressão JavaScript. Isto é chamado \* _ escapando _ \*.

Então agora temos um componente reutilizável que pode renderizar qualquer mensagem que quisermos na página. Woohoo!

No entanto, e se quisermos que o componente seja capaz de alterar seus próprios dados? Então temos que usar o estado em vez disso!

## State

A outra maneira de armazenar dados no React está no estado do componente. E ao contrário dos props — que não podem ser alterados diretamente pelo componente — o estado pode.

Portanto, se você quiser que os dados em seu aplicativo mudem — por exemplo, com base nas interações do usuário — ele deve ser armazenado no estado de um componente em algum lugar do aplicativo.

### Inicializando o state

Para inicializar o estado, basta definir `this. State` no método `Constructor ()` da classe. Nosso estado é um objeto que, no nosso caso, só tem uma chave chamada "mensagem".

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/jzc1miie4mz1g8baj6ae.png)

Antes de definir o estado, temos de chamar `super ()` no construtor. Isso é porque `this` é não inicializado antes `super ()` foi chamado.

Alterando o estado
Para modificar o estado, basta chamar **this. setState ()**, passando o novo objeto de estado como o argumento. Faremos isso dentro de um método que chamaremos de `updateMessage`.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/bnq176ei2qkbr3a53xcm.png)

TO **updateMessage** método, em seguida, chama **this. setState ()** que altera o `this.state.message`valor. E quando clicamos no botão, aqui está como isso vai jogar fora:

ENTÃO É ISSO!!!

## Conlusões

**O que eu sei de JavaScript é bem pouco, desde que eu comecei a estudar sobre essa mini aula de React, e consegui reproduzir, resolvi compartilhar com a seguinte lição: "é possível pra todos sim", eu tinha um certo medinho de mexer com React mas gostei bastante, principalmente por ser otimizado**

## Referência e artigo que me ajudou

https://www.freecodecamp.org/news/learn-react-js-in-5-minutes-526472d292f4/
