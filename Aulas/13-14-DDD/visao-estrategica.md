# Visao estrategica

Context Mapping

Uma das coisas que precisamos pra fazer a modelagem e sobre como as coisas se encaixam essa e a verdade

Os contextos eventualmente se conversam, eventualmente eles precisam servir um ao outro e levando isso em conta na hora da modelagem precisamos olhar pra ela e saber a estrategia adotada pra conseguir ver suas relacoes e conexoes

## Context Mapping na pratica

Sobre o mapeamento dos contextos existem e suas relacoes

Caixinha do negocio

Meu Core business

<hr />

Venda de ingressos online          

Suporte ao cliente

Venda de ingressos de sites parceiros (casas noturnas, shoppings)

Pagamento

<hr />

Talvez cada contexto seja um time dentro da 

Que relacoes podemos ter nesses quatro dominios

Vendas de ingresso se comunica bilateralmente com venda de ingresso pra parceiros, obviamente (pois ambos tem ingressos) e um servico q um cria precisa ser compartilhado entre ambos

Podemos ter um nucleo compartilhado entre esses dois sistemas (pode acontecer mas cuidado pq um pode quebrar a operacao do outro)

A parte de venda de ingresso (os dois)  precisa se comunicar com a parte de pagamentos pra vender o ingresso, ou seja o time de pagamento precisa oferecer um servico pro time de vendas consiga fazer suas vendas, num esquema cliente / servico (upstream oferece o servico e dita as regras de como isso sera feito, downstream e quem consome o servico e se adapta pra poder consumir o servico)

O suporte ao cliente tambem pode ter essa de cliente e fornecedor, a parte de venda cria um servico pro suporte do cliente (ou vice e versa tbm, nao ha regra depende do funcionamento da empresa)

Alem desses servicos imagine que voce tem um gateway de pagamento e ele fica externo ao nosso servico, a area de pagamento se comunica com o gateway, fazendo com que o gateway forneca o servico e o pagamento consome isso (o gateway impoe como pagamento funciona e e isso ok?), nesse caso temos uma relacao conformista pq independente se ja esta implementado ou nao o servico dentro de pagamento vc so aceita e pronto aushaus

Mas claro que posso pedir pro fornecedor fazer algo especializado pra mim, mas nem sempre isso e possivel, quanto mais conformista ficamos mais estaremos atrelados a esse sistema. Eventualmente fazemos algo como ACL (camada anti corrupcao) ele so e uma camada de interface entre o gateway e o servico, ele e um adaptador que facilita pra um dia poder mudar o gateway de pagamento, pois so mudo o contrato entre os dois

## Padroes e starter kit

- Partnership

- Shared Kernel

- Customer-Supplier Developmente

- Conformist

- Anticorruption-layer

- Open host service (um contexto vai fornecer servicos com tal protocolo)

- Published language (exemplo: qual json uso pra poder consumir um servico)

- Separate ways (dois que nao se conversam)

- Big Ball of mud (sistema que mistura a porra toda aushaushuas)

Porem como os nomes sempre atrapalham entao segue um bom git ai

https://github.com/ddd-crew/context-mapping

Tem bons diagramas e imagens explicando o significado de cada coisa

No markdown eles colocam o link do miro pra vc poder mapear seus sistemas com o guide deles 
