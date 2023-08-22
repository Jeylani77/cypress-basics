describe('Check UI Elements', () => {
    // it('Checking Radio Buttons', () => {
    //     cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    //     cy.get('#male').should('be.visible')
    //     cy.get('#female').should('be.visible')
        
    //     cy.get('#male').check().should('be.checked')
    //     cy.get('#female').should('not.be.checked')

    // });

    it('Checking Check Boxes', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        // cy.get('#monday').should('be.visible')
        // cy.get('#monday').check().should('be.checked')
        // cy.get('#saturday').check().should('be.checked')
        // cy.get('#saturday').uncheck().should('not.be.checked')

        //cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')




    });
    
    
});
