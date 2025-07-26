Cypress.Commands.add('verifyToastMessage', mensagem =>{
    cy.get('.toast').should('have.text', mensagem)
})

Cypress.Commands.add('selectComboBoxOption', (fieldLabel, option) =>{
    cy.get(`label[for="${fieldLabel}"]`).parent().as(`campo-${fieldLabel}`)
    cy.get(`@campo-${fieldLabel}`).click()
    cy.get(`@campo-${fieldLabel}`).contains(option).click()
})