/* Importa a função que criamos em 'app/Utils.ts' para usá-la e testá-la. */
import { toUpperCase } from "../app/Utils";

/* 'describe' é uma função do Jest que serve para AGRUPAR TESTES relacionados. É como criar uma "seção" ou "capítulo".
'Utils test suite' é o nome do grupo de testes. */
describe('Utils test suite', () => {

    /* 'test' (ou 'it') é a função principal do Jest para definir um teste individual.
    'Should return...' é uma descrição clara e legível do que este teste específico deve verificar.
    '() => {...}' é a função onde o teste acontece. */
    test('Should return UpperCase', () => {
        /* A função 'toUpperCase' é executada com a palavra 'test' como entrada. */
        const result = toUpperCase('test');
        /* Esta é a asserção (ou verificação) do teste. É onde comparamos o que o nosso código realmente fez
        com o que esperávamos que ele fizesse. */
        expect(result).toBe('Test');
    });

});