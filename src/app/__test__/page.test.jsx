import { render, screen } from "@testing-library/react";
import Home from "../page";

// import * as helpers from "@/helpers";
// import * as api from "@/services/api";
// import * as filter from "@/services/filter-data";

// import { ApiMockResponse } from "./__mocks__/api.mocks";

// jest.mock("@/helpers");
// jest.mock("@/services/api");
// jest.mock("@/services/filter-data");

// jest.mock("@/components/Sidenav", () => {
//   return function MockChildComponent(props) {
//     return <mock-child data-testid="sidenav" {...props} />;
//   };
// });

// jest.mock("@/components/CruisesList", () => {
//   return function MockChildComponent(props) {
//     return <mock-child data-testid="cruises-list" {...props} />;
//   };
// });

describe("Home Page", () => {
  // beforeEach(() => {
  //   helpers.mapSailingParamsOrDefault.mockReturnValue({});
  //   api.fetchSailings.mockResolvedValue(ApiMockResponse);
  //   helpers.getCruiseLineList.mockReturnValue(["Royal Caribbean", "Carnival"]);
  //   filter.filterData.mockReturnValue([
  //     { id: 1, name: "Cruise 1", cruiseLine: "Royal Caribbean" },
  //   ]);
  // });

  // it("renders with the default query params", async () => {
  //   render(await Home({}));

  //   const sidenav = screen.getByTestId("sidenav");
  //   const cruisesList = screen.getByTestId("cruises-list");

  //   expect(sidenav.props.cruiselist).toBe(
  //     ["Royal Caribbean", "Carnival"].join(",")
  //   );

  //   expect(cruisesList.props.data).toBe([
  //     { id: 1, name: "Cruise 1", cruiseLine: "Royal Caribbean" },
  //   ]);
  // });

  it("TODO", () => {
    expect(true).toBe(true);
  });
});
