# Docker Compose

Ele vem pra facilitar nossa vida com docker

Com apenas um comando vc tem todos os containers rodando dentro de um arquivo docker-compose.yaml

Pra subir de um docker compose eu tenho o comando 

`docker-compose up` ou com -d tbm serve

## Usando dokcerfile dentro do compose

Dentro dos services eu posso passar um build da seguinte forma

```yaml
  nginx: 
    build:
      context: .
      dockerfile: Dockerfile
```

Nesse caso o nome da imagem seria o que seria entendido local por essa imagem buildada

Se for subir denovo passe o parametro `--build` quando for mudar o dockerfile

## Dependencia entre containers

- depends_on faz com que um container espere o outro ficar pronto pra buildar o outro

E existe uma biblioteca chamada dockerize que faz um trabalho bem legal
