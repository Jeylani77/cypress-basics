import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe('Mouse Operations', () => {
    it('Mouse Hover', () => {
        cy.visit('https://demo.opencart.com/')

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
            .should('not.be.visible')
        cy.get("ul[class='nav navbar-nav']>li:first-child")
            .trigger('mouseover').click();
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
            .should('be.visible')
    });

    it('Right click', () => {
        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-icon-copy > span').should('not.be.visible')
        cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-icon-copy > span').should('be.visible')
    });

    it('Double Click', () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded("#iframeResult")
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe("#iframeResult").find("#field2").should('have.value', 'Hello World!')
    });

    it('Drag and Drop', () => {
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box3").drag('#box103', { force: true })
    });

    it.only('Scroll Page', () => {
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
        //Senegal
        cy.get(':nth-child(2) > tbody > :nth-child(59) > :nth-child(1) > img').scrollIntoView({ duration: 5000 })
        cy.get(':nth-child(2) > tbody > :nth-child(59) > :nth-child(1) > img').should('be.visible')

        //Argentina
        cy.get(':nth-child(1) > tbody > :nth-child(8) > :nth-child(1) > img').scrollIntoView({ duration: 5000 })
        cy.get(':nth-child(1) > tbody > :nth-child(8) > :nth-child(1) > img').should('be.visible')
    });


});
