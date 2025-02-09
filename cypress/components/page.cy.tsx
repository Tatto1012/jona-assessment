import Page from "../../src/app/page";

describe("<Page />", () => {
  it("should render and display expected content", () => {
    cy.mount(<Page />);
    cy.get(".mb-2").contains("Get started by editing");
  });
});
