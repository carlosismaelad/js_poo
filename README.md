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
1 - Objetos de uma classe Person possuem um atributo que é 
um objeto da classe Adress.

2 - Objetos de uma classe Product possuem um atributo 
que é um array  de objetos de uma classe Category.