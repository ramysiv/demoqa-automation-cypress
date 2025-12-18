beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/tool-tips')
})
describe('Tool Tips Widget Tests', () => {
    it('Verify Tool Tip for Button', () => {
    cy.get('#toolTipButton').trigger('mouseover')
    cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button')
  })
    it('Verify Tool Tip for Text Field', () => {
    cy.get('#toolTipTextField').trigger('mouseover')
    cy.get('.tooltip-inner').should('have.text', 'You hovered over the text field')
  })
    it('Verify Tool Tip for Contrary Link', () => {
    cy.get('#texToolTopContainer > :nth-child(1)').trigger('mouseover')
    cy.get('.tooltip-inner').should('have.text', 'You hovered over the Contrary')
  })
    it('Verify Tool Tip for 1.10.32 Link', () => {
    cy.get('#texToolTopContainer > :nth-child(2)').trigger('mouseover')
    cy.get('.tooltip-inner').should('have.text', 'You hovered over the 1.10.32')
  })
})