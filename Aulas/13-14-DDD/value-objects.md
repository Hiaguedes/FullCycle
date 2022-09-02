# Value Objects

-  Quando voce se preocupa apenas com os atributos de um elemento de um model, classifique isso como um Value Object

- Trate o Value Object como imutavel

Eric Evans

Exemplo de value object

```
Address:

- Street
- City
- State
- Zip Code
```

O endereco ele se troca, nao se muda (nenhum dos atributos) e mesmo se mudar, mesmo que eu mude pra casa do lado, o endereco inteiro muda mesmo q seja somente o numero dela, e isso nao me quebra o sistema, pois ele nao precisa de um id ja que ele e unico por si so.

O cpf e unico e podemos se aproveitar disso
