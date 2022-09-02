# Agregados

Quando uma entidade so existe com outras

Um agregado e um conjunto de objetos associados que tratamos como uma unidade para proposito de mudanca de dados

```
Customer 1->n Order 1->n Item
    |
    |
    |
    |
  Address (value object)
```

Tres entidades que estao muito relacionadas, e customer se relaciona com Address, e suas relacoes 1:n ou 1:1

Um ordem so existe pq um cliente pode ordenar algo, e essa relacao e tao forte tanto que preciso de um id do cliente que criou essa ordem

Customer e address formam um customer aggregate

E Order e Item formam um order agreggate, pois items sao adicionados a uma ordem, ele forma um agregado pois a entidade Order e onde esse agregado comeca

Essa separacao e importante pois se os items estiverem no mesmo agregado entao a relacao e pelo objeto senao e pelo id
