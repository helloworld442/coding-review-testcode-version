import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ReviewBanner } from "../components/review";

describe("ReviewBanner", () => {
  test("ReviewBanner 랜더링이 정상적으로 동작하는지 확인", () => {
    render(<ReviewBanner />);

    const reviewBanner = screen.getByTestId("review-banner");

    expect(reviewBanner).toBeInTheDocument();
  });
});
