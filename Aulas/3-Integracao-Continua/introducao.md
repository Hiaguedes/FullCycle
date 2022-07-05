# CI (continuous integration)

E o processo de integrar modificacaoes do codebase de forma continua e automatizada, evitando assim erros humanos de verificacao, garantindo mais agilidade e seguranca no processo de desenvolvimento de um software

Sao programas que se rodam num processo de PR (rodar testes, linter, problemas de seguranca) e isso de forma automatizada

## Principais processos

- Testes
- Linter
- Verificacao de qualidade de codigo
- Verificacao de seguranca
- Geracao de artefatos prontos pra deploy
- Identificacao da proxima versao a ser gerada no software
- Geracao de tag e release
- Status Check (e a garantia de que uma PR nao pode ser mergeada ao repositorio sem antes ter passado pelo processo de CI ou pelo code review)

Temos bastante liberdade com um simples processo de CI

## Ferramentas populares

- Jenkins
- Github Actions
- Circle CI
- AWS Code Build
- AZURE DevOps
- Google Cloud Build
- Gitlab Pipelines / CI

## GitHub Actions

O que vamos mexer e com o github actions, que e a mais nova e ele e baseado em eventos e esses eventos podem ser gerados acoes automaticas 

O github actions e um automatizador de workflows de desenvolvimento de software

Ele utiliza os principais eventos gerados pelo GitHub para que possamos executar tarefas dos mais variados tipos, incluindo processos de CI

### Dinamica

Um workflow sao um conjunto de processos definidos por voce (fazer o build + rodas os testes)
E possivel ter mais do que um worflow por repo
Definidos em arquivos yml em .github/workflows
Possui um ou mais jobs
E iniciado baseado em eventos do github ou atraves de agendamento

Eventos -> Filtros (desencadeia o que se precisa fazer) -> ambiente -> acoes a serem executadas

on push -> somente on push na branch master -> roda num ambiente ubuntu -> uses: action/run-composer - run: npm run prod

o uses sao as acoes do github dos eventos que o proprio github possui, e esses actions tem tbm as actions de alguns desenvolvedores, o run e um comando bash mesmo

## Actions

E a acao que de fato sera executada em um dos steps de um job em um workflow, ela pode ser criada do zero ou ser reutilizada de actions pre-existentes

Uma actions pode ser desenvolvida ou ser pega do marketplace do github

## Cost?

Se voce tiver um repo publico voce pode usar a vontade

Mas se for privado vc tem planos

Isso por enquanto...
