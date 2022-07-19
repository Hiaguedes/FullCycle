# SRP -> Single Responsibilty Principle

Principio da responsabilidade unica

Uma classe ou funcao deve ter apenas uma unica responsabilidade, ou seja so deve fazer um assunto nada mais, uma classe deve ter apenas um motivo pra mudar

![SRP robot](https://miro.medium.com/max/1400/1*P3oONz9Da3Tc1w97fMV73Q.png)

## Como nao fazer

```js
class Course {
    private name;
    private categoria;

    public function connection(){
        const bd = new BD();

        return bd;
    }

    public function createCourse(){
        connection()->insert(this-> name)
    }

    public function getName(){
        return this.name
    }
...

}

```

Ha uma mistura entre responsabilidades de banco de dados, persistencia de banco de dados e das propriedades dessa classe, entao desmenbrar essa conexao e persistencia com a manipulacao das propriedades e um otimo primeiro passo

Uma dica e se a classe ou funcao esta crescendo muito entao quer dizer q e hora de desmenbrar essa coisa

Outra seria separar cursos de categorias e fazer ela ser duas coisas irmas porem distintas
