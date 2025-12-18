beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/resizable')
})
describe('Resizable Widget Tests', () => {
  const RESIZABLE_BOX_SELECTOR = '#resizableBoxWithRestriction'
  const RESIZE_HANDLE_SELECTOR = `${RESIZABLE_BOX_SELECTOR} .react-resizable-handle-se`
  const NEW_WIDTH = 236
  const NEW_HEIGHT = 150
  const DRAG_OFFSET = -50
  
  it('The restricted element must be resized to a smaller size (shrink).', () => {
    
    cy.get(RESIZE_HANDLE_SELECTOR)
      .should('be.visible')
      .then($handle => {

        const rect = $handle[0].getBoundingClientRect()
        const startX = rect.left + rect.width / 2
        const startY = rect.top + rect.height / 2

        cy.wrap($handle)
          .trigger('mousedown', { which: 1, pageX: startX, pageY: startY })
        
        cy.get('body')
          .trigger('mousemove', { pageX: startX + DRAG_OFFSET, pageY: startY + DRAG_OFFSET })

        cy.get('body')
          .trigger('mouseup')
      });

    cy.get(RESIZABLE_BOX_SELECTOR)
      .invoke('attr', 'style')
      .should('include', `width: ${NEW_WIDTH}px`)
      .and('include', `height: ${NEW_HEIGHT}px`)
  })

})

