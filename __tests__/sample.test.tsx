import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import MainTitle from "../components/MainTitle";
import ArticleList from "../components/Article/Articlelist";

describe("Title", () => {
  it("メインタイトルがあること", () => {
    render(<MainTitle />);

    const mainTitle = screen.getByTestId("mainTitle");

    expect(mainTitle).toBeInTheDocument();
  });
});

describe("Article", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: "1",
              url: "https://qiita.com",
              title: "タイトル",
            },
            {
              id: "2",
              url: "https://qiita.com",
              title: "タイトル",
            },
          ]),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("タイトルがあること", async () => {
    render(<ArticleList />);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      expect(screen.getAllByTestId("title")).toHaveLength(2);
    });
  });
});
