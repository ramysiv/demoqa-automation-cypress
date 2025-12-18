beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/sortable')
})
describe('Sortable Interaction list Tests', () => {
  it('Should successfully reorder items in the List View', () => {

    const sortableItems = '#demo-tabpane-list div.vertical-list-container'
    const itemOne = cy.get(sortableItems).contains('One')
    const itemSix = cy.get(sortableItems).contains('Six')
        
    cy.get(sortableItems).eq(0).should('contain', 'One')
        
    itemOne.trigger('mousedown', { which: 1 }, { force: true })
    itemSix.trigger('mousemove').trigger('mouseup', { force: true })

    cy.get('#demo-tabpane-list div.vertical-list-container div:nth-child(1)').should('have.text', 'Two');
    cy.get('#demo-tabpane-list div:nth-child(6)').should('have.text', 'One');
    })

    it('Should successfully reorder items in the Grid View', () => {
        cy.get('#demo-tab-grid').click();
        const sortableGridItems = '#demo-tabpane-grid div.create-grid'
        const itemOne = cy.get(sortableGridItems).contains('One')
        const itemSix = cy.get(sortableGridItems).contains('Six')
                
        itemOne.trigger('mousedown', { which: 1 }, { force: true })
        itemSix.trigger('mousemove').trigger('mouseup', { force: true })
        cy.get('#demo-tabpane-grid div:nth-child(6)').should('have.text', 'One')
    })
})