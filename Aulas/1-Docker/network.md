# Network

A coisa mais comum de fazer com a camada de network e a de fazer um container se comunicar com o outro, como de um banco de dados com um servico back end em laravel

## Tipos de network

### Bridge

O padrao das networks

Voce utiliza ela pra que se tenha uma ponte entre dois containers

um teste bom para fazer se dois containers estao sendo conectados e de fazer o ping entre ambos, para saber o ip das duas maquinas eu posso rodar o comando

`docker network inspect`

se rodar dois containers com a mesma rede eu consigo fazer a comunicacao de forma mais facil

```docker
docker run -dit --name ubuntu2 --network minharede bash
docker run -dit --name ubuntu1 --network minha rede bash
```

Mas antes crie a rede com `docker network create minhrede`

E vc pode conectar um container numa rede sem ser pelo --network com

`docker connect nomerede nomecontainer`

### Host

Ele mescla a network do dcoker com a do host do docker

Ele faz com que minha maquina e a do container entrem na mesma rede, tendo uma comunicacao bidirecional de comunicacao sem precisar expor a rota

no caso do nginx como ele expoe a porta 80 logo a porta 80 do meu pc deveria estar rodando o nginx

Fique atento quando usar o host pq dependendo da maquina (se for um mac) ele vai tar usando o MAC da maquina virtual e nao o MAC da maquina mesmo, tendo inconsistencias 

Comando pra se usar o host

```
docker run --rm -d --name nginx --network host nginx 
```

### Overlay

As vezes vc tem varios containers em maquinas diferente e quer que eles se comuniquem

O docker swarm ele se apropria dessa ideia

### Mac Lan

voce consegue setar uma mac em um container e fazer com ele se comunique com sua maquina normal (nao e tao comum )

### None

O container pode rodar sem rede, de forma isolada
