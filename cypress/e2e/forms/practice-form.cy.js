beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/automation-practice-form')
})
describe('practice form spec test',() =>{
  const userData = {
    firstName: 'test',
    lastName: 'tester',
    email: 'test@test.com',
    gender: 'Other',
    mobile: '1234567890',
    dateOfBirth: {
        day: '15',
        month: 'May',
        year: '1995'
    },
    subjects: ['Maths', 'Physics'], 
    hobbies: ['Sports', 'Reading'],
    picture: 'sampleFile.jpeg',
    currentAddress: '123 Test St, Test City',
    state: 'NCR',
    city: 'Delhi'
  };
    it('fill,submit and verify the form', () => {
    cy.fillAndSubmitForm(userData);
    cy.get('.modal-content').should('be.visible');
    cy.get('td').contains('Student Name').next().should('have.text', `${userData.firstName} ${userData.lastName}`);
    cy.get('td').contains('Student Email').next().should('have.text', userData.email);
    cy.get('td').contains('Gender').next().should('have.text', userData.gender);
    cy.get('td').contains('Mobile').next().should('have.text', userData.mobile);
    cy.get('td').contains('Date of Birth').next().should('have.text', `${userData.dateOfBirth.day} ${userData.dateOfBirth.month},${userData.dateOfBirth.year}`);
    cy.get('td').contains('Subjects').next().should('have.text', userData.subjects.join(', '));
    cy.get('td').contains('Hobbies').next().should('have.text', userData.hobbies.join(', '));
    cy.get('td').contains('Picture').next().should('have.text', userData.picture);
    cy.get('td').contains('Address').next().should('have.text', userData.currentAddress);
    cy.get('td').contains('State and City').next().should('have.text', `${userData.state} ${userData.city}`);
  });
});