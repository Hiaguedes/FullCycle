# LSP -> Liskov Substitution Principle

![LSP robot](https://miro.medium.com/max/1400/1*yKk2XKJaCLNlDxQMx1r55Q.png)

Os filhos nao devem alterar coisas que as classes pais fazem e sim fazer elas de formas mais especializada

O nome vem de Barbara Liskov que foi uma mulher cientista da computacao que criou a ideia do principio

- Subclasses podem ser substituidas por suas classes pai, uma vez q tem uma subclasse extendendo da classe pai entao essa subclasse pode ser utilizada em qualquer lugar da pai

O patinho de verdade e o patinho de pilha, o patinho de pilha anda como o pai, nada como o pai e voa como o pai mas usa pilha entao nao e um pato de verdade (Pato e PatoBorracha sao classes diferentes)

## Exemplo

```js
class Movie {
    public function play(){
        // play video
    }

    public function increaseVolume(){

    }
}

class LionKing extends Movie {

}
```

Em tese LionKing pode implementar o play e o increaseVolume de sua base e ele nao precisa alterar o comportamento dela (tipo aumentar o volume em 2x ou coisa do tipo)

```js
class ModernTimes extends Movie {
    public funtion increaseVolume(){
        // xiii
    }
}

```

O ModernTimes (que e um filme mudo) viola o principio da substituicao, pois ele nao acrescenta o comportamento ele retira, entao pra definicao de Movie ele ta errado

Pois se todo Movie pode chamar a funcao increaseVolume entao ModernTimes ou nao e um movie ou Movie ta errado mesmo auhsauhsas
