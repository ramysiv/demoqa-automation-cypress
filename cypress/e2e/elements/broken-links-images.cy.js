beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/broken')
})
describe('broken links and images spec test',() =>{
  it('get a valid image', () => {
    // Verify that the valid image is loaded (i experted this test not passing)
    cy.get('img[src="/images/Toolsqa_1.jpg"]').should('be.visible')
    .then(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
  })
    it('get a broke image', () => {
    // Verify that the broken image is not loaded
    cy.get('img[src="/images/Toolsqa_1.jpg"]').should('be.visible')
    .then(($img) => {
      expect($img[0].naturalWidth).to.equal(0)
    })
    })
    it('clicks and verify if a valid link is loaded', () => {
    cy.get('a[href="https://demoqa.com"]').click()
    cy.url().should('eq', 'https://demoqa.com/')
    })
    it('clicks and verify if a broken link', () => {
    cy.request({
      url: 'http://the-internet.herokuapp.com/status_codes/500',
      failOnStatusCode: false 
    }).then((response) => {
      expect(response.status).to.eq(500)
    })
})
})
