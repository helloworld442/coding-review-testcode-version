import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { ReviewBanner } from "../components/review";
import TestProvider from "./test.util";

const server = setupServer(
  rest.get("/reviews", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: "Review 1", problem: "Problem 1", question: "Question 1" },
        { id: 2, title: "Review 2", problem: "Problem 2", question: "Question 2" },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("ReviewBanner", () => {
  test("ReviewBanner에서 데이터를 정상적으로 가져올 때 데이터가 표시 되는 지 확인", async () => {
    render(
      <TestProvider>
        <ReviewBanner />
      </TestProvider>
    );

    // useQuery 훅이 로딩 상태일 동안 "loading..." 텍스트가 화면에 나타나는지 확인
    const loadingText = screen.getByText("loading....");
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => {
      // 모의 데이터의 각 항목이 화면에 표시되는지 확인
      const itemTitles = screen.queryAllByText((content, element) => content.startsWith("Review"));
      expect(itemTitles).toHaveLength(2);

      // 모의 데이터의 문제상황과 궁금한 점이 화면에 표시되는지 확인
      const problemTexts = screen.queryAllByText((content, element) =>
        content.startsWith("Problem")
      );
      const questionTexts = screen.queryAllByText((content, element) =>
        content.startsWith("Question")
      );
      expect(problemTexts).toHaveLength(2);
      expect(questionTexts).toHaveLength(2);
    });
  });
});
