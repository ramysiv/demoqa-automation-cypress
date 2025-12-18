beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/slider')
})
describe('Slider Widget Tests', () => {
  it('Move Slider, using drag and drop method', () => {
    cy.get('.range-slider').realClick('right')
    //cy.get('.range-slider').invoke('val', 50).trigger('change')
    cy.get('#sliderValue').should('have.value', '50')
  })
})
