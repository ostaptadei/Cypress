import { addShift, deleteShift, inputs } from '../index'
import { Page } from './page'

const workShiftPageLocators = {
  employeesList: '.selectMany :nth-child(1)',
  btnAdd: '#btnAdd',
  btnAssing: '#btnAssignEmployee',
  input: '#workShift_name',
  btnSave: '#btnSave',
  timePickerFrom: '#workShift_workHours_from',
  timePickerTo: '#workShift_workHours_to',
  shiftName: `tr a:contains(${inputs.shiftName})`,
  hoursFrom: `tbody :contains(${inputs.shiftName}) :contains(${inputs.hoursFrom})`,
  hoursTo: `tbody :contains(${inputs.shiftName}) :contains(${inputs.hoursTo})`,
  checkBox: `tbody :contains(${inputs.shiftName}) input`,
  btnDelete: `#btnDelete`,
  btnOk: `#dialogDeleteBtn`,
  customerList: '#customerList',
  shiftRows: 'tr',
}
export class WorkShiftPage extends Page {
  get employeesList(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(workShiftPageLocators.employeesList, { timeout: 3000 })
  }

  get btnAdd(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(workShiftPageLocators.btnAdd, { timeout: 2000 })
  }

  get btnAssing(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(workShiftPageLocators.btnAssing, { timeout: 2000 })
  }

  get input(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(workShiftPageLocators.input, { timeout: 3000 })
  }

  get btnSave(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(workShiftPageLocators.btnSave, { timeout: 2000 })
  }

  get timePickerFrom(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(workShiftPageLocators.timePickerFrom, { timeout: 3000 })
  }

  get timePickerTo(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(workShiftPageLocators.timePickerTo, { timeout: 3000 })
  }

  get checkBox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(workShiftPageLocators.checkBox, {
      timeout: 3000,
    })
  }

  get shiftName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(workShiftPageLocators.shiftName, { timeout: 3000 })
  }

  get btnDelete(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(workShiftPageLocators.btnDelete, { timeout: 2000 })
  }

  get btnOk(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(workShiftPageLocators.btnOk, { timeout: 2000 })
  }

  get shiftRows(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(workShiftPageLocators.shiftRows, { timeout: 3000 })
  }

  addNewShift(shiftName: string, hoursFrom: string, hoursTo: string): void {
    addShift(this, shiftName, hoursFrom, hoursTo)
  }

  deleteNewShift(): void {
    return deleteShift(this)
  }
}
