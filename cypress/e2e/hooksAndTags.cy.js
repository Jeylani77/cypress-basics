//HOOKS
    // before
    // after
    // beforeEach
    // afterEach

//TAGS
    // skip
    // only

describe('Hooks and Tags', () => {

    before(() => {
        cy.log('Launch App')
    });

    after(() => {
        cy.log('Close App')
    });

    beforeEach(() => {
        cy.log('Login into App')
    });

    afterEach(() => {
        cy.log('Logout')
    })

    it('Search', () => {
        cy.log('Searching...')
    });

    it.only('Advanced Search', () => {
        cy.log('Advanced Searching...')
    });

    it('List Products', () => {
        cy.log('Fetching all products...')
    });
});
