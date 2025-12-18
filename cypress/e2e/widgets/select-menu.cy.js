beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/select-menu')
})
describe('Select Menu Widget Tests', () => {
  it('Select Value, select options', () => {
    cy.get('.css-1wa3eu0-placeholder')
    cy.get('#withOptGroup svg.css-19bqh2r').click();
    cy.get('#react-select-2-option-0-0').click();
    cy.get('#withOptGroup div.css-1uccc91-singleValue').should('have.text', 'Group 1, option 1');
    cy.get('#withOptGroup svg.css-19bqh2r').click();
    cy.get('#react-select-2-option-0-1').click();
    cy.get('#withOptGroup div.css-1uccc91-singleValue').should('have.text', 'Group 1, option 2');
    cy.get('#withOptGroup svg.css-19bqh2r').click();
    cy.get('#react-select-2-option-1-0').click();
    cy.get('#withOptGroup div.css-1uccc91-singleValue').should('have.text', 'Group 2, option 1');
  });

  it('Select One, select options', () => {
    cy.get('#selectOne svg.css-19bqh2r').click()
    cy.get('#react-select-3-option-0-0').click()
    cy.get('#selectOne div.css-1uccc91-singleValue').should('have.text', 'Dr.')
  })

  it('Old Style Select Menu tests', () => {
    cy.get('#oldSelectMenu').select('1');
    cy.get('#oldSelectMenu').should('have.value', '1')
  });

  it('Multiselect drop down tests', () => {
        const multiSelectContainer = '#selectMenuContainer div:nth-child(8) div.css-1wa3eu0-placeholder'
        cy.get(multiSelectContainer).as('MultiSelect')
        cy.get('@MultiSelect')
            .type('Green{enter}')
            .type('Blue{enter}')
        cy.get('#selectMenuContainer div.css-12jo7m5').should('contain.text', 'Green')
        cy.get('#selectMenuContainer div.css-12jo7m5').should('contain.text', 'Blue')
    })
    it.only('Standard multi select tests', () => {
        cy.get('#cars').select(['volvo', 'audi', 'opel', 'saab'])
        cy.get('#cars option[value="volvo"]').should('have.value', 'volvo');
    })
})