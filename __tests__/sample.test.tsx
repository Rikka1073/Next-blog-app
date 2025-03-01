import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import MainTitle from "../components/MainTitle";
import ArticleList from "../components/Article/Articlelist";
import BlogList from "../components/blog/BlogList";
import { client } from "../app/libs/client";
import Blog from "../app/blogs/page";
import Article from "../app/articles/page";

jest.mock("../app/libs/client", () => ({
  client: {
    get: jest.fn(),
  },
}));

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

  it("もっと見るボタンがあること", async () => {
    render(<ArticleList />);

    await waitFor(() => {
      expect(screen.getByTestId("moreButton")).toBeInTheDocument();
    });
  });
});

describe("Article一覧", () => {
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
    render(<Article />);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    screen.getAllByTestId("articleListTitle");
  });
});

describe("Blog", () => {
  beforeEach(() => {
    (client.get as jest.Mock).mockResolvedValue({
      contents: [
        {
          id: "1",
          url: "https://qiita.com",
          title: "ブログタイトル1",
        },
        {
          id: "2",
          url: "https://qiita.com",
          title: "ブログタイトル2",
        },
      ],
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("タイトルがあること", async () => {
    render(<BlogList />);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      expect(screen.getAllByTestId("titleBlog")).toHaveLength(2);
    });
  });
});

describe("Blog一覧", () => {
  beforeEach(() => {
    (client.get as jest.Mock).mockResolvedValue({
      contents: [
        {
          id: "1",
          url: "https://qiita.com",
          title: "ブログタイトル1",
        },
        {
          id: "2",
          url: "https://qiita.com",
          title: "ブログタイトル2",
        },
      ],
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("タイトルがあること", async () => {
    render(<Blog />);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      expect(screen.getAllByTestId("blogList-title"));
    });
  });
});
