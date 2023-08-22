import 'cypress-iframe'

describe('Frames', () => {
    it('Approache 1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        // let iframe = cy.get('#mce_0_ifr')
        //     .its('0.contentDocument.body')
        //     .should('be.visible')
        //     .then(cy.wrap);

        cy.getIframe('#mce_0_ifr').clear().type('Welcome {cmd+a}')

        cy.get("button[aria-label='Bold']").click()
    });

    it.only('Approache 2 - Using Iframe plugin', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type("Yeaaah {ctrl+a}")
        cy.get("button[aria-label='Bold']").click()

    });

});
