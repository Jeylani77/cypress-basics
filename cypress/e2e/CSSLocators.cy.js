/// <reference types="cypress" />

describe('CSS Locators', () => {
    it('Login Labizy', () => {
        cy.visit('url_test_labizy')
        cy.get('#basic_email').type('test')
        cy.get('#basic_password').type('test')
        cy.get("button[type='submit']").click()
    });
    
});
