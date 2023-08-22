
import { LoginPage } from './pages/login_page'

const loginPage = new LoginPage()

beforeEach(function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
});

describe('Login Test', () => {

    it('Login 1', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin12')
        loginPage.clickLoginButton()
        cy.wait(2000)
    });

    it('Login 2', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLoginButton()

    });
});

