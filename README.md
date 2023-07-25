# Programação orientada a objetos

## O que é?
- Um conjunto de conceitos e recursos de linguagem que guiam
a forma como programamos
- Tem como peça central os objetos e a forma como eles se comunicam
- Os objetos podem conter dados e código (métodos)

## Outros dois termos importantes em POO são classes e instâncias:
- Classes: 
São como fábricas de objetos a partir de uma "fôrma";
Uma boa prática é dar o nome da classe ao arquivo ao qual ela pertence;
Nomes de classes usam o padrão pascal case (NomeDaClasse);
Não recebem parênteses, apeas a keyword "class", o nome da classe e chaves;
Definimos os atributos dos objetos usando a keyword "constructor", parêntese e chaves (como em uma function)
dentro da classe;
Repassamos os parâmetros dentro do constructor, os mesmos que serão usados para instanciar o objeto;


- Instâncias: 
São os objetos fabricados pela classe


## Associação

- O que é uma associação?

Nada mais é do que um relacionamento entre clsasses que permite que
uma instância de uma classe faça a outra realizar uma ação.

É como dizer para a aplicação que um objeto de um tipo está 
conectado, ou depende, de um objeto de um outro tipo.

Ex:
- Objetos de uma classe Person possuem um atributo que é 
um objeto da classe Adress.

- Objetos de uma classe Product possuem um atributo 
que é um array  de objetos de uma classe Category.


## Encapsulamento

- É o princípio de impedir que determinadas partes de uma classe sejam acessadas
pelo contexto exterior;

### No JavaScript existem dois níveis de encapsulamento: 
- Publico -> o atributo/método é acessível fora da classe;
- Privado -> onde o atributo/método só é acessível dentro da própria classe;


Para definir um atributo ou método como privado utilizamos um # no começo do seu nome;

Todo atributo ou método que não for privado será automaticamente público;

Ex:
- Uma classe tem um atributo que é definido uma vez durante a construção mas depois
não pode ser alterado diretamente (usando obj.atributo = "novoValor");

- Uma classe possui um método principal que internamente chama vários outros 
métodos da própria classe que não fazem sentido individualmente. O encapsulamento
pega várias coisas complexas e abstrai em coisas mais simples.


## Herança
É um recurso que permite criar classes que incluem, ou  herdam, para ser mais preciso,
atributos e métodos de uma outra classe.

À classe que é herdada damos o nome de superclass (ou classe mãe), e à classe
que herda damos o nome de subclass (classe filha).

Uma classe filha possui todos os atributos e métodos da classe mãe,
mas também pode possuir os seus próprios (que serão exclusivos dela).

Ex:
- Imagine uma classe User que tem seu atributos e métodos. poderíamos ter classes
AdminUsers, EditorUsers, StandardUser que seriam todas filhas da de User, mas cada uma teria, também,
seu próprio métodos e atributos;

- Ou ainda a classe Property (como um imóvel) pode ser a classe mãe
das classes filhas House e Appartmen.