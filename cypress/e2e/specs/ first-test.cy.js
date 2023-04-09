/// <reference types="Cypress" />

describe('Cypress Visual Testing', () => {
    it('Compare landing page of SwagLabsccc', () => {
        cy.visit("http://localhost:3000/");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click()
        cy.percySnapshot("Inventory");
    })
})