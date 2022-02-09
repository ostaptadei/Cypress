import { redirectToWorkShift } from '../index'
import { Page } from './page'

const mainPageLocators = {
  adminTab: '#menu_admin_viewAdminModule',
  jobTab: '#menu_admin_Job',
  workShiftTab: '#menu_admin_workShift',
}

export class MainPage extends Page {
  get adminTab(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(mainPageLocators.adminTab, { timeout: 3000 })
  }

  get jobTab(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(mainPageLocators.jobTab, { timeout: 3000 })
  }

  get workShiftTab(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(mainPageLocators.workShiftTab, { timeout: 3000 })
  }

  goToWorkShift(): void {
    return redirectToWorkShift(this)
  }
}
