# DDD (domain driven design)

DDD e sobre ter clareza sobre oq aquele pedaco de codigo faz, pois o lance do DDD e sobre criar um padrao de escrita de codigo e cada pedaco de codigo estara por onde deveria estar

DDD e para projetos grandes que tem diversos escopos de dificil compreensao ate

## Ponto de partida

DDD e muito mais teorico do que pratico entao se prepara uashuasa

DDD e sobre como desenhamos o codigo pra protegermos o dominio, que e o principal do codigo

O que e o DDD? E uma forma de desenvolver software com o foco no coracao da aplicacao - o que chamamos de dominio - tendo o objetivo de entender suas regras, processos e complexidades separando-as assim de outros pontos complexos que normalmente sao adicionados durante o processo de desenvolvimento

Esses pontos complexos que normalmente vem do negocio que coloca situacoes que sao complexas da natureza do proprio negocio e do dev que coloca a complexidade pra resolver esses problemas

Conseguir modelar software e microsservicos e intrinseco na ideia do DDD e entender o conceito do DDD as vezes e mais importante que usar determinados padroes de projetos

Grandes projetos falham por falta de clareza, por nao estar bem modelado o problema, o negocio nao fala a mesma linha q o dev 

## Complexidade de software

- DDD deve ser aplicado para casos de softwares complexos

Um sisteminha de padaria nao faz o menor sentido de estar com DDD por ser muito simples e o escopo nao e tao dificil para se separar esses modulos

O ddd se faz util quando vc se perde no que cada parte do sistema faz, ou quando tem muitas pessoas diferentes mechendo no mesmo projeto, onde cada parte da empresa fala inclusive linguas diferentes

- Grandes projetos possuem muitas areas, muitas regras de negocio, muitas pessoas com diferentes visoes em diferentes contextos

O software e vivo pq tem pessoas trabalhando nele e que mantem aquilo vivo, com seus jargoes, estilos de negocio e visoes de mundo

- Nao ha como nao utilizar tecnicas avancas em projetos de alta complexidade

Tem muitas coisas dentro de um software complexo (desde subsistemas a codigo de pastelaria) e precisamos unificar tudo isso de forma clara

- Grande parte da complexidade desse tipo de software nao vem da tecnologia, mas sim da comunicacao, separacao de contextos, entendimento do negocio por diversos angulos

O maior problema nunca e do tipo de linguagem ou framework escolhido ou da forma de implementar (e sim nos fazemos muita cagada), o grande erro sempre e da complexidade do negocio esse transporte do negocio pra tecnologia e muito problematica

- Pessoas

Pessoas deixam o trabalho sempre muito mais complexo uahsuahsauhs simples assim, seja por regras, seguranca, riscos, negocio e o dev ta no meio tentando viabilizar tudo 

## Como o DDD pode te ajudar?

Falar que o problema e das pessoas e muito facil ne, mas como que podemos fazer pra que esses problemas e complexidades fiquem mais tangiveis? Aqui vamos falar disso

- Entender com profundidade o dominio e subdominios da aplicacao

Dominio e algo que esta ligado a funcao principal do que estamos desenvolvendo, ou o coracao desse software

Subdominios sao separacoes do dominio, pra que se tenha mais clareza ainda da complexidade do dominio, essa separacao e otima para delimitar o escopo do projeto

- Ter uma linguagem universal (linguagem ubiqua) entre todos os envolvidos

Por que sim os jargoes atrapalham no dia a dia do software, pois a linguagem universal permeia todo o processo de desenvolvimento, pois todo mundo tem q estar na mesma pagina pois nao estando o software vai ter um desalinhamento desde o comeco

O problema da linguagem universal e que ela cultural entre todos do pais aushua e nao somente local da sua empresa e uma empresa pode ser cliente de outras empresas e eles se afetam nessa mesma palavra, com a linguagem ubiqua temos uma otima chance da fazer o projeto dar certo

- Criar o design estrategico utilizando Bound Contexts

- Criar o design tatico para conseguir mapear e agregar as entidades e objetos de valor da aplicacao, bem como os eventos de dominio

- Clareza do que e complexidade de negocio e complexidade tecnica

## Resumo

Uma rapida pincelada sobre o q se trata o DDD.

No final das contas DDD nao e so uma organizacao de pastas e algo muito mais profundo

```txt
Pra encurtar a historia, DDD e sobre conseguir modelar de forma explicita uma linguagem universal dentro de um contexto delimitado
```

Se a linguagem muda o contexto muda tambem, e isso e proprio de se saber delimitar o contexto
