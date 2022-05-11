/* eslint-disable no-undef */
class EmployeeList {
  visit() {
    cy.intercept("GET", "https://reqres.in/api/users", {
      fixture: "users.json",
    });
    cy.visit("/");
  }

  theList() {
    return cy.get("[data-cy=employee-list]")
  }

  firstItem() {
    return this.theList().children().first()
  }
}

export default EmployeeList;
