# Rest

Por que nao e so sobre os metodos e sobre o verbo que se usa

- Muitos desenvolvedores "ja sabem trabalhar com REST"

- Representational state of transfer

- Surgiu em 2000 por Roy Fielding em uma dissertacao de doutorado

- Simplicidade

- Stateless

Cada requisicao e independente, ele nao guarda sessao

- Cacheavel

## Niveis de maturidade (richardson maturity model)

- Nivel 0: The swamp of POX 

realiza uma transacao do lado do servidor e nao precisa ter um padrao, e o padrao do RPC

- Nivel 1: Utilizacao de resources

Comeca a usar os verbos, as URIs e os tipos de operacao

| Verbo   |      URI      |  Operacao |
|----------|:-------------:|------:|
| GET |  /products | Buscar |
| POST |    /products   |   Inserir |
| PUT | /products/1 |    Alterar |
| DELETE | /products/1 |    Remover |

- Nivel 2 

verbos HTTP, voce usa ele da forma correta, o GET realmente faz a operacao 

- Nivel 3: HATEOAS: Hypermedia as the Engine of Application State

ele sempre vai responder o endpoint mas trazendo oq mais vai poder realizar a partir do que voce fez

Ele me retorna por exemplo uma lista de links de apis que posso acessar na resposta, como por exemplo apos pegar os dados da conta me retornar um junto dele um objeto com o link de deposito, transferencia, encerramento de conta e por ai vai, pois uma pagina leva a outra

## Method e Content Negotiation

Uma boa api rest tem:

- Utiliza URIs unicas para servicos e itens expostos pra esses servicos

- Utiliza todos os verbos HTTP pra realizar as operacoes em seus recursos, incluindo caching

- Prove links relacionais para os recursos exemplificando o que pode ser feito

## HAL, Collection+JSON e Siren

Pradonizacao dos objetos JSON que recebemos

- JSON nao prove um padrao de hipermidia pra realizar a linkagem

- HAL: Hypermedia Application Language (o mais famoso)

padrao HAL:

Media type = application/hal+json

```json
{
    "_links": {
        "self":{
            "href": "http://bla.com"
        }
    },
"id": "",
"name": "",
"_embedded": {
    "familly":[
        {
            "_links":{
                "self":{
                    "href": "http://bla.com/1"
                }
            },
        "id": "",
        "name": "",
        },
    ]
}
},
```

Imagina uma lista de contatos onde vc quer chamar eles pra uma conversa e tbm visitar o perfil deles, seria isso.. Coisas que voce pode fazer com a informacao q vc tem hoje (hypermedia ne)

## HTTP Method Negotiation

HTTP possui outro metodo que e o OPTIONS. Esse metodo nos permite informar quais metodos sao permitidos ou nao em determinado recurso

```http
HTTP/1.1 200 OK

Allow: GET, POST
```

OU 

```http
HTTP/1.1 405 Not Allowed
Allow: GET, POST
```

## Content Negotiation

O processo de contente negotiation e baseado na requisicao que o cliente esta fazendo para o server. Nesse caso ele solicita o que e como ele quer a resposta. O server entao retornara ou nao a informacao no formato desejado

Accept Negotiation

- Client solicita a informacao e o tipo de retorno pelo server baseado no media type informado por ordem de prioridade

```http
GET /product
Accept: application/json
```

Resposta pode ser o retorno dos dados ou:

```http
HTTP/1.1 406 NOT ACCEPTABLE
```

Content Type Negotiation

Atraves de um content type no header da request o servidor consegue verificar se ele ira conseguir processar a informacao para retornar a informacao desejada

```http
POST /product HTTP/1.1
Accept: application/json
Content-Type: application/json

{
    "name": "Product 1"
}
```

Caso nao aceite o content-type

```http
HTTP/1.1 415 Unsupported Media Type
```
 