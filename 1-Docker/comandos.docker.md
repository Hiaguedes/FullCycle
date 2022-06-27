# Comando com docker

## docker ps

Lista os containers rodadando

### parametros

`-a` -> executa todos os containers existentes

## docker run hello-world

Roda uma imagem chamada hello-world (que existe em algum lugar), por que alguns nao seguram o processo, alguns rodam um processo e morrem depois de executados

```bash
hiago@DESKTOP-99SPC2D:~$ sudo docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete
Digest: sha256:80f31da1ac7b312ba29d65080fddf797dd76acfb870e677f390d5acba9741b17
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

Uma aula de docker!

## docker run -it ubuntu bash

ubuntu -> nome da imagem
bash -> o comando q roda dentro do container
-i -> interativo (manter o input ativo pra vc)
-t -> tty (poder digitar coisas, como comandos)

-rm -> remove o container apos o container morrer

```bash
hiago@DESKTOP-99SPC2D:~$ sudo docker run -it ubuntu bash
[sudo] password for hiago:
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
405f018f9d1d: Pull complete
Digest: sha256:b6b83d3c331794420340093eb706a6f152d9c1fa51b262d9bf34594887c2c7ac
Status: Downloaded newer image for ubuntu:latest
root@b7d9fb6aec97:/# pwd
/
root@b7d9fb6aec97:/#
```

## Portas

Se rodarmos a imagem do webserver do nginx nos vemos que

```bash
hiago@DESKTOP-99SPC2D:~$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
483e5089ffb2   nginx     "/docker-entrypoint.…"   48 seconds ago   Up 46 seconds   80/tcp    thirsty_dhawan
```

ele libera uma porta 80 pra gente, mas isso nao quer dizer q acessando localhost:80 no browser eu va conseguir vr alguma coisa

Isso deve ao fato de maquina local e o container onde esta sendo hospedado o webserver serem "maquinas diferentes", lembre-se o container acha q e um sistema diferente dos demais, ate de vc

E pra isso o docker tem uma interface de porta que pode ser feita da seguinte forma

`docker run -p 8080:80 nginx`

que siginifica, a porta 8080 da maquina local que roda o docker (pode ser um servidor remoto) aponta para a porta 80 do nginx (que e a porta liberada para a aplicacao)

### parametro -d no run

`docker run -d -p 8080:80 nginx`

o comando -d significa detached, que significa q o terminal esta desataxado do processo de run do docker pra essa imagem

para atachar de novo vc passa `dokcer attach nome-do-container`

### Renomeando container

com --name nome_novo

## Parando, executando e removendo containers

`docker start <hash id>`

`docker stop <hash id>`

`docker rm <hash id>`

Para remover uma lista inteira de containers eu posso fazer

`docker rm $(docker ps -a -q) -f`

Onde `docker ps -a -q` me da uma lista dos ids dos containers

Pode usar o nome dele tambem ao inves do id

## Exec

Executa comandos dentro do container

`docker exec nginx ls`

Roda o comando ls

`docker exec -it nginx bash`

Lembre-se, se eu matar a imagem e reviver ela, as alteracoes que forem feitas dentro da imagem sao perdidas, pq imagens sao imutaveis.

Mas existe uma excecao

## trabalhando com volumes

`docker run -d --name nginx -p 8080:80 -v /caminho_de um arquivo da sua maquina:/caminho de um arquvo no container nginx`

Ou com mount bind

`docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)"/html,target=caminho do container nginx`

A diferenca do -v pro --mount e que se vc passar um caminho que nao existe pro -v ele cria o mount nao, ele estoura um erro

com o docker eu tenho as opcoes de um volume com

`docker volume`

Um volume e uma caixinha onde posso colocar dados e alterar arquivos dentro dos meus containers

Para trabalhar com volume com o mount o type vai ser volume apenas isso

## Logs

Posso ver os logs de subida de um container com

`docker logs nome-container`

## Variaveis de ambiente

`docker run -e NOME-E-VALOR-DA-VARIAVEL DE AMBIENTE`
