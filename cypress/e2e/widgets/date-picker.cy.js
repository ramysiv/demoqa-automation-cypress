beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})
  cy.visit('https://demoqa.com/date-picker')
})
describe('Date Picker Widget Tests', () => {
  it('Select Date', () => {
    const date = new Date()
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    const formattedDate = `${month}/${day}/${year}`
    cy.get('#datePickerMonthYearInput').click()
    cy.get('.react-datepicker__day--today').click()
    cy.get('#datePickerMonthYearInput').should('have.value', formattedDate)
  })
    it('Select Date and Time (Corrigido para formato do site)', () => {
    
    const date = new Date()
    const day = String(date.getDate())
    const year = date.getFullYear()
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[date.getMonth()]
    let hours = date.getHours()
    const selectedMinutes = date.getMinutes() < 30 ? '00' : '30';
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = (hours % 12) || 12
    const timeToSelect = `${displayHours}:${selectedMinutes} ${ampm}`; // Ex: 5:30 PM
    const expectedFinalValue = `${monthName} ${day}, ${year} ${timeToSelect}`; 
    cy.get('#dateAndTimePickerInput').click() 
    cy.get('.react-datepicker__day--today').click()
    const hour24 = String(date.getHours()).padStart(2, '0');
    const timeToSelectInList = `${hour24}:${selectedMinutes}`; // Ex: 17:30
    cy.get('.react-datepicker__time-list-item')
      .contains(timeToSelectInList)
      .click()
    cy.get('#dateAndTimePickerInput').should('have.value', expectedFinalValue)
})

})
