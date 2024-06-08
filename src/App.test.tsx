import { render, screen } from "@testing-library/react";
import App from "./App";
import { users } from "./script";
import React from "react";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("App component", () => {
  test("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("User Monitor App")).toBeInTheDocument();
  });

  test("renders correct number of users", () => {
    render(<App />);
    const rows = screen.getAllByRole("row");
    expect(rows.length - 1).toEqual(users.length);
  });
});
