export class Page {
  open(url): void {
    cy.visit(`${url}`)
  }
}
