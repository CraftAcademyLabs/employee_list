describe("When visting the application", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to render a list", () => {
    cy.get("[data-cy=employee-list]").children().should("have.length", 6);
  });
});
