beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/accordian')
})
describe('Accordian Widget Tests', () => {
    it('Verify firt Accordian function and content is visible', () => {
        cy.get('#section1Content').should('be.visible')
        cy.fixture('first-accordian-content.txt').then((data)=>{
            cy.get('#section1Content').should('have.text',data)
        })
        cy.get('#section1Heading').click()
        cy.get('#section1Content').should('not.be.visible')
    })
    it.only('WIPVerify second Accordian function and content is visible', () => {
        cy.get('#section2Content').should('not.be.visible')
        cy.get('#section2Heading').click()
        cy.get('#section2Content').should('be.visible')
        cy.fixture('second-accordian-content.json').then((data)=>{
            cy.get('#section2Content').should('have.text',data)
        })
        cy.get('#section2Heading').click()
        cy.get('#section2Content').should('not.be.visible')
})
    it('Verify third Accordian function and content is visible', () => {
        cy.get('#section3Content').should('not.be.visible')
        cy.get('#section3Heading').click()
        cy.get('#section3Content').should('be.visible')
        cy.fixture('third-accordian-content.txt').then((data)=>{
            cy.get('#section3Content').should('have.text',data)
        })
        cy.get('#section3Heading').click()
        cy.get('#section3Content').should('not.be.visible')
})
})

