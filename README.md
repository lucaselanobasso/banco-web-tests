# banco-web-tests

Projeto de testes automatizados com Cypress e JavaScript

## Objetivo

Este projeto foi desenvolvido para demonstrar aos alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando o Cypress. O foco está em boas práticas de organização, uso de Custom Commands e geração de relatórios automatizados.

## Componentes do Projeto

- **Cypress**: Framework principal de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de ações comuns nos testes, localizados em `cypress/support/commands/`.
- **Relatórios**: Geração de relatórios automáticos com o `cypress-mochawesome-reporter`, disponíveis em `cypress/reports/html/`.
- **Fixtures**: Dados de teste em arquivos JSON, localizados em `cypress/fixtures/`.
- **Testes**: Casos de teste organizados em `cypress/e2e/`.

## Pré-requisitos

- Node.js instalado
- API em execução: [banco-api](https://github.com/juliodelimas/banco-api)
- Aplicação web em execução: [banco-web](https://github.com/juliodelimas/banco-web)

## Instalação

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes

1. Certifique-se de que a API e a aplicação web estejam rodando.
2. Execute os testes com o comando:
   ```bash
   npx cypress run
   ```
3. Para gerar e visualizar o relatório HTML:
   ```bash
   npx cypress run --reporter cypress-mochawesome-reporter
   # O relatório estará em cypress/reports/html/index.html
   ```

## Estrutura dos Testes

- `cypress/e2e/login.cy.js`: Testes de login, incluindo cenários de sucesso e falha.
- `cypress/e2e/transferencia.cy.js`: Testes de transferência bancária.

### Exemplo de Teste de Login
```javascript
describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.loginWithValidCredentials()
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    cy.loginWithInvalidCredentials()
    cy.verifyToastMessage('Erro no login. Tente novamente.')
  })
})
```

## Custom Commands

Os Custom Commands ficam em `cypress/support/commands/` e facilitam a reutilização de ações comuns. Exemplos:

- `cy.loginWithValidCredentials()`: Realiza login com credenciais válidas.
- `cy.loginWithInvalidCredentials()`: Realiza login com credenciais inválidas.
- `cy.verifyToastMessage(mensagem)`: Verifica se uma mensagem toast específica está visível na tela.

## Relatórios

Após a execução dos testes, um relatório detalhado em HTML é gerado em `cypress/reports/html/index.html`.

---

Sinta-se à vontade para adaptar este projeto para seus estudos e práticas de automação!
