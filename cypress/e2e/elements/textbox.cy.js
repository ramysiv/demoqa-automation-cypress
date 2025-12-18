beforeEach(() => {
    cy.visit('https://demoqa.com/text-box')
  })

describe('Text Box spec test',() =>{
  Cypress.on('uncaught:exception', (err, runnable) => {return false;}) 
  it('text box test', () => {   
    cy.get('#userName').type('Ramy Silva')
    cy.get('#userEmail').type('cypress@gmail.com')
    cy.get('#currentAddress').type('test address 123')
    cy.get('#permanentAddress').type('permanent address 456')
    cy.get('#submit').click()
    cy.contains('Ramy Silva').should('be.visible')
    cy.contains('cypress@gmail.com').should('be.visible')
    cy.contains('test address 123').should('be.visible')
    cy.contains('permanent address 456').should('be.visible')
  })

})  