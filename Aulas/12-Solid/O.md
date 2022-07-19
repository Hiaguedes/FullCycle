# OCP -> Open Closed Principle

![OCP robot](https://miro.medium.com/max/1400/1*0MtFBmm6L2WVM04qCJOZPQ.png)

Uma classe ou funcao se deve ser aberta pra extensao porem fechada para modificacao.

Na hora de adicionar um comportamento novo em uma classe voce acaba por colocar mais linhas de codigo dentro dela para suportar esse novo comportamento

Ao inves de mudar essa classe, crie uma base dessa classe e simplesmente voce extende ela e adiciona o comportamento especifico desejado

## Exemplo

```js
class Video {
    private type;

    public function calculaInteresse(){
        if(this.type === 'MOVIE'){
            // calcula
        } else if(this.type === 'TV'){
            //calcula
        }
    }
}
```

Cada tipo de midia colocaria uma if diferente ne? Baseado no type, ou seja cada vez que eu for colocar um tipo diferente eu terei que colocar um if a mais, a funcao ta engessada

A classe tem que ficar fechada pra modificacao

Como concertar

```js
abstract class Video{
    abstract public function calculaInteresse()
}

class Movie extends Video {
    public function calculaInteresse(){
        // calcula
    }
}

class TvShow extends Movie {
    public function calculaInteresse(){
        // calcula
    }
}

```

Repara que Video nao precisa ser alterada, apenas implementada. Arquivos que precisam mudar para um novo caso de implementacao provavelmente ferem o principio do Open Closed Principle

Note que ele deve seguir o padrao de responsabilidade unica
