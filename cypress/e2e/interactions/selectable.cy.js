beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/selectable')
})
describe('Selectable Interaction Tests', () => {
  it('Should successfully select multiple in the List View', () => {
    cy.get('#verticalListContainer li:nth-child(1)').click();
    cy.get('#verticalListContainer li.active').should('have.class', 'active');
    cy.get('#verticalListContainer li:nth-child(2)').click();
    cy.get('#verticalListContainer').click();
    cy.get('#verticalListContainer li.active').should('have.length', 2);
  })
  it('Should successfully select multiple in the Grid View', () => {
    cy.get('#demo-tab-grid').click()
    cy.get('#row1 li:nth-child(1)').click()
    cy.get('#listContainer').click()
    cy.get('#row1 li.active').should('have.length', 2)
  })

})