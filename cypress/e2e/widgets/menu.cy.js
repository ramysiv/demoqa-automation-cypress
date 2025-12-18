beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/menu')
})

describe('Menu Widget Tests', () => {
  it('Verify Menu Item 1', () => {
    cy.get('#nav > :nth-child(1)').should('have.text', 'Main Item 1')
  })
    it('Verify Menu Item 2 has three Sub Items', () => {
        cy.get('#nav > :nth-child(2)')
        cy.get('#nav > li:nth-child(2) > a:nth-child(1)').should('have.text', 'Main Item 2');
        cy.get('#nav > li:nth-child(2) > a:nth-child(1)').trigger('mouseover');
        cy.get('#nav li:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a').should('have.text', 'Sub Item')
        cy.get('#nav li:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a').should('have.text', 'Sub Item')
        cy.get('#nav li:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)').should('have.text', 'SUB SUB LIST »')
        cy.get('#nav li:nth-child(3) li:nth-child(1) a').should('have.text', 'Sub Sub Item 1');
        cy.get('#nav li:nth-child(3) li:nth-child(2) a').should('have.text', 'Sub Sub Item 2');
    })
    it('Verify Menu Item 3 and its Sub Items', () => {
    cy.get('#nav > :nth-child(3)').should('have.text', 'Main Item 3')
    cy.get('#nav > :nth-child(3)').trigger('mouseover')
  })
})