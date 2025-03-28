describe('add a new editor in the editors list', () => {
    it('adds a new editor', () => {
        //Arrange
        cy.visit('https://127.0.0.1:8000/editor/new')
        //Act
        cy.get('#editor_name').type('Hetzel')
        cy.get('.btn').click()
        cy.wait(1000)
        //Assert
        cy.contains('table tr', 'Hetzel').should('exist')
    })

    it('editor name already exists', () => {
        cy.visit('https://127.0.0.1:8000/editor/new')
        cy.get('#editor_name').type('Hetzel')
        cy.get('.btn').click()
        cy.wait(1000)
        cy.get('.container > .break-long-words').contains('An exception')
    })

    it('field is empty', () => {
        cy.visit('https://127.0.0.1:8000/editor/new')
        cy.get('#editor_name').type(' ')
        cy.get('.btn').click()
        cy.wait(1000)
        cy.contains("#error_msg", "Le champ doit être rempli").should("exist")
    })
  })