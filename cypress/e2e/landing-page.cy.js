/// <reference types="cypress" />


describe('cleaning page', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:5173/')
  })


  it('should navigate to bokings page', () => {
    // check if button  when clicked on navigates to bookings page
    cy.get('[data-testid=nav-button]').click()
    cy.url().should('include', '/bookings')
  })


})