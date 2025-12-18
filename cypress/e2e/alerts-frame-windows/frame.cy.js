beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/frames')
})
describe('frames spec test',() =>{
    it('verifies first frame and its content', () => {
      cy.get('#frame1').then($frame => {
        const frameBody = $frame.contents().find('body')
        cy.wrap(frameBody).find('#sampleHeading').should('have.text','This is a sample page')
      })
    })
    it('verifies second frame and its content', () => {
      cy.get('#frame2').then($frame => {
        const frameBody = $frame.contents().find('body')
        cy.wrap(frameBody).find('#sampleHeading').should('have.text','This is a sample page')
      })
    })
})
