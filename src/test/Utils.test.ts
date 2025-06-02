/* Importa a função que criamos em 'app/Utils.ts' para usá-la e testá-la. */
import { toUpperCase } from "../app/Utils";

/* 'describe' é uma função do Jest que serve para AGRUPAR TESTES relacionados. É como criar uma "seção" ou "capítulo".
'Utils test suite' é o nome do grupo de testes. */
describe("Utils test suite", () => {
	/* 'test' (ou 'it') é a função principal do Jest para definir um teste individual.
	'Should return...' é uma descrição clara e legível do que este teste específico deve verificar.
	'() => {...}' é a função onde o teste acontece. */
	it("Should return UpperCase of a valid String", () => {
		/* Arrange
		'sut' é uma abreviação para "System Under Test". É uma CONVENÇÃO COMUM em testes de unidade. Ela se refere à
		peça específica do código que estamos testando nesse momento. */
		const sut = toUpperCase;
		const expected = "TEST";

		/* Act
		A função 'toUpperCase' é executada com a palavra 'test' como entrada. */
		const actual = sut("test");

		/* Assert
		Esta é a asserção (ou verificação) do teste. É onde comparamos o que o nosso código realmente fez
		com o que esperávamos que ele fizesse. */
		expect(actual).toBe(expected);
	});
});