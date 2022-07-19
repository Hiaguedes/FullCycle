# Caracteristicas arquiteturais

Quando você entende a estrutura de como as coisas funcionam, você consegue pensar de forma intencional nos pontos que vão te impactar. 

Quando não temos uma visão geral de como você deve trabalhar em cima de qualquer coisa, o que vai acontecer de forma geral? Você deixa de resolver problemas de forma intencional. O que isso significa? Quando você trabalha baseado em uma intenção, significa que você está se preparando para resolver determinados tipos de problema. Quando você não trabalha de forma intencional, significa que, eventualmente, quando você está desenvolvendo algo, aquele problema pode até ter sido resolvido, mas ele é meio que resolvido indiretamente

## Caracteristicas Operacionais

Pensar em como sua aplicacao pode crescer de forma operacional (preciso aumentar maquinas?)

Disponibilidade -> parece obvio mas e necessario isso, por que determinados sistemas nao ficam disponiveis 24/7, observabilidade depende muito desse topico, as vezes e bom ter periodos de indisponibilidade pra manutencao do sistema

Recuperacao de desastres -> Como que vamos fazer pra recuperar um sistema quando se esta fora do ar, ter processos de mitigacao do problema 

Performance -> Latencia, capacidade de receber requisicoes, que banco de dados usar pro numero de requisicoes que vai receber (isso e trabalhar de forma intencional)

Backup -> como ta sendo o backup do software, testar o backup (backup e algo que as pessoas tem medo de mexer), politicas de backup, deixar os backups serem separados

Confiabilidade e seguranca -> Se proteger de bots que podem acessar sua plataforma com web scrapping (com captcha as vezes isso da certo auhsuahsa) ou ataque de brute force (bloquear o login apos 3 tentativas), regra de politica de senha 

Robustes -> AS nuvem nao e infinita e sem soluciona tudo, pq mesmo a aws da pane e nao da conta de uma regiao inteira

Escalabilidade -> poder da aplicacao escalar, vertical -> recurso da maquina local, horizontal -> ter mais maquinas

## Caracteristicas Estruturais

Configuravel -> preciso botar uma conexao com o banco, alteracao na conta do gateway, se o gateway falhar posso usar outra?

Extensibilidade -> A aplicacao esta pensada pra que se consiga crescer, de forma que se coloque apenas plugins nela, trabalhar com interfaces e adaptadores pra conseguir trabalhar com gateways, por que podemos querer trocar ou adicionar mais conexoes sem ter que mudar a base do codigo. 

Facil instalacao -> O ambiente tem que ser de facil instalacao (trabalhar com containers), e isso passa pela aplicacao ser configuravel (as vezes isso nao e tao facil), coisas como filas ou elastic search sao dificeis de configurar

Reuso de componentes -> ter boas libs que centalizam componentes (pois equipes diferentes criam os mesmo componentes porem com designs de codigo diferentes, mas a principio fazem a mesma coisa)

Internacionalizacao -> Ja conseguir pensar em pontos que vao impactar o processo, como questao das datas, o que vai acontecer se eu puder fazer pagamentos em varios paises (pagamento, parcelamento, conversao)

Facil manutencao -> por que todo mundo consegue fazer um aviao mas nem todo mundo faz um aviao facil de se concertar (aprenda SOLID, a pensar em suas camadas, adaptadores e interfaces, padroes de projeto, teste)

Portabilidade (diversos bancos de dados, utilizar diversos vendors de qualquer coisa uahusahs) 

Facil suporte -> ter observabilidade, ter bons logs, benchmarks, criar metricas

## Caracterisitcas cross cutting

Pontos de cruzamento da aplicacao

- Acessibilidade -> Qual o publico que vai acessar sua aplicacao (front end), leitores de tela, padroes de acessibilidade

- Processo de retencao e recuperacao de dados -> quanto tempo os dados serao mantidos, muito dos dados nao precisa ser mantidos (as vezes isso e caro), dados quentes ficam ali o tempo todo mesmo

- Autenticacao e Autorizacao -> Arquiteturas distribuidas faz com que esse topico tenham muitas formas de serem feitas, questoes a pensar: como outros servicos vao acessar esses dados de autorizacao, politicas de timeout de autorizacao 

- Legal -> leis de cada pais 

- Privacidade -> Privacidade dos dados ta ai em voga ne

- Seguranca -> pense em seguranca desde a borda, webfirewall, mecanismo de identificacao de robos, sql injection, dicas de seguranca da OWASP, utilize softwares de empresas especializadas em seguranca nao tente criar o seu tem pessoas muito boas especialistas nisso nesses projetos

- Usabilidade -> nao e so usabilidade no front end como ux ou hotjar (que trackeia a usablidade no front) mas tambem sobre como sua api esta documentada e se ela e de facil entendimento e utilizacao, os contratos estao bem estabelecidos?
