beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/modal-dialogs')
})
describe('modal dialogs spec test',() =>{
it('small modal test',() =>{
    cy.get('#showSmallModal').click()
      
    cy.get('#example-modal-sizes-title-sm')
    .should('be.visible')
    .and('have.text','Small Modal')
        
    cy.get('.modal-body')
    .should('be.visible')
    .and('have.text','This is a small modal. It has very less content')
        
    cy.get('#closeSmallModal').click()
    })

it('Large modal test',() =>{
    cy.get('#showLargeModal').click()
    cy.fixture('large-modal.txt').then((largeModalText) => {
      cy.get('#example-modal-sizes-title-lg')
        .should('be.visible')
        .and('have.text', 'Large Modal')
        
})
})
})