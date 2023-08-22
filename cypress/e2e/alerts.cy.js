describe('Alerts', () => {

    it.skip('Alert Normal', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    });

    it.skip('Alert Confirm - OK', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    });

    it.skip('Alert Confirm - Cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.on('window:confirm', () => false)
        cy.get('#result').should('not.have.text', 'You clicked: Ok')
    });

    it.skip('Alert Prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((window) => {
            cy.stub(window, 'prompt').returns('Welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text', 'You entered: Welcome')

    });

    it.skip('Alert Auth', () => {
        //Approach 1
        cy.visit('https://the-internet.herokuapp.com/basic_auth',
            {
                auth: {
                    username: "admin",
                    password: "admin"
                }
            }
        );

        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')

        //Approach 2
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')

    });

});
