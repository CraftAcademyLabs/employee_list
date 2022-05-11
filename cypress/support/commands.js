/* eslint-disable no-undef */
Cypress.Commands.add("visitApplication", () => {
  cy.intercept("GET", "https://reqres.in/api/users", {
    fixture: "users.json",
  });
  cy.visit("/");
});

Cypress.Commands.add("employeeList", () => {
  return cy.get("[data-cy=employee-list]");
});

Cypress.Commands.add("firstItem", { prevSubject: true }, (subject) => {
  return cy.get(subject.selector).children().first();
});
