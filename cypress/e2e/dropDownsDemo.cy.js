describe('DropDowns Demo', () => {
    it.skip('with select', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country')
            .select('Italy')
            .should('have.value', 'Italy')
    });
    it.skip('without select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('France{Enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'France')
    });
    it.skip('auto sugestions', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Dakar')
        cy.get('.suggestion-title').contains('Dakar').click()
        cy.get('.mw-page-title-main').should('have.text', 'Dakar')
    });
    it('dynamic', () => {
        cy.visit("https://www.google.com/")
        cy.get('.SDkEP').type('Cypress automation')
        cy.wait(3000)
        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if ($el.text() == 'cypress automation jobs') {
                cy.wrap($el).click()
            }
        })
        cy.get('#APjFqb').should('have.text', 'cypress automation tool')
    });
});
