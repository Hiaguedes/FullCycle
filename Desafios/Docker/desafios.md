# Desafios Docker

## Desafio Go

Usar uma imagem do Go pra printar na tela uma mensagem no console com a seguinte mensagem "Full Cycle Rocks!" e que o build dessa imagem tenha ate 2MB.

Dockerfile e fazer o publish pro dockerhub

## Nginx com Node.js

Quando se acessa o nginx se acessa uma aplicacao node assim como na aula se fez com o laravel. Quando o usuario acessa o node ele deve puxar o nome cadastrado em um banco de dados

Pesquisar em como o nginx chama o node

Docker Compose

## Como entregar

Criar um repo git (talvez esse haha) e expor o codigo fonte dos desafios citados acima 

## Texto dos desafios

### Desafio Go

Esse desafio é muito empolgante principalmente se você nunca trabalhou com a linguagem Go!
Você terá que publicar uma imagem no docker hub. Quando executarmos:

docker run <seu-user>/codeeducation

Temos que ter o seguinte resultado: Code.education Rocks!

Se você perceber, essa imagem apenas realiza um print da mensagem como resultado final, logo, vale a pena dar uma conferida no próprio site da Go Lang para aprender como fazer um "olá mundo".

Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub.

3) A imagem de nosso projeto Go precisa ter menos de 2MB =)

Dica: No vídeo de introdução sobre o Docker quando falamos sobre o sistema de arquivos em camadas, apresento uma imagem "raiz", talvez seja uma boa utilizá-la.

Divirta-se
