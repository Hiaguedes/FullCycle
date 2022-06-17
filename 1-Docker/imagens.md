# Imagens

Por padrao o docker se passado nenhum caminho especifico em `docker pull ubintu` ele pega essa imagem direto do docker Hub deles

Para remover uma imagem se faz

`docker rmi <nome da imagem>`

## O tal do dokcerfile

Um arquivo proprio pra montar suas imagens

Para buildar uma imagem com dockerfile temos um exemplo

onde hiaguedes e o nome de perfil la no docker hub

`docker build -t hiaguedes/nginx-vim .`

### Comandos

`FROM` -> no comeco do arquivo, diz q a sua imagem se baseia de qual imagem

`RUN` -> roda um comando, pra rodar um comando em seguida do outro se faz

`RUN apt-get update && apt-get install app -y`

ou

```docker
  RUN apt-get update && \
     apt-get install app -y
```

`WORKDIR` -> cria uma pasta dentro desse container e te deixa la

`COPY` uma pasta para outra, da local pro container

### Entrypoint e CMD

O cmd entra como um parametro para os comandos executados no Entrypoint, como em 

```docker
FROM ubuntu:latest

ENTRYPOINT ["echo", "Hello World"]
CMD [ "" ]
```

Se eu passar as seguintes linhas teremos as seguintes respostas

```ps
PS C:\Users\hiago\FullCycle> docker run hiaguedes/ubuntu-cmd-vs-entrypoint       
Hello World 
PS C:\Users\hiago\FullCycle> docker run hiaguedes/ubuntu-cmd-vs-entrypoint Hiago
Hello World Hiago
```

Parametros podem ser passados dentro de arquivos shell pra serem executados la dentro

## Publicando as imagens

crie uma conta no docker hub e faca login na cli com `docker login`

suba suas imagens com o nome do seu docker hub + '/nome-da-imagem'

ai faz

`docker push hiaguedes/bla`
