import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

// Greet should render the text hello and if the name is passed into the component
// It should render hello followed by a name

test("Greets Hello", () => {
  render(<Greet />);
  let greets = screen.getByText(/hello/i);
  expect(greets).toBeInTheDocument();
});

test("Greet hello with a name", () => {
  render(<Greet name="ShiVin" />)
  let greetsWithName = screen.getByText(/hello shivin/i)
  expect(greetsWithName).toBeInTheDocument();
})