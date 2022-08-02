# gRPC

## O que e o gRPC?

- gRPC e uma framework desenvolvido pela google que tem o objetivo de facilitar o processo de comunicacao entre sistemas de uma forma extremamente rapida, leve, independente de linguagem

- Faz parte da CNCF (Cloud Native Computation Foundation)

https://grpc.io/

## Em quais casos utilizar

- Ideal pra microsservicos

- Mobile, Browsers e Backend (browser com ressalvas)

- Geracao das bibliotecas de forma automatica (stubs)

- Streaming bidirecional utilizando HTTP/2

## Linguagens com suporte oficial ao grpc

- Go

- Java

- C, logo C++, Python, Objective C, PHP, C#, Ruby, Node, Dart e Kotlin

## Afinal gRPC, vem do RPC, oq e isso?

Remote Procedure Call

Client -> Server tem a funcao `soma(a,b)` e o cliente tem que executar essa soma no servidor e o RPC e super antigo

O cliente chamaria essa funcao como `server.soma(a,b)`, antes de trabalhava com um cara chamado xml rpc

## Protocol Buffers

o g do grpc nao e nada a ver com o g do google

```txt
Protocol buffer are google's language-neutral, extensible mechanism for serializing structured data - think XML, but smaller, faster and simpler
```

O protocol buffer nao foi criado apenas pro grpc mas da pra se fazer bastante coisa com eles

O grpc utiliza protocol buffer mas nao significa que o protocol buffer so e utilizado no grpc

https://developers.google.com/protocol-buffers/

### Protocol Buffer vs JSON

- Arquivos binarios (protocol buffer usa arquivos binarios) < JSON

- Processo de serializacao e mais leve pra CPU que o JSON

- Gasta menos recursos de rede

- Processo e mais veloz

### Exemplo de arquivo de protocol buffer

```buffer
syntax = "proto 3";
message Search Request {
    string query = 1;
    int32 page_number = 2;
    int32 result_per_page = 3;
}
```

## HTTP/2

- Nome original criado pela Google era SPDY

- Lancado em 2015

- Dados trafegados sao binarios e nao texto como no HTTP 1.1

- Utiliza a mesma conexao TCP para enviar e receber dados do cliente e do servidor (Multiplex)

- Headers sao comprimidos (de text pra binario)

- Server push

- Processo e mais veloz

- Gasta menos recursos de rede

##  Tipos de comunicacao com o gRPC 

### API "unary"

Cliente -> request response <- Server

### API "server streaming

Cliente -> request -> Server

Mas o server pode mandar responses incompletas

De pouco em pouco, inves de esperar minutos pra receber tudo pronto, como um video, imagina ter que baixar todo o video pra receber ele

### Client streaming

Inves de mandar a request inteira eu mando a request aos poucos 

Client <- Response <- Server

### Bi directional streaming

Agrega o server streaming com o client streaming, onde o cliente manda varias requests incompletas e o server manda varias responses incompletas

O streaming e dos dois lados

## A briga, rest vs grpc

- O grpc ainda nao e mto maduro pra browsers, grpc e bom pra usar entre sistemas

### Rest

- Texto/JSON

- Unidirecional

- Alta latencia

- Sem contrato (maior chance de erros)

- Sem suporte a streaming (Request/ Response)

- Design pre-definido

- Usar Bibliotecas de terceiro pra fazer funcionar, pra abstrair bastante coisa

### GRPC

- Protocol buffers

- Biderecional e assincrono

- Baixa latencia

- Contrato definido (.proto)

- Suporte a streaming

- Design e livre (o rest se baseia q vc quer fazer crud forever como executar uma funcao, ativar um job)

- Geracao de codigo 
