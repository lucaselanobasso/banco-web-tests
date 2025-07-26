Cypress.Commands.add('makeTransfer', (contaOrigem, contaDestino, valor)=>{
    cy.selectComboBoxOption('conta-origem', contaOrigem)
    cy.selectComboBoxOption('conta-destino', contaDestino)
    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()
})