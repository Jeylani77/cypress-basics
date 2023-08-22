export class LoginPage {
    username_locator = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_locator = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginButton_locator = '.oxd-button'

    enterUsername(usernane) {
        cy.get(this.username_locator).type(usernane)
    }
    enterPassword(password) {
        cy.get(this.password_locator).type(password)
    }
    clickLoginButton() {
        cy.get(this.loginButton_locator).click()
    }
}