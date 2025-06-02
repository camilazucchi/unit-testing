# Structure of a properly written unit test

## AAA principles

- **Arrange**: Set up the test environment and data.

- **Act**: Perform the action or call the function being tested.

- **Assert**: Verify the outcome of the action.

There are two more parts:

- **Setup**

- **Teardown**

## Sut

*'Sut'* é uma abreviação para **"System Under Test"**. Uma convenção comum em *testes de unidade*.

### Por que usar Sut?

- Quando vemos *sut* em um teste, imediatamente sabemos que aquela é a parte do código que está sendo o foco da verificação.
- Ajuda a manter os testes padronizados.
- Se o nome da função, por exemplo, "toUpperCase" mudar no futuro, vamos precisar atualizar somente a linha:
``const sut = toUpperCase;`` e o restante do nosso teste continuaria funcionando sem alterações.

## Expected

*'Expected'* é uma variável que armazena o **resultado que esperamos** da função que estamos testando.

### Por que usar Expected?

- Antes mesmo de executar a função (Act), já sabemos qual resultado deveria ser.
- Usar uma variável *expected* no lugar de um valor literal diretamente na asserção torna o teste mais legível.
- Da mesma forma acima, se a lógica da nossa função mudasse, vamos precisar atualizar somente o valor de *expected*.

## Actual

*'Actual'* é uma variável que armazena o **resultado real** retornado pela função que estamos testando.

### Por que usar Actual?

- O propósito fundamental é chamar a função ou o código que estamos testando e capturar o valor que ela retorna.
- Ao isolar essa chamada na fase **Act**, deixamos claro que este é o momento onde a ação principal do teste ocorre.
- O valor armazenado em *actual* será usado na próxima fase (Assert), para ser comparado com o *expected*.

![Código do teste de unidade para a função toUpperCase](images/UpperCaseTest.png)
