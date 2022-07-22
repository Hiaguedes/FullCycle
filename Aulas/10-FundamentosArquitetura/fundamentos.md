# Fundamentos

## Tipos de arquitetura

### Software

A mais famosona

E uma disciplina da engenharia de software, e sobre tudo o que envolve a engenharia de software

Diretamente ligada ao processo de desenvolvimento de software, a arquitetura de solucao atua num nivel mais alto que o de software, o de software e num nivel sempre mais baixo, por mais que elas se cruzem em um ponto (afinal os bytes no final do dia sao para o negocio)

Afeta diretamente na estrutura organizacional da empresa

- Formacao dos times
- Estrutura dos componentes do software
- Organizacoes que desenvolvem sistemas de software tendem a produzir sistemas que sao copia das estruturas de comunicacao dessas empresas (Lei de Conway)

Se eu tenho um front, um back e um DBA entao tenho uma comunicacao de front -> back -> DBA

se eu tenho apenas um back entao e provavel que o front esteja dentro do codigo do back end assim como o DBA

#### Definicao de arquitetura de software

E a relacao entre os objetivos de negocio e suas restricoes com os componentes a serem criados e suas responsabilidades visando sua evolucao do software

E a organizacao fundamental de um sistema e seus componentes suas relacoes seu ambiente bem comos os principios que guiam seu design e evolucao (IEEE Standard 1471)

A grande arte da arquitetura de software esta em como esse software vai evoluir com o passar do tempo e ele tem que pensar nesse software a longo prazo

O processo de arquitetar um software estabelece que o que esta sendo desenvolvido parte de um conjunto maior (o negocio)

### Solucao

Fica entre a area de negocioes e de software, e uma area bem tecnica porem com visao no negocio

Transforma requisitos de negocio em solucoes de software, pois a area de negocios tem umas ideia mutcho lokas e essas ideias mutcho lokas precisam virar software de alguma forma ou de outra

Faz desenhos arquiteturais da solucao de um software para reproduzir como ele ira funcionar, entao ele precisa fazer esse esforco e ter conhecimento de varias ferramentas de mercado pra fazer isso acontecer, algumas dessas ferramentas estao abaixo

- C4
- UML
- BPMN

Ele precisa fazer essa ponte todo dia

Analisa os impactos comerciais em relacao a uma escolha de tecnologia

Pode participar do processo comercial de pre venda e venda

Analisa os impactos dos custos pro negocio, normalmente e uma pessoa que se comunica muito bem e participa bastante de reuniao

###  Tecnologica

Especialidade em tecnologias especificas de mercado (quando alguem manja muito de uma determinada ferramenta), ele vai gerar valor pros projetos em fornecer apoio nessas tecnologias que por muita das vezes sao complexas

Arquiteto Elastic, Java, Linux, Android, DBA, Oracle, SAP

Muita das vezes e necessario ter certificados pra esses tipos de solucoes

### Corporativa

Politicas e Regras que impactam uma organizacao como um todo, tem a ver com a governanca das tecnologias e vendors usados na empresa

Avaliacao de custos que afetam todo processo de producao do time de engenharia

Avaliacao de possiveis novas tecnologias, afinal faz sentido mudar do dotnet 5 pro 6 nesse momento?

Planeja grandes implantacoes e isso muita das vezes reflete em uma mudanca cultural na empresa, as vezes ate pensando em outras partes da empresa senao a parte de tecnologia

## O papel do arquiteto de software

Transformar requisitos de negocio em padroes arquiteturais

Orquestrar pessoas desenvolvedoras e experts de um dominio, ou seja fazer eles se falarem bem 

Entender de forma profunda conceitos e modelos arquiteturais (isso muita das vezes e um papel de um tech lead)

Auxilia na tomada de decisao nos momentos de crise, pois ele tem bastante cicatriz ai pelo passado aushauhsa

Reforca boas praticas de desenvolvimento, tem q ter teste, solid, como ta a conexao com o banco esse tipo de coisa

Participa mais efetivamente de code reviews pois o arquiteto nao vai ter tanto tempo assim pra ficar codificando ou ficando mais efetivamente ali com a equipe (as vezes ele ta em outros projetos tbm)

Apesar de nem todas as organizacoes possuirem o cargo de arquiteto de software normalmente profissionais mais experientes como desenvolvedroes seniors e tech leads acabam desenvolvendo esse papel baseado em suas expectativas anteriores

Muita das vezes as empresas possuem um departamente de arquitetura que auxilia os diversos times da organizacao com questoes arquiteturais, pois muita das vezes o time de arquitetura tem ideia de como certas ideias funcionam ou funcionaram antes na empresa 

## Por que aprender arquitetura de software?

- Poder navegar da visao macro pra visao micro de um ou mais softwares

