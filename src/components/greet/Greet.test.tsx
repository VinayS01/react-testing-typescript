import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

// Greet should render the text hello and if the name is passed into the component
// It should render hello followed by a name

// grouping tests - describe
// we can use .skip to a test or grouping test and .only to test a single test group/test case
// we can also use multiple describe inside one test component
// we can also nest describe method within describe

// file naming conventions of for test is... spec.tsx, test.tsx or __test__ folder

// According to jest there is another alternative to test is it
// alternate to .only to use is f added to the prefix of it
// alternate to .skip to use is x added to the prefix of it(excluding from the test)

describe("Greet", () => {
  fit("Hello", () => {
    render(<Greet />);
    let greets = screen.getByText(/hello/i);
    expect(greets).toBeInTheDocument();
  });

  describe("Nested", () => {
    xit("hello with a name", () => {
      render(<Greet name="ShiVin" />);
      let greetsWithName = screen.getByText(/hello shivin/i);
      expect(greetsWithName).toBeInTheDocument();
    });
  });
});
