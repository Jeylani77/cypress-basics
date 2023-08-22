describe('File Upload Handle', () => {
    it('Single File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#file-upload").attachFile('sample.txt')
        cy.get("#file-submit").click()
        cy.wait(3000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    });

    it('Rename file uploaded', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#file-upload").attachFile({ filePath: 'sample.txt', fileName: 'sample2.txt' })
        cy.get("#file-submit").click()
        cy.wait(3000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    });

    it.only('Drag and Drop Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("#drag-drop-upload").attachFile('sample.txt', { subjectType: 'drag-n-drop' })
        cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span")
            .should('have.text', 'sample.txt')
    });

});
