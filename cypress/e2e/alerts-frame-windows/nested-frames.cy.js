beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/nestedframes')
})
describe('Nested Frames Tests', () => {  
  
  const PARENT_FRAME_SELECTOR = '#frame1'
  const CHILD_FRAME_BODY_SELECTOR = 'iframe'
  
  it('should verify the text content of the Parent Frame', () => {
    
    cy.getIframeBody(PARENT_FRAME_SELECTOR)
      .as('parentBody')
    cy.get('@parentBody')
      .should('contain.text', 'Parent frame') 
    
  });
  it('should verify the text content of the Nested Child Frame', () => {
    
    cy.getIframeBody(PARENT_FRAME_SELECTOR)
      .as('parentBody')
    cy.get('@parentBody')
      .find(CHILD_FRAME_BODY_SELECTOR) 
      .as('childFrame')
    cy.getIframeBody('@childFrame')
      .as('childBody')
    cy.get('@childBody')
      .should('contain.text', 'Child Iframe')
      
  });

});
