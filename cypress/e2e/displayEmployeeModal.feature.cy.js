/* eslint-disable no-undef */
describe("Display of employee modal", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://reqres.in/api/users", {
      fixture: "usersResponse.json",
    });
    cy.intercept("GET", "https://reqres.in/api/users/1", {
      fixture: "userResponse.json",
    });
    cy.visit("/");
    cy.get("#employee-list").within(() => {
      cy.get(".employee-item").first().find(".view-button").click();
    });
  });

  it("is expected to open up a modal when view button is clicked", () => {
    cy.get("#modal-container").should("be.visible");
  });

  it("is expected that the modal features expected content", () => {
    cy.get("#modal-container").within(() => {
      cy.get(".name").should("contain", "Thomas Bluth");
      cy.get(".image").should("be.visible");
      cy.get(".email").should("contain", "george.bluth@reqres.in");
    });
  });

  it("is expected to hide the modal on click outside", () => {
    cy.get(".dimmer").click(-10, 0, { force: true });
    cy.get("#modal-container").should("not.exist");
  });
});
