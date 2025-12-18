beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/dynamic-properties')
})
describe('dynamic properties spec test',() =>{
  it('verifies if button will enable after 5 seconds', () => {
    cy.get('#enableAfter').should('be.disabled')
    cy.get('#enableAfter', { timeout: 5500 }).should('be.enabled')
  })
    it('verifies if color of the button will change', () => {
    cy.get('#colorChange').should('have.css','color','rgb(255, 255, 255)')
    cy.get('#colorChange', { timeout: 5500 }).should('have.css','color','rgb(220, 53, 69)')
})
    it('verifies if button will appear after 5 seconds', () => {
    cy.get('#visibleAfter').should('not.exist')
    cy.get('#visibleAfter', { timeout: 5500 }).should('be.visible')
})
})
