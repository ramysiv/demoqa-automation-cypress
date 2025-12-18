//new user
//login
beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/login')
})
describe('login spec test',() =>{
    it('register a new user', () => {
      cy.get('#newUser').click()
      cy.get('#firstname').type('ramy1')
      cy.get('#lastname').type('silva1')
      cy.get('#userName').type('ramysilva1')
      cy.get('#password').type('123456')
      cy.get('#rc-anchor-container').click()
      cy.intercept()
      
      cy.get('#register').click()
    
    })
})