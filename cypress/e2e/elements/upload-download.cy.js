beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/upload-download')
})
describe('upload and download spec test',() =>{
  it('downloads a file and verifies its existence', () => {
    const downloadsFolder = Cypress.config('downloadsFolder')
    cy.get('#downloadButton').click()
    cy.readFile(`${downloadsFolder}/sampleFile.jpeg`).should('exist')
    cy.readFile(`${downloadsFolder}/sampleFile.jpeg`, null).then((fileContent) => {
    expect(fileContent.length).to.be.greaterThan(0)
})
  })
    it.only('uploads a file and verifies the file name', () => {
    cy.fixture('sampleFile.jpeg',{ encoding: null }).as('fileContent')
    cy.get('#uploadFile')
    .selectFile('@fileContent', { action: 'drag-drop' })
    cy.get('#uploadedFilePath').should('be.visible')
    .and('contain.text', 'sampleFile.jpeg')
    })

})