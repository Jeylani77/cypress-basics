describe('Custom Commands Demo', () => {
    beforeEach(() => {
        cy.visit("https://demo.nopcommerce.com/")
    })
    it('Click Links', () => {
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get("div[class='product-name'] h1")
            .should('have.text', 'Apple MacBook Pro 13-inch')
    });

    it.only('custom login', () => {
        cy.clickLink('Log in');
        cy.loginNopCommerce("testing@gmail.com","test123")
    });

});

