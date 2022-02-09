import { inputs, LoginPage, MainPage, WorkShiftPage } from '../index'

const loginPage = new LoginPage()
const mainPage = new MainPage()
const workShiftPage = new WorkShiftPage()

describe('Should interact with page', () => {
  beforeEach(
    'Should login, redirect to WorkShift Page and confirm the right redirection',
    () => {
      loginPage.open()
      loginPage.login(inputs.username, inputs.password)
      const dashboardUrl = cy.url()
      dashboardUrl.should('equal', inputs.baseUrl + inputs.dashBoardUrl)

      mainPage.goToWorkShift()
      const workShiftUrl = cy.url()
      workShiftUrl.should('equal', inputs.baseUrl + inputs.workShiftUrl)
    }
  )
  it('Should be add New Shift and reassure it is added', () => {
    let shiftRowsNumberPrimary
    workShiftPage.shiftRows.then(($el) => {
      shiftRowsNumberPrimary = $el.length
    })
    workShiftPage.addNewShift(
      inputs.shiftName,
      inputs.hoursFrom,
      inputs.hoursTo
    )

    workShiftPage.shiftRows.then(($el) => {
      cy.wrap($el.length).should('equal', shiftRowsNumberPrimary + 1)
    })

    workShiftPage.shiftName.should('be.visible')
  })

  it('Should delete that Shift and check if it was deleted', () => {
    workShiftPage.deleteNewShift()
    workShiftPage.shiftName.should('not.exist')
  })
})
