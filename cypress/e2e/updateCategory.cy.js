describe('updates an existing category or throws an error', () => {
    it('updates a category', () => {
        cy.visit('/category')
        const category = "Nouveau"
        const id = 1
        cy.get('[href="/category/' + id + '/edit"]').click()
        cy.wait(1000)
        cy.get('#category_label').clear().type(category)
        cy.get('[name="category"] > .btn').click()
        cy.wait(500)
        cy.contains('table tr', category).should('exist')
    })

    it('text in the input field does not change', () => {
        cy.visit('/category')
        const category = "SF"
        const id = 2
        cy.get('[href="/category/' + id + '/edit"]').click()
        cy.wait(1000)
        cy.get('#category_label').clear().type(category)
        cy.get('[name="category"] > .btn').click()
        cy.wait(500)
        cy.contains("table tr", category).should("exist")
    })

    it('throws an error 500 for doubled category', () => {
        cy.visit('/category')
        const categoryDouble = "Nouveau"
        const id = 2
        cy.get('[href="/category/' + id + '/edit"]').click()
        cy.wait(1000)
        cy.get('#category_label').clear().type(categoryDouble)
        cy.get('[name="category"] > .btn').click()
        cy.wait(500)
        cy.get('.container > .break-long-words').contains('An exception')
    })
  })