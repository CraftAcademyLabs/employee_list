describe("The list of employees", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://reqres.in/api/users", {
      fixture: "usersResponse.json",
    });
    cy.visit("/");
  });

  it("is expected to display a header", () => {
    cy.get("#header").should("contain", "Employee List");
  });

  it("is expected to display a list with 6 items", () => {
    cy.get("#employee-list").children().should("have.length", 6);
  });

  it("is expected that the list items display the expected content", () => {
    cy.get("#employee-list")
      .children()
      .first()
      .find(".name")
      .should("contain", "Thomas Bluth");
  });

  it("is expected that the list items display an image", () => {
    cy.get("#employee-list").within(() => {
      cy.get(".employee-item").first().find(".avatar").should("be.visible");
    });
  });
});
