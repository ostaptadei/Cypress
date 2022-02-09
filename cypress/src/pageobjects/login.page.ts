import { logIn } from '../index'
import { Page } from './page'

const loginPageLocators = {
  inputUsername: '#txtUsername',
  inputPassword: '#txtPassword',
  btnSubmit: '#btnLogin',
}
export class LoginPage extends Page {
  get inputUsername(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(loginPageLocators.inputUsername, { timeout: 3000 })
  }

  get inputPassword(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(loginPageLocators.inputPassword, { timeout: 3000 })
  }

  get btnSubmit(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(loginPageLocators.btnSubmit, { timeout: 2000 })
  }

  open(): void {
    super.open('index.php/auth')
  }

  login(username: string, password: string): void {
    return logIn(this, username, password)
  }
}
