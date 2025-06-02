/* Importa a função que criamos em 'app/Utils.ts' para usá-la e testá-la. */
import { getStringInfo, toUpperCase } from "../app/Utils";

/* 'describe' é uma função do Jest que serve para AGRUPAR TESTES relacionados. É como criar uma "seção" ou "capítulo".
'Utils test suite' é o nome do grupo de testes. */
describe("Utils test suite", () => {
	/* 'test' (ou 'it') é a função principal do Jest para definir um teste individual.
	'Should return...' é uma descrição clara e legível do que este teste específico deve verificar.
	'() => {...}' é a função onde o teste acontece. */
	it("Should return UpperCase of a valid String", () => {
		/* ⭐ Arrange
		'sut' é uma abreviação para "System Under Test". É uma CONVENÇÃO COMUM em testes de unidade. Ela se refere à
		peça específica do código que estamos testando nesse momento. */
		const sut = toUpperCase;
		const expected = "TEST";

		/* ⭐ Act
		A função 'toUpperCase' é executada com a palavra 'test' como entrada. */
		const actual = sut("test");

		/* ⭐ Assert
		Esta é a asserção (ou verificação) do teste. É onde comparamos o que o nosso código realmente fez
		com o que esperávamos que ele fizesse. */
		expect(actual).toBe(expected);
	});

	describe.only('toUpperCase examples', () => {
		/* ⭐ O 'it.each' é uma forma inteligente de escrever VÁRIOS TESTES SEMELHANTES com dados de entrada e resultados esperados diferentes,
		sem ter que copiar e colar o mesmo código de teste várias vezes. */
		it.each([
			{ input: 'abc', expected: 'ABC' },
			{ input: 'My-String', expected: 'MY-STRING' },
			{ input: 'compass', expected: 'COMPASS' }
		])('$input toUpperCase should be $expected', ({ input, expected }) => {
			const actual = toUpperCase(input);
			expect(actual).toBe(expected);
		});
	});

	describe('getStringInfo for arg "My-String" should return correct info', () => {
		// 📢 Each test should be independent from other tests.
		// Test for Length
		it('Should return the correct length', () => {
			const actual = getStringInfo('My-String');
			expect(actual.characters).toHaveLength(9);

		});

		// Test for Lower Case
		it('Should return the correct Lower Case string', () => {
			const actual = getStringInfo('My-String');
			expect(actual.lowerCase).toBe('my-string');
		});

		// Test for Upper Case
		it('Should return the correct Upper Case string', () => {
			const actual = getStringInfo('My-String');
			expect(actual.upperCase).toBe('MY-STRING');
		});

		it('Should return the correct characters', () => {
			const actual = getStringInfo('My-String');
			expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
			expect(actual.characters).toContain<string>('M');
			expect(actual.characters).toEqual(
				expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
			);
		});

		it('Should return the defined extra info', () => {
			const actual = getStringInfo('My-String');
			expect(actual.extraInfo).toBeDefined();
		});

		it('Should return the right extra info', () => {
			const actual = getStringInfo('My-String');
			expect(actual.extraInfo).toEqual({});
		});
	});

	// Essa foi a primeira forma que fizemos, os testes não são independentes como são acima.
	// it.only('Should return info for a valid String', () => {
	// ✅ expect(actual.lowerCase).toBe('my-string');
	// ✅expect(actual.extraInfo).toEqual({}); // 🚨 We should use 'toEqual' when comparing objects.
	// expect(actual.characters.length).toBe(9); This is a valid assertion, but there is a more effective way to perform this exact same assertion.
	// ✅ expect(actual.characters).toHaveLength(9); // This alternative is much easier to read.
	// ✅ expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
	// ✅ expect(actual.characters).toContain<string>('M'); // This is a great way to check for elements that are contained inside different arrays.
	// When we are not exactly sure in which order they (characters) are coming.
	// ✅ expect(actual.characters).toEqual(
	// 	expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
	// );
	// expect(actual.extraInfo).not.toBe(undefined); // 1
	// expect(actual.extraInfo).not.toBeUndefined(); // 2
	// ✅ expect(actual.extraInfo).toBeDefined(); // A melhor forma e mais idiomática com Jest para verificar se algo não é undefined.
	// expect(actual.extraInfo).toBeTruthy(); 4
	// });

});