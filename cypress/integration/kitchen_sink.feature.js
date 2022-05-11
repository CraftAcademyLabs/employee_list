/* eslint-disable no-undef */
describe("Tests", () => {
  it("", () => {
    cy.visit("/");
    // cy.get("[data-cy=btn]").as("button");
    cy.get(":checkbox").check({ values: ["test", "test2"], log: false });
    cy.get("[data-cy=btn]", { timeout: 6000 }).trigger("click");
  });
});
