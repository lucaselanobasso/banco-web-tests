describe("Transferencias", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.loginWithValidCredentials()
  })

  it("Deve transferir quando informo dados e valor válidos", () => {
    cy.makeTransfer('João da Silva', 'Maria Oliveira', '11')
    cy.verifyToastMessage('Transferência realizada!')
  })

  it("Deve apresentar erro quando tentar transferir um valor maior que 5000 sem informar o token", () => {
    cy.makeTransfer('João da Silva', 'Maria Oliveira', '6000')
    cy.verifyToastMessage('Autenticação necessária para transferências acima de R$5.000,00.')
  })
  
  it("Deve apresentar erro quando tentar transferir um valor abaixo de 10", () => {
    cy.makeTransfer('Lucas Basso', 'Pamela Rodrigues', '8')
    cy.verifyToastMessage('O valor da transferência deve ser maior ou igual a R$10,00.')
  })
  it("Deve apresentar erro quando tentar transferir para a mesma conta", () => {
    cy.makeTransfer('João da Silva', 'João da Silva', '100')
    cy.verifyToastMessage('Não é possível realizar transferência para a mesma conta.')
  })
  it("Deve apresentar erro quando tentar transferir com saldo insuficiente na conta origem", () => {
    cy.makeTransfer('João da Silva', 'Maria Oliveira', '10000000000')
    cy.verifyToastMessage('Saldo insuficiente para realizar a transferência.')
  })
  it("Deve apresentar erro quando tentar transferir sem destinatário", () => {
    cy.selectComboBoxOption('conta-origem', 'Lucas Basso')
    cy.get('#valor').click().type('122')
    cy.contains('button', 'Transferir').click()
    cy.verifyToastMessage('Conta de origem ou destino não encontrada.')
  })
  it("Deve apresentar erro quando tentar transferir sem informar a conta origem", () => {
    cy.selectComboBoxOption('conta-destino', 'João da Silva')
    cy.get('#valor').click().type('122')
    cy.contains('button', 'Transferir').click()
    cy.verifyToastMessage('Conta de origem ou destino não encontrada.')
  })
  it("Deve apresentar erro quando tentar transferir sem valor", () => {
    cy.selectComboBoxOption('conta-origem', 'João da Silva')
    cy.selectComboBoxOption('conta-destino', 'Maria Oliveira')
    cy.contains('button', 'Transferir').click()
    cy.verifyToastMessage('Valor da transferência não informado.')
  })
})
  