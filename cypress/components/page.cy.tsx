import Page from "../../src/app/page";

describe("<Page />", () => {
  it("should render and display expected content", async () => {
    cy.mount(await Page({ searchParams: new Promise(() => null) }));
    cy.get("[data-testid='sidenav']").should("exist");
    cy.get("[data-testid='cruise-list']").should("exist");
  });
});
