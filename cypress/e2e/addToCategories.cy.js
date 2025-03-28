describe('add a new category to categories', () => {
    it('adds a category to the categories list', () => {
        //Arrange
        cy.visit('https://127.0.0.1:8000/category/new')
        //Act
        cy.get('#category_label').type('Roman')
        cy.get('.btn').click()
        cy.wait(1000)
        //Assert
        cy.contains('table tr', 'Roman').should('exist')
    })

    it('throws an error 500 for doubled category', () => {
        cy.visit('https://127.0.0.1:8000/category/new')
        cy.get('#category_label').type('Roman')
        cy.get('.btn').click()
        cy.wait(1000)
        cy.get('.container > .break-long-words').contains('An exception')
    })
  })