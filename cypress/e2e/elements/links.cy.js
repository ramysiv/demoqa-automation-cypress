beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/links')
})

describe('links spec test',() =>{
it('clicks on link and virifies if a new tab is opened', () => {
      // Validate that the link has the correct href and target attributes
      cy.get('#simpleLink').should('have.attr','href','https://demoqa.com')
      .and('have.attr','target','_blank')
      // Remove the target attribute to open the link in the same tab
      cy.get('#simpleLink').invoke('removeAttr', 'target').click()
      // Verify that the new page has loaded by checking the URL
      cy.url().should('eq','https://demoqa.com/')
    })
it('clicks on dynamic link and virifies if a new tab is opened', () => {
      // Validate that the link has the correct href and target attributes
      cy.get('#dynamicLink').should('have.attr','href','https://demoqa.com')
      .and('have.attr','target','_blank')
      // Remove the target attribute to open the link in the same tab
      cy.get('#dynamicLink').invoke('removeAttr', 'target').click()
      // Verify that the new page has loaded by checking the URL
      cy.url().should('eq','https://demoqa.com/')
    })

it('verifies API response from create', () => {
      cy.intercept('GET', 'https://demoqa.com/created').as('createLink')
      cy.get('#created').click()
      cy.wait('@createLink').its('response.statusCode').should('eq',201)
      cy.contains('#linkResponse','Link has responded with staus 201 and status text Created').should('be.visible')
    })
it('verifies API response from no-content', () => {
      cy.intercept('GET', 'https://demoqa.com/no-content').as('noContentLink')
      cy.get('#no-content').click()
      cy.wait('@noContentLink').its('response.statusCode').should('eq',204)
      cy.contains('#linkResponse','Link has responded with staus 204 and status text No Content').should('be.visible')
    })
it('verifies API response from moved', () => {
      cy.intercept('GET', 'https://demoqa.com/moved').as('movedLink')
      cy.get('#moved').click()
      cy.wait('@movedLink').its('response.statusCode').should('eq',301)
      cy.contains('#linkResponse','Link has responded with staus 301 and status text Moved Permanently').should('be.visible')
    })
it('verifies API response from bad-request', () => {
      cy.intercept('GET', 'https://demoqa.com/bad-request').as('badRequestLink')
      cy.get('#bad-request').click()
      cy.wait('@badRequestLink').its('response.statusCode').should('eq',400)
      cy.contains('#linkResponse','Link has responded with staus 400 and status text Bad Request').should('be.visible')
    })
it('verifies API response from unauthorized', () => {
      cy.intercept('GET', 'https://demoqa.com/unauthorized').as('unauthorizedLink')
      cy.get('#unauthorized').click()
      cy.wait('@unauthorizedLink').its('response.statusCode').should('eq',401)
      cy.contains('#linkResponse','Link has responded with staus 401 and status text Unauthorized').should('be.visible')
    })
it('verifies API response from forbidden', () => {
      cy.intercept('GET', 'https://demoqa.com/forbidden').as('forbiddenLink')
      cy.get('#forbidden').click()
      cy.wait('@forbiddenLink').its('response.statusCode').should('eq',403)
      cy.contains('#linkResponse','Link has responded with staus 403 and status text Forbidden').should('be.visible')
    })
it('verifies API response from not-found', () => {
      cy.intercept('GET', 'https://demoqa.com/invalid-url').as('notFoundLink')
      cy.get('#invalid-url').click()
      cy.wait('@notFoundLink').its('response.statusCode').should('eq',404)
      cy.contains('#linkResponse','Link has responded with staus 404 and status text Not Found').should('be.visible')
    })
})


