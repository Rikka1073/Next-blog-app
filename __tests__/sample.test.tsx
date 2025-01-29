import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MainTitle from "../components/MainTitle";

describe("Title", () => {
  it("メインタイトルがあること", () => {
    render(<MainTitle />);

    const mainTitle = screen.getByTestId("mainTitle");

    expect(mainTitle).toBeInTheDocument();
  });
});
