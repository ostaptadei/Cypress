import { LoginPage, MainPage, WorkShiftPage } from '../index'

export function logIn(
  page: LoginPage,
  username: string,
  password: string
): void {
  page.inputUsername.type(username)
  page.inputPassword.type(password)
  page.btnSubmit.click()
}

export function redirectToWorkShift(page: MainPage): void {
  page.adminTab.realHover()
  page.jobTab.realHover()
  page.workShiftTab.realClick()
}

export function addShift(
  page: WorkShiftPage,
  shiftName: string,
  hoursFrom: string,
  hoursTo: string
): void {
  page.btnAdd.click()
  page.employeesList.click()
  page.btnAssing.click()
  page.input.type(shiftName)
  page.timePickerFrom.select(hoursFrom)
  page.timePickerTo.select(hoursTo)
  page.btnSave.click()
}

export function deleteShift(page: WorkShiftPage): void {
  page.checkBox.click()
  page.btnDelete.click()
  page.btnOk.click()
}