Entender quais sao as diversas opcoes que temos pra desenvolver a mesma coisa e escolher a melhor solucao para um determinado contexto. Pois nem sempre comecar ja no desaclopado e uma solucao boa, pois se e enxuto a aplicacao ela pode ser monolitica e ta tudo certo

Pensar a longo prazo no projeto e sua sustentabilidade, independente de pressao prazo e poderes dentro da empresa, pois vc pode ir mudando ele de forma a ser viavel a longo prazo

Tomar decisoes de forma mais fria e calculada evitando assim ser influenciado por hypes de mercado, pq nao adianta usar a tecnologia pela tecnologia e sim se ela vai atender a demanda necessaria

Mergulho em padroes de projeto e de desenvolvimento e suas boas praticas

Ou seja nao basta apenas copiar algo pronto, tem que se interar de todas as nuancias de um padrao de projeto pra saber oq vc ta falando ou fazendo

Ter mais clareza do impacto que o software possui na organizacao como um todo, pois muita das vezes vemos que nao se ha pertencimento no lugar em que se esta

Tomar decisoes com mais confianca, pois essa falta de seguranca pode congelar a carreira ou nao saber diversas formas de se resolver um problema voce se engessa na carreira

## Arquiterua vs Design

Pra muita gente e a mesma coisa mas nao necessariamente e

- Arquitetura: escopo global ou alto nivel, padronizar formas de um software ser usado em diversos contextos

- Design: Escopo local, um codigo agindo como facilitador em um projeto especifico

Atividades relacionadas a arquitetura de software sao sempre do design. Entretanto, nem todas as atividades de design sao sobre arquitetura. O objetivo primario da arquitetura de software e garantir que os atributos de qualidade, restricoes de alto nivel e os objetivos do negocio, sejam atendidos pelo sistema. Qualquer decisao de design que nao tenha relacao com este objetivo nao e arquitetural. Todas as decisoes de design para um componente que nao sejam visiveis para fora dele geralmente tamben nao sao

Arquitetura e algo mais q design, o design ele pode implementar algo especifico arquitetura implementa conceitos mais gerais

## Sustentabilidade

De um software no caso

Desenvolver software e caro mas e o q faz muita das vezes a empresa existir e ter um proposito

Software resolve uma dor (dor de atender pra mais gente)

Software precisa se pagar ao longo do tempo

O software com a empresa eles formam um organismo, ele precisa evoluir junto com a empresa e o custo de manter um software precisa ser muito menor q o lucro q a empresa tem, pra que ele se pague todo dia

Precisa-se acompanhar a evolucao do negocio, mesmo q no comeco se tenha pago mto por ele e ele esteja bem dificil de evoluir

Quanto mais tempo o software fica no ar mais retorno ele gera

A solucao precisa ser arquitetada

## Pilares da arquitetura de software

- Estruturacao -> facil evolucao, componentizacao para atender os objetivos de negocio

- Componentizacao

- Relacionamento entre sistemas, nao necessariamente micro servicos, mas as vezes rodar um sistema dentro do outro

- Governanca, existe momentos que tem q ter padronizacoes, definicoes, protocolos. Governancas sao proprias para que um software evolua por que pessoas vao e vem mas a forma como um software evolui precisa ser independente de pessoas. As pessoas as vezes sao tao necessarias em determinados projetos que se evita uma promocao pra outra area por medo daquele projeto acabar

## Requisitos arquiteturais

Softwares tem diversos requisitos

Com squads esses processos ficaram nao tao formais como eram antes

Exemplos de requisito

- Performance -> Uma requisicao nao pode passar de x tempo, uma maquina de um servidor deve aguentar x transacoes, conectividade deve ser o maximo de tempo possivel se detectar inatividade diminui o tempo e pergunta se esta ai

- Armazenamento de dados -> Espalhamento de datacenters, utilizacao de cdns, cumprimento de leis de seguranca

- Escalabilidade -> Escalamento vertical ou horizontal, load balancer

- Seguranca -> Certificacoes, criptografia

- Legal -> Legislacao de um pais como LGPD

- Audit -> Garantir formas de auditoria pra ganhar um reconhecimento ou uma carta pra poder atuar com tal transacao

- Marketing -> Atuar em campanha de marketing e ter disponibilidade para aquele momento especifico, ter como trackear informacoes importantes coletadas durante uma exposicao, cachear informacoes vitais pro usuario poder usar tal funcionalidade

Normalmente essas RAs sao bem organicas e pouco estruturadas, e o requisito se pega de forma implicita, porem organizar isso ajuda bastante na hora da arquitetura 

## Perspectivas para arquitetar um software

- Performance (e como metrificar)

- Escalabilidade

- Resiliencia (todo software nasceu pra falhar )
