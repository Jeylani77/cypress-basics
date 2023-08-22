beforeEach(function () {
    cy.visit('url_test_labizy')
    cy.get('#basic_email').type('test')
    cy.get('#basic_password').type('test')
    cy.get("button[type='submit']").click()   
 });

describe('XPATH Locators', () => {

    it('Check Nombre Menu', () => {
        cy.xpath("//ul[@class='ant-menu ant-menu-root ant-menu-vertical ant-menu-dark']/li")
            .should('have.length', 5)

        cy.wait(3000)
    });

    it('Chained XPath', () => {
        cy.xpath("//ul[@class='ant-menu ant-menu-root ant-menu-vertical ant-menu-dark']")
            .xpath("./li")
            .should('have.length', 5)
    }); 
    
    
});
