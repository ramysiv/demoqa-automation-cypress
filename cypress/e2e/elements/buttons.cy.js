beforeEach(() => {
    cy.visit('https://demoqa.com/buttons')
  })

describe('buttons spec test',() =>{
  Cypress.on('uncaught:exception', (err, runnable) => {return false;})
    it('performs a double click on the button and verifies the message', () => {
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('contain.text', 'You have done a double click')
    }) 
    it('performs a right click on the button and verifies the message', () => {
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('contain.text', 'You have done a right click')
    })  
    it('performs a dynamic click on the button and verifies the message', () => {
        cy.contains('button',/^Click Me$/).click()
        cy.get('#dynamicClickMessage').should('contain.text', 'You have done a dynamic click')
    })
})