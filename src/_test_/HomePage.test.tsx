import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("renders home page correctly", () => {
  render(<Home />);

  const element = screen.getByText("Homepage");
  expect(element).toBeDefined();
});
