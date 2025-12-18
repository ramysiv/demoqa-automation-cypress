beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/progress-bar')
})
describe('Progress Bar Widget Tests', () => {
  it('Start and Stop Progress Bar at 75%', () => {
    cy.get('#startStopButton').click()
    cy.waitUntil(() => 
      cy.get('#progressBar').then($bar => {
        const value = parseInt($bar.attr('aria-valuenow'))
        cy.log(`Current Progress Bar Value: ${value}%`)
        return value >= 75
      }),
        { timeout: 15000, // Tempo máximo de espera
          interval: 100   // Intervalo entre as verificações
        }
    ).then(() => {
      cy.get('#startStopButton').click()
    })
  
  })
})