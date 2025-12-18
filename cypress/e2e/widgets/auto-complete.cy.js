beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/auto-complete')
})

describe('Auto Complete Widget Tests', () => {
    it('Verify multiple color selection in auto complete', () => {
        const colors = ['Red', 'Green', 'Blue']
        const multiColorInput = '#autoCompleteMultipleInput'

        colors.forEach((color) => {
            cy.get(multiColorInput).type(`${color}{enter}`)
        })
        cy.get('.auto-complete__multi-value').should('have.length', colors.length)
    })
        it('Verify single color selection in auto complete', () => {
        const color = 'Yellow'
        const singleColorInput = '#autoCompleteSingleInput'

        cy.get(singleColorInput).type(`${color}{enter}`)
        cy.get('.auto-complete__single-value').should('have.text', color)
    })
    it('Verify no color selection in auto complete', () => {
        const singleColorInput = '#autoCompleteSingleInput'
        cy.get(singleColorInput).type('InvalidColor')
        cy.get('.auto-complete__menu').should('not.exist')
    })

})
    