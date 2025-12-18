beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/browser-windows')
})
describe('WIP browser windows spec test',() =>{
    it('clicks a New Tab Button and verifies the URL', () => {
    cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen')
    });
    cy.get('#tabButton').click();
})
    it('clicks a New Window Button and verifies the URL', () => {
    cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen')
    });
    cy.get('#windowButton').click();
})
    it('clicks a New Window Button and verifies the URL', () => {
    cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen')
    });
    cy.get('#windowButton').click();
    cy.get('@windowOpen').should('be.calledOnce')
})
})
