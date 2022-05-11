/* eslint-disable no-undef */
describe("Visiting the application", () => {
  it("is expected to display Thomas on top", () => {
    cy.visitApplication();
    cy.employeeList().firstItem().should("contain.text", "Thomas Ochman");
  });
});
