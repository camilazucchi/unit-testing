/* Importa as definições de tipo do pacote '@jest/types'.
Permite que o TypeScript entenda a estrutura e as propriedades de um objeto de configuração do Jest. */
import type { Config } from "@jest/types";

const baseDir = '<rootDir>/src/app/secure_pass';
const baseTestDir = '<rootDir>/src/test/secure_pass';

/* 'const config' significa que estamos criando uma "caixa" chamada 'config' para guardar nossas configurações.
': Config.InitialOptions' é como se colocássemos um "selo" nessa caixa, dizendo que ela DEVE seguir o "molde" do Jest
para configurações inciais. */
const config: Config.InitialOptions = {
	/* Diz ao Jest para rodar os nossos testes utilizando as configurações prontas do 'ts-jest'.
	O 'ts-jest' é uma ferramenta que ensina o Jest a entender e testar seu código escrito em TypeScript. */
	preset: "ts-jest",
	/* Diz ao Jest para rodar seus testes em um ambiente que imita o Node.js. */
	testEnvironment: "node",
	/* Significa que o Jest vai mostrar muitos detalhes sobre cada teste que ele rodar. */
	verbose: true,
	/* O jest pode nos informar qual a porcentagem de teste do nosso código através de relatórios de cobertura de código. */
	collectCoverage: true,
	// Na linha abaixo, estamos dizendo ao Jest para incluir os arquivos que estão nesse caminho:
	collectCoverageFrom: [
		`${baseDir}/**/*.ts`
	],
	// O 'testMatch' é como um "filtro" para o Jest, ele fala para considerar somente os arquivos de teste que estão neste caminhos:
	testMatch: [
		`${baseTestDir}/**/*.ts`
	]
};

export default config;