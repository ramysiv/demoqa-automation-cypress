beforeEach(() => {
    cy.visit('https://demoqa.com/checkbox')
  })

describe('Check Box spec test',() =>{
  Cypress.on('uncaught:exception', (err, runnable) => {return false;})
  it('clicks a home checkbox and verifies it is checked', () => {
    const expectedItems = [
  'home',
  'desktop',
  'notes',
  'commands',
  'documents',
  'workspace',
  'react',
  'angular',
  'veu',
  'office',
  'public',
  'private',
  'classified',
  'general',
  'downloads',
  'wordFile',
  'excelFile'
]
    cy.contains('Home').click()
    cy.get('.rct-icon-check').should('be.visible')
    expectedItems.forEach((item) => {
    cy.get('#result').should('contain.text', item)
    })
  })
  it('clicks a desktop checkbox and verifies it is checked', () => {
    const expectedItems = [
  'desktop',
  'notes',
  'commands'
]
    cy.get('.rct-collapse').click()
    cy.contains('Desktop').click()
    cy.get('.rct-icon-check').should('be.visible')
    expectedItems.forEach((item) => {
    cy.get('#result').should('contain.text', item)
    })

})
  it('clicks a documents checkbox and verifies it is checked', () => {
    const expectedItems = [
  'documents',
  'workspace',
  'react',
  'angular',
  'veu',
  'office',
  'public',
  'private',
  'classified',
  'general'
]
    cy.get('.rct-collapse').click()
    cy.contains('Documents').click()
    cy.get('.rct-icon-check').should('be.visible')
    expectedItems.forEach((item) => {
    cy.get('#result').should('contain.text', item)
    })  
})
  it('clicks a downloads checkbox and verifies it is checked', () => {
    const expectedItems = [
  'downloads',
  'wordFile',
  'excelFile'
]
    cy.get('.rct-collapse').click()
    cy.contains('Downloads').click()
    cy.get('.rct-icon-check').should('be.visible')
    expectedItems.forEach((item) => {
    cy.get('#result').should('contain.text', item)
    })  
})
})