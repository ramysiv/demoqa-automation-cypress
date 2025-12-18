beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/droppable')
})
describe('Droppable Widget Tests', () => {
    const simpleDraggable = '#draggable';
    const simpleDroppable = '#droppable';
    const performDragAndDrop = (sourceSelector, targetSelector) => {
        cy.get(sourceSelector)
          .trigger('mousedown', { which: 1 })
        
        cy.get(targetSelector)
          .trigger('mousemove')
          .trigger('mouseup', { force: true })
    }
    it('Simple Droppable', () => {
            
            performDragAndDrop(simpleDraggable, simpleDroppable)

            cy.get(simpleDroppable).should('have.text', 'Dropped!')
            
            cy.get(simpleDroppable).should('have.css', 'background-color', 'rgb(70, 130, 180)')
        });
})
