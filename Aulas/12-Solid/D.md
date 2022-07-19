# DIP -> Dependency Inversion Principle

![DIP robot](https://miro.medium.com/max/1400/1*Qk8tDmjQlyvwKxNTfXIo0Q.png)

A arte dos plugins

- Dependa de abstracoes e nao de implementacaoes

- Inverter as dependencias (criar protocolos de funcoes pra que eu posso implementar aqui dentro sem ver o que se faz la dentro e so chamar essa funcao)

Isso serve pra nao amarrar a solucao numa classe em especifico e sim em comportamentos esperados por qualquer classe

## Exemplo

```ts
class DramaCategory{}

class Movie {
    private name;
    private category;

    public function getName(){
        return this.name;
    }

    public setName(name){
        this.name = name;
    }

    public function getCategory(){
        return new DramaCategory();
    }

    public setCategory(category: DramaCategory){
        this.category = category;
    }

}
```

Nesse caso eu forco o DramaCategory dentro da funcao setter, sendo que DramaCategory deveria ser uma coisa especifica de drama e toda vez q for settado o category sempre se passa essa classe como parametro (nao considerando que existem outros tipos de categoria como acao, comedia) criando-se assim uma dependencia intrinseca de Movie com DramaCategory

Se cria um acoplamento entre essas duas classes de forma que Categoria usa Movie tambem enquanto Movie que deve usar Categoria

Solucao

```ts
interface Category {}
class DramaCategory implements Category{}

class Movie {
    private name;
    private category;

    function Movie(name, category: Category ){
        this.name = name;
        this.category = category;
    }

    public function getName(){
        return this.name;
    }

    public setName(name){
        this.name = name;
    }

    public function getCategory(){
        return this.category;
    }

    public setCategory(category: Category){
        this.category = category;
    }

}
```

Sempre que se instancia uma classe dentro da outra (ou se chamando uma funcao dentro da outra) voce esta criando um laco de relacao muito forte entre elas

Um grande solucionador e um container de injecao de dependencias
