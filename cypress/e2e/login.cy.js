describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.loginWithValidCredentials()
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com ambos os dados inválidos deve apresentar mensagem de erro', () => {
    cy.loginWithInvalidCredentials()
    cy.verifyToastMessage('Erro no login. Tente novamente.')
  })

  it('Login com usuário inválido e senha válida deve apresentar mensagem de erro', () => {
    cy.loginWithInvalidUsername()
    cy.verifyToastMessage('Erro no login. Tente novamente.')
  })

  it('Login com usuário válido e senha inválida deve apresentar mensagem de erro', () => {
    cy.loginWithInvalidPassword()
    cy.verifyToastMessage('Erro no login. Tente novamente.')
  })

  it('Login com usuário vazio e senha válida deve apresentar mensagem de campos obrigatórios', () => {
    cy.loginWithEmptyUsername()
    cy.verifyToastMessage('Campos obrigatórios não preenchidos.')
  })

  it('Login com usuário válido e senha vazia deve apresentar mensagem de campos obrigatórios', () => {
    cy.loginWithEmptyPassword()
    cy.verifyToastMessage('Campos obrigatórios não preenchidos.')
  })

  it('Login com ambos os campos vazios deve apresentar mensagem de campos obrigatórios', () => {
    cy.loginWithEmptyFields()
    cy.verifyToastMessage('Campos obrigatórios não preenchidos.')
  })
})