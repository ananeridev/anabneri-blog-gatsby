---
title: Como foi construir um Blog do zero com Gatsby
date: 2020-05-22
template: blog
image: ./helloworld.jpg
banner: ./helloworld.jpg
description: Como eu desenvolvedora backend totalmente noob em estilos consegui construir um blog do zero. Vou contar aqui algumas experiências, desafios e o que eu mais aprendi.
---

## Neste artigo vou abordar alguns tópicos como:

- O que é o Gatsby
- Minhas maiores dificuldades
- Tecnologias que eu aprendi
- Vale a pena usar gatsby em seu site?
- Vou abandonar o dev.to ou o Medium?
- Comunidade do Gatsby

# O que é Gatsby 🤔

Pode-se dizer que o gatsby é um gerador de site estático baseado em React, que é alimentado com Graphql. O Gatsby tem um quickstart fantástico onde ele utiliza de pré-configurações para criar um site que usa apenas arquivos estáticos para o carregamento de páginas de uma forma incrivelmente rápida!
Você pode encontrar mais informações no próprio site do Gatsby e até fazer se quickstart para começar a brincar: [site do gatsby.js](https://www.gatsbyjs.org/)

# Minhas maiores dificuldades 😩

Bom eu sou uma pessoa que tem bastante dificuldade com front-end e não tenho vergonha nenhuma de admitir isso, no começo da minha carreira eu mexia com temas no tumblr, mas era apenas editar coisas que já existiam, nunca tinha feito nada do zero.

Eu tinha muito receio de ficar muito ruim, ou de eu não entender nada, ano passado (2019) eu testei jekyll pra construir meu primeiro site, peguei um tema pronto e fui colocando do jeito que eu queria, e até que o resultado ficou bem legal: [anabneri.github.io](https://anabneri.github.io/) .

Mas conforme foi passando os dias eu sentia que eu devia fazer algo do zero, pra me desafiar mesmo, pra isso eu optei fazer um curso de uma pessoa bem reconhecida na comunidade o Willian Justen, ouvi falar muito bem do curso de Gatsby dele e resolvi fazer, foi a melhor escolha que eu fiz, pois no curso dele eu aprendi sobre Graphql, estilos, semântica HMTL, React, PWA e etc recomendam que façam!

Só que **uma das coisas que eu mais sofri** foi com as configurações dos Gatsby, por ser um gerador de sites aberto e também alimentado pela comunidade tem muita coisa que muda e atualiza conforme o tempo passa, como por exemplo: o curso do Justen é de 2019 (atual até) e a configuração de _images_ que ele usa não é mais suportada.

Devido a essa dificuldade com o _images_, tive que recorrer a colegas que já manjam dos paranauê para me darem uma luz, foi aí que eu descobri que tem um v2 do remark-images do gatsby, pode parecer bobo, mas foi um erro que fiquei um tempinho.

Responsividade, foi algo que eu penei muito, provavelmente por eu não ter tido muita experiência com isso só com HTML e CSS, mas por mais que durante o curso eu estivesse copiando o código meu código responsivo não funcionava. Foi aí que pedi ajuda, e o próprio Justen mostrou onde estavam meus erros, que era falta de atenção, muitas coisas que ele escrevia durante o curso passaram despercebido para mim, mas acontece claro, porém foi uma grande dificuldade.

**Domain Settings**, olha, uma parada que eu estou sofrendo até hoje foi configurar meu domain, ou seja, esse _.com.br_ que está aí foi difícil, pois peguei meu dominío pela GoDadday e os Ips deles não são os mesmos no Netlify e eu não sabia disso, foi um bate cabeça até achar as configs certas.

> tirando que eu comprei dois domínios sem querer 😂

# Tecnologias que eu aprendi 🦄

Acredito que aprendi toda stack do gatsby, tudo foi muito bem aplicado de forma que quando a gente vai desenvolver usa todos!

Tais staks que eu aprendi foram: GraphQL, StyledComponents, SaaS, **Algolia**, **Disqus**, Media Query, PWA, CSS

# Vale a pena usar gatsby em seu site? 💡

A resposta pra essa pergunta é: depende.

Você precisa se responder essas peguntas antes:

- Qual que é o objetivo do meu site?
- Eu quero aprender algo novo?
- Quero usar algo que vai precisar de muitas resources externas?
- Quero que meu site seja leve?

Se a respostas para essas perguntas for sim, vai fundo, começa a usar, essas perguntas não são uma regra, mas claro que desenvolver seu próprio site é muito divertivo. Se você não estiver afim de desenvolver do zero, pode pegar um template gatsby e customizar ele do seu jeitinho!

Você pode ver mais informações sobre gatsby na live que meu colega [Luis Lança](https://www.twitch.tv/luisslanca) fez, ele manja muitooo de react, gatsby e afins e meu ajudou muito, ele também tem um site dar uma olhada e se inspirar [site do Luis aqui](https://luislanca.com.br/)

# Vou abandonar o dev.to ou o Medium? 🤭

Sinceramente? Minha vontade é de ter minha própria plataforma, **pode ser que uma vez ou outra eu possa postar algo por lá**, mas eu estou tão animada desenvolvendo features pra esse blog, que possa ser que eu escreva bem menos lá.

Um artigo do Willian Justen que me inspirou muito a não desanimar de ter minha própria plataforma foi esse -> [Diga Não Ao Medium e Tenha Sua Própria Plataforma](https://willianjusten.com.br/diga-nao-ao-medium-tenha-sua-propria-plataforma)

Uma frase bem bacana que ele usa é:

> Ter um blog pessoal, marca sua presença na web, as pessoas te identificam e identificam o seu conteúdo. Por mais que o Medium tenha um alcance bem grande e você ache que está ganhando notoriedade com isso, a sua imagem é pulverizada e às vezes o retorno é até menor do que se fosse em seu próprio blog.

Não posso citar mais razões, é sua marca que você está criando, utilizando as outras plataformas eu ficava muito focada em quantos likes tinham, e etc sendo a a relevância era pequena, e só quem tinha visibilidade são posts gringos (isso é característico do dev.to) claro que o dev.to ainda é uma plataforma que está sendo adotada pela comunidade brasileira, mas você quer se empenhar em alavancar de graça uma empresa ou a sua própria? Pense nisso...

![pessoa impressionada](https://media.giphy.com/media/iNg9XvTGBI83S/giphy.gif)

**Mas claro, comece de algum lugar, se você tem vontade de escrever um artigo o Medium e o dev.to são ótimos!**

# Comunidade do Gatsby 🥰

Gatsby tem uma comunidade incrível, fóruns abertos, repositório no github e documentação em português!

[Repositório do Gatsby](https://github.com/gatsbyjs/gatsby)

# Valeu por ter lido até aqui 💜

Obrigada por ter tirado um tempinho do seu dia para ler meu artigo, espero que eu tenha te ajudado em algo, se sim deixe aqui nos comentários

## Para receber meus artigos em primeira mão mande seu email na aba "CONTACT" <3

#### Links

[Documentação do Gatsby](https://www.gatsbyjs.org/)
[Curso de Gatsby do Willian Justen](https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/)
[Site do Luis Lança](https://luislanca.com.br/)
