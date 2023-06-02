/// <reference types="Cypress" />

describe('Percy Visual Testing', () => {
    it('should test dynamic content and animation snapshot', () => {
        cy.visit("https://www.movingimage.com");
        cy.get('[id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]').click()

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('[id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]').should("not.be.visible", { timeout: 60000 })
        cy.percySnapshot("DynamicLandingPage");
    })
})