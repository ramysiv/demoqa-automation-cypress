beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/tabs')
})
describe('Tabs Widget Tests', () => {
  it('Verify Content of What Tab', () => {
    cy.get('#demo-tab-what').click()
    cy.get('#demo-tabpane-what > .mt-3').should('be.visible')
  })
  it('Verify Content of Origin Tab', () => {
    cy.get('#demo-tab-origin').click()
    cy.get('#demo-tabpane-origin > .mt-3').should('be.visible')
  })
  it('Verify Content of Use Tab', () => {
    cy.get('#demo-tab-use').click()
    cy.get('#demo-tabpane-use > .mt-3').should('be.visible')
  })
  it('Verify a disabled More tab', () => {
    cy.get('#demo-tab-more').should('have.class', 'disabled')
  })
})