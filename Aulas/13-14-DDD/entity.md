# Entidades

Uma entidade e algo unico que e capaz de ser alterado de forma continua durante um longo periodo de tempo 

Vernon Vaugh

Uma entidade e algo que possui uma continuidade em seu ciclo de vida e pode ser distinguida independente dos atributos que sao importantes pra aplicacao do usuario. Pode ser uma pessoa, cidade, carro, um ticket de loteria ou uma transacao bancaria

Eric Evans

Ou seja, eu posso mudar, customizar colocar novas funcoes e atributos, mas voce ainda reconhece ele como ele

O grande ponto e que

```
ENTIDADE === IDENTIDADE
```

Uma entidade anemica e uma entidade que nao carrega regras de negocio, ele apenas se comunica com o banco de dados

Se existe algo q deve acontecer com o cliente entao isso e uma regra de negocio pois ele muda o comportamento da entidade, de forma que ele contemple formulas, acoes e comportamentos que o sistema/produto peca, se ela so carrega dados entao ela nao aplica nenhuma regra

Coisas que validam, tragam excessoes e qq coisa que atenda de forma expressiva uma regra q a aplicacao precisa, entao isso e uma regra de negocio

## Regras de negocio

Coisas que mudam com certeza sao assuntos de regra de negocio

Uma regra de negocio pode ter nomes mais expressivos, inves de set name, podemos ter um change name, que podem implementar mais acoes do que apenas o setar o nome
