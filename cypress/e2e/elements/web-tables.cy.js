beforeEach(() => {
    cy.visit('https://demoqa.com/webtables')
  })

describe('web table spec test',() =>{
  Cypress.on('uncaught:exception', (err, runnable) => {return false;})
  
  const testUsers = [
      { firstName: 'Ramy', lastName: 'Silva', userEmail: 'ramy@gmail.com', age: '30', salary: '5000', department: 'Engineering' },
      { firstName: 'Sarah', lastName: 'Connor', userEmail: 'sconnor@skynet.com', age: '45', salary: '7000', department: 'Defense' },
      { firstName: 'Linus', lastName: 'Torvalds', userEmail: 'ltorvalds@linux.org', age: '53', salary: '9999', department: 'Kernel' },
      { firstName: 'Ada', lastName: 'Lovelace', userEmail: 'ada@math.org', age: '19', salary: '4000', department: 'IT' }
    ];

  it('Verify that user is able to add new record in web table',() =>{
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').type('Ramy')
    cy.get('#lastName').type('Silva')
    cy.get('#userEmail').type('cypress@gmail.com')
    cy.get('#age').type('30')
    cy.get('#salary').type('5000')
    cy.get('#department').type('Engineering')
    cy.get('#submit').click()
    cy.get('.rt-tbody').should('contain','Ramy')
    cy.get('.rt-tbody').should('contain','Silva')
    cy.get('.rt-tbody').should('contain','cypress@gmail.com')
    cy.get('.rt-tbody').should('contain','30')
    cy.get('.rt-tbody').should('contain','5000')
    cy.get('.rt-tbody').should('contain','Engineering')
  })
  it('Verify if able to delete record in web table',() =>{
    cy.get('[title="Delete"]').first().click()
    cy.get('.rt-tbody').should('not.contain','Cierra')
  })
  it('try submit form with empty fields',() =>{
    cy.get('#addNewRecordButton').click()
    cy.get('#submit').click()
    cy.get('.modal-content').should('be.visible')
  })
  it('Verify if able to edit record in web table',() =>{
    cy.get('[title="Edit"]').first().click()
    cy.get('#firstName').clear().type('Arym')
    cy.get('#submit').click()
    cy.get('.rt-tbody').should('contain','Arym')
  })
  
  it('Verify if a invalid email can be added',() =>{
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').type('Ramy')
    cy.get('#lastName').type('Silva')
    cy.get('#userEmail').type('cypressgmail.com')
    cy.get('#age').type('30')
    cy.get('#salary').type('5000')
    cy.get('#department').type('Engineering')
    cy.get('#submit').click()
    cy.get('.modal-content').should('be.visible')
    //cy.get('#userEmail-helper-text').should('be.visible')
  })
  it('Verify if a invalid age can be added',() =>{
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').type('Ramy')
    cy.get('#lastName').type('Silva')
    cy.get('#userEmail').type('cypress@gmail.com')
    cy.get('#age').type('-5')
    cy.get('#salary').type('5000')
    cy.get('#department').type('Engineering')
    cy.get('#submit').click()
    cy.get('.modal-content').should('be.visible')
  })
  it('Verify if a invalid salary can be added',() =>{
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').type('Ramy')
    cy.get('#lastName').type('Silva')
    cy.get('#userEmail').type('cypress@gmail.com')
    cy.get('#age').type('30')
    cy.get('#salary').type('-5000')
    cy.get('#department').type('Engineering')
    cy.get('#submit').click()
    cy.get('.modal-content').should('be.visible')
})

it('Select number of rows to display',() =>{
  cy.get('select[aria-label="rows per page"]').select('5')
  cy.get('.rt-tbody .rt-tr-group').should('have.length',5)
  cy.get('select[aria-label="rows per page"]').select('10')
  cy.get('.rt-tbody .rt-tr-group').should('have.length',10)
  cy.get('select[aria-label="rows per page"]').select('20')
  cy.get('.rt-tbody .rt-tr-group').should('have.length',20)
  cy.get('select[aria-label="rows per page"]').select('25')
  cy.get('.rt-tbody .rt-tr-group').should('have.length',25)
  cy.get('select[aria-label="rows per page"]').select('50')
  cy.get('.rt-tbody .rt-tr-group').should('have.length',50)
  cy.get('select[aria-label="rows per page"]').select('100')
  cy.get('.rt-tbody .rt-tr-group').should('have.length',100)
})

it('Verify the search functionality in web table',() =>{
  cy.get('#searchBox').type('Alden')
  cy.get('.rt-tbody').should('contain','Alden')
  cy.get('.rt-tbody').should('contain','Cantrell')
  cy.get('.rt-tbody').should('contain','45')
  cy.get('.rt-tbody').should('contain','alden@example.com')
  cy.get('.rt-tbody').should('contain','12000')
  cy.get('.rt-tbody').should('contain','Compliance')
})

it('Verify pagination in web table',() =>{
  cy.get('select[aria-label="rows per page"]').select('5')
  cy.createMultipleUsers(testUsers);
  cy.get('.-next').click()
  cy.get('.-pageJump > input').should('have.value','2')
  cy.get('.-previous').click()
  cy.get('.-pageJump > input').should('have.value','1')
})
})
