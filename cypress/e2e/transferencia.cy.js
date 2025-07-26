describe("Transferencias", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.loginWithValidCredentials()
  })

  it("Deve transferir quando informo dados e valor válidos", () => {
    //ACT
    cy.makeTransfer('João da Silva', 'Maria Oliveira', '11')

    //ASSERT
    cy.verifyToastMessage('Transferência realizada!')
  
  })

  it("Deve apresentar erro quando tentar transferir mais que 5000 sem o token", () => {
    //ACT
    cy.makeTransfer('João da Silva', 'Maria Oliveira', '6000')

    //ASSERT
    cy.verifyToastMessage('Autenticação necessária para transferências acima de R$5.000,00.')
  
  })
})
