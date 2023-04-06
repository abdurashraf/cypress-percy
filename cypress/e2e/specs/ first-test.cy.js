/// <reference types="Cypress" />

describe('Cypress Visual Testing', () => {
    it('Compare fullpage of Google page', () => {
        cy.visit("https://courses.ultimateqa.com/users/sign_in");
        cy.get('label+input[type="email"]').type("test")
        cy.percySnapshot("ptest");
         cy.log("ssss")
    })
})