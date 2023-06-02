/// <reference types="Cypress" />

describe('Percy Visual Testing', () => {
  
      let data; //closure variable
      before(() => {
        cy.fixture('swaglab').then((fData) => {
            data = fData;
        });
      });
    

    it('should test SwagLabs inventory page', () => {
        cy.visit(data.uri);
        cy.get('[data-test="username"]').type(data.uname);
        cy.get('[data-test="password"]').type(data.pass);
        cy.get('[data-test="login-button"]').click()
        cy.percySnapshot("Inventory");
    })
})