Cypress.Commands.add('loginWithValidCredentials', ()=>{
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('loginWithInvalidCredentials', ()=>{
      cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    
    cy.contains('button', 'Entrar').click()
  })

Cypress.Commands.add('loginWithInvalidUsername', ()=>{
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('loginWithInvalidPassword', ()=>{
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('loginWithEmptyUsername', ()=>{
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().clear()
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('loginWithEmptyPassword', ()=>{
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().clear()
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('loginWithEmptyFields', ()=>{
    cy.get('#username').click().clear()
    cy.get('#senha').click().clear()
    cy.contains('button', 'Entrar').click()
})