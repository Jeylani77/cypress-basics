/// <reference types="cypress" />

it('Google Search', () => {
    cy.visit('https://google.com')
    cy.get('.SDkEP').type('OK{Enter}')
    cy.wait(5000)
    cy.contains('Video').click()
});
