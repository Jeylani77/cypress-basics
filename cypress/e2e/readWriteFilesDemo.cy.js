/// <reference types="cypress" />

it('Read Files using Fixture', () => {
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })
});

it('Read Files usinf ReadFile', () => {
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    })
});

it('Write file demo', () => {
    cy.writeFile('./cypress/fixtures/sample.txt', 'Hello I am AKN\n')
    cy.writeFile('./cypress/fixtures/sample.txt', 'I am learning cypress', { flag: 'a+' })
});


