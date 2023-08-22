describe('Fixtures', () => {
    
    it('Approach 1', () => {
        cy.fixture("orangehrmlogin").then((data) => {
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
        })

    });

    let userdata;
    before(() => {
        cy.fixture("orangehrmlogin").then((data) => {
            userdata = data;
        })
    });

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    })

    it.only('Approach 2', () => {
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should('have.text', userdata.expected)
    });
});
