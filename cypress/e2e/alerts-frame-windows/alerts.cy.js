beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/alerts')
})
describe('alerts spec test',() =>{
    it('clicks on button to see alert and verifies alert text', () => {
      cy.get('#alertButton').click()
      cy.on('window:alert',(str)=>{
        expect(str).to.equal('You clicked a button')
      })
    })
    it('clicks on button to see alert after 5 sec and verifies alert text', () => {
      cy.get('#timerAlertButton').click()
      cy.wait(6000)
      cy.on('window:alert',(str)=>{
        expect(str).to.equal('This alert appeared after 5 seconds')
      })
    })
    it('clicks on button to see confirm alert and verifies alert text', () => {
      cy.get('#confirmButton').click()
      cy.on('window:confirm',(str)=>{
        expect(str).to.equal('Do you confirm action?')
      })
        cy.get('#confirmResult').should('contain.text','You selected Ok')
    })
    it('clicks on button to see prompt alert, types text and verifies alert text', () => {
      const promptInput = 'Cypress Test'
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns(promptInput)
      })
        cy.get('#promtButton').click()
        cy.get('#promptResult').should('contain.text',promptInput)
})
})
