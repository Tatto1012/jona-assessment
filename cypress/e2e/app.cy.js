describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-testid='sidenav']").should("exist");
    cy.get("[data-testid='cruise-list']").should("exist");
  });
});
