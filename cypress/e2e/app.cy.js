describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".mb-2").contains("Get started by editing");
  });
});
