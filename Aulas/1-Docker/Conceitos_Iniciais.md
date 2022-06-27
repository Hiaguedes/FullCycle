# Docker

## Conceitos basicos 

Objetivos

- O que sao containers

- Como funcionam os Containers?

- Como o docker funciona

- Principais comandos utilizando o Docker

- Docker File

- Trabalhando com imagens Docker

### O que sao containers?

Um container eh um padrao de unidade de software que empacota codigo e todas as dependencias de uma aplicacao fazendo que a mesma seja executada rapidamente de forma confiavel de um ambiente computacional para o outro

### Como funcionam os Containers?

Um sistema operacional tem um processo para cada tarefa que ele vai executar (seja de hardware, software), cada processo hoje em dia roda com um camarada chamado namespace que e responsabel por isolar os processos, ou seja imagina que um processo pai gera diversos processos filhos, todos esses processos oriundos do processo pai possuem o mesmo namespace, ou seja todo o conjunto passou a ter o mesmo namespace e isso mudou completamente a forma de como pessoal trabalhava com os processos vindo ai a ideia de containers

Entao pela logica podemos dizer que hoje um processo significa um container (com esse container contendo filhos), se a gente matar o processo principal que cria todos os filhos nos matamos o container

Quando o container roda nos enganamos o sistema operacional, e o container se entende como um sistema operacional unico

#### Pilares dos containers

##### Namespaces

Coisas que voce pode mexer dentro de um namespace

- Pid

- User

- Network

- File system

Coisas necessarias pra se criar um sistema isolado simulando ai um sistema operacional

##### Cgroups

Controla os recursos operacionais do container

Sao os limites de um determinado processo, ou seja nele eu digo quanto de memoria eu posso utilizar, quanto de cpu ele pode usar

##### File System

ele funciona com OFS (overlay file system)

Trabalhando com camadas

Imagina um container que contem uma aplicacao e essa aplicacao contem diversas dependencias, se precisarmos mudar o q tem dentro da aplicacao e subir uma nova imagem ele subira essa imagem apenas com a aplicacao atualizada sem mexer nas dependencias pq nao necessita disso para tal, a proxima versao apenas guarda a diferenca entre um e o anterior

O container ele roda o sistema operacional, sendo diferente entao de uma virtualizacao q normalmente guarda o sistema operacional pra funcionar, aqui estou mais interessado em guardar aplicacoes, o container e inteligente o suficinete de usar os recursos necessarios do sistema operacional

##### Imagens

Imagem no docker nao e um snapshot ele e o conjunto de camadas dentro dele

Imagina que minha aplicacao depende do ssh.d que roda em cima do ubuntu q por sua vez roda no scratch, esse conjunto de dependencias forma a imagem, e se uma versao do ubuntu deu pau na aplicacao, eu atualizo apenas o ubuntu, o resto continua intacto


###### Dockerfile, onde definimos essas imagens

Ela comeca de uma imagem em branco mas dificilmente isso acontece, nos comecamos de uma imagem pre existente com o comando FROM como em

```docker
 FROM: ImageName
```

E com isso eu consigo rodar comandos do sistema operacional e expor uma porta como em

```docker
RUN: apt-get install
EXPOSE: 8000
```

O docker file e um arquivo declarativo feito apenas para construir imagens

### Como funcionam os containers?

O processo tem uma imagem como vimos, e essa imagem e imutavel depois q e construido

Ele roda dentro de um processo, por isso ele e tao rapido, e por ser imutavel ele roda de maneira bem rapida

Mas isso nao quer dizer q nao de para colocar nada la dentro, pois junto de qq imagem docker se possui uma camada de leitura e escrita, sendo entao possivel colocar arquivos, scripts e mais, ou seja a gente nao altera a imagem, o ubuntu continua la, a aplicacao continua la com seu mesmissimo codigo fonte, a gente altera o comportamento do container

DOCKERFILE => build => imagem

#### Aonde ficam as imagens? 

Dentro de um image registry, que e um repositorio com as imagens ja usadas por aquele container

Docerfile => pull => Image registry

buid da imagem => push => image registry

#### Docker host

O host roda um processo que tem uma daemon que e api para montar o docker

E precisamos do client, que e quando rodamos o comando `docker` na nossa maquina, fazendo isso nos invocamos o client

O client faz as chamadas na api dentro do host, ou seja o client faz tudo mas o dockr host nao e fixo no daemon

Ele contem o cache, para por exemplo guardar as imagens dentro do registry (e nao ter que baixar tudo de novo)

E ele tem tambem o gerenciamento de volumes, onde se persiste os dados dentro do container (mesmo apos a morte da imagem)

E a parte de network, que comunica os containers

Isso nao e tudo de docker mas e o principal para se entender sobre os containers
