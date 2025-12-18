beforeEach(() => {
    cy.visit('https://demoqa.com/radio-button')
  })

describe('Radio Buttun spec test',() =>{
  Cypress.on('uncaught:exception', (err, runnable) => {return false;})

  it('clicks the yes radio button and verifies it is checked', () => {
    cy.get('label[for="yesRadio"]').click()
    cy.get('.text-success').should('contain.text', 'Yes')
  })
  it('clicks the impressive radio button and verifies it is checked', () => {
    cy.get('label[for="impressiveRadio"]').click()
    cy.get('.text-success').should('contain.text', 'Impressive')
  })
  it('verifies the no radio button is disabled', () => {
    cy.get('#noRadio').should('be.disabled')
    })


})