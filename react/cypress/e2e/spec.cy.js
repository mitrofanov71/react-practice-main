import {faker} from '@faker-js/faker'

describe('test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3001/')
    const bookInput = cy.get('[data-cy="bookNameInput"]')
    const authorInput = cy.get('[data-cy="authorNameInput"]')
    const createButton = cy.get('[data-cy="createBookButton"]')
    const bookName = faker.name.fullName()
    const authorName = faker.random.words(3)
    bookInput.focus().type(bookName)
    authorInput.focus().type(authorName)
    createButton.click()
    // const booksList = cy.get('[data-cy="books-list"]')
    cy.get('[data-cy="books-list"]').contains(bookName)
    cy.get('[data-cy="books-list"]').contains(authorName)
  })
})