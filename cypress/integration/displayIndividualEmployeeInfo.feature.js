/* eslint-disable no-undef */
describe('Clicking on the "view" button for Max', () => {
  // ARRANGE
  beforeEach(() => {
    cy.intercept("GET", "**/api/users", {
      fixture: "users.json",
    });
    cy.intercept("GET", "**/api/users/*", {
      fixture: "max.json",
    });
    cy.visit("/");
    cy.get("[data-cy=user-8]").click("topRight");
  });

  it("is expected to display a modal with information", () => {
    // ASSERT
    cy.get(".modal").should("be.visible").and("contain.text", "Max Anderson");
  });
});
