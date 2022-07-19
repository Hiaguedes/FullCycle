# ISP -> Interface Segregation Principle

![ISP robot](https://miro.medium.com/max/1400/1*2hmyR9L43Vm64MYxj4Y89w.png)

Uma classe nao e obrigada a implementar interfaces que ela nao utilizara 

Se essa classe implementa apenas dois desses metodos entao essa interface (ou contrato) esta errada

## Exemplo 

```ts
interface Movie {
    public function play();
    public function increaseVolume()
}

class LionKing implements Movie {
    public function play(){

    }

    public function increaseVolume(){
        
    }
}

class ModernTimes implements Movie {
        public function play(){

        }
    // deveria usar o incresa Volume? muita das vezes a galera implementa o increaseVolume vazio
}
```

Solucao, segregar a interface

```ts
interface Movie {
    public function play();
}
interface AudioControl {
    public function increaseVolume()
}

class LionKing implements Movie, AudioControl {
    public function play(){

    }

    public function increaseVolume(){
        
    }
}

class ModernTimes implements Movie {
        public function play(){

        }
}
```
