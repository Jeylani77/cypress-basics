describe('Assertions', () => {
    // it('Assertions Demo', () => {
    //     cy.visit('https://example.cypress.io')
    //     //cy.wait(5000)
    //     cy.contains('get').click()
    //     cy.get('#query-btn')
    //         .should('contain', 'Button')
    //         .and('be.visible')
    //         .and('be.enabled')

    //     assert.strictEqual('4', '4', 'EQUAL')

    it('Implicit Assertions', () => {
        cy.visit('url_test_labizy')
        cy.url().should('eq', 'url_test_labizy')
            .and('contain', 'ceessay')
            .and('include', 'ceessay.vercel.app')
        cy.get('.ant-btn').should('be.visible')
            .and('be.enabled')

        // cy.get('#basic_email').type('Admin')
        // cy.get('#basic_email').should('have.value', 'Admin')

    });

    it('Explicit Assertions', () => {
        cy.wait(200)
        cy.visit('url_test_labizy')
        cy.get('#basic_email').type('test')
        cy.get('#basic_password').type('test')
        cy.get("button[type='submit']").click()

        let expectName = "xyz"
        cy.get("li[class='ant-menu-overflow-item ant-menu-submenu ant-menu-submenu-horizontal'] span[class='ant-menu-title-content']")
            .then((name) => {
                let actualName = name.text()

                // BDD Style
                //expect(actualName).to.equal(expectName)
                expect(actualName).to.not.equal(expectName)

                // TDD Style
                // assert.equal(actualName, expectName)
                 assert.notEqual(actualName, expectName)

            })
    });


});

