describe('visit DEMOQA site',() =>{
    it('primeiro teste', () =>{
        //Arrang
        cy.visit('https://demoqa.com/')
        //Act
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click()
        cy.get('#userName').type('teste')
        cy.get('#userEmail').type('teste@teste.com')
        cy.screenshot('primeiro teste')
        //Assert
        cy.get('#userName').should('have.value','teste')
        cy.get('#userEmail').should('have.value','teste@teste.com')
    
    })
})