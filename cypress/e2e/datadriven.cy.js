describe('My test suits', () => {
    it('Data Driven', () => {

        cy.fixture("orangehrmlogin2.json").then((data) => {

            cy.visit("https://opensource-demo.orangehrmlive.com/")

            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click()

                if (userdata.username == "Admin" && userdata.password == "admin123") {
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                        .should('have.text', userdata.expected)

                        cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click()
                        cy.get(':nth-child(4) > .oxd-userdropdown-link').should('be.visible')
                        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                } else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                        .should('have.text', userdata.expected)
                }
            });
        })


    });

});
