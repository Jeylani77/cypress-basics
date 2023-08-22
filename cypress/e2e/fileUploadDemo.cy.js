/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

it('Upload file', () => {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('sample.txt')
});
it('Download file', () => {
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
});
