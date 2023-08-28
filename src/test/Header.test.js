import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "../components/ui";

describe("Header", () => {
  test("Header 영역이 렌더링 되었는지 확인", () => {
    render(<Header />);

    const headerNav = screen.getByTestId("header-nav");
    const headerAside = screen.getByTestId("header-aside");

    expect(headerNav).toBeInTheDocument();
    expect(headerAside).toBeInTheDocument();
  });

  test("Header 영역을 스크롤했을 때 active라는 클래스가 붙는지 확인", () => {
    render(<Header />);

    const headerNav = screen.getByTestId("header-nav");
    const headerAside = screen.getByTestId("header-aside");

    setTimeout(() => {
      // 스크롤 시뮬레이션
      headerNav.scrollTop = 1000;

      expect(headerNav).toHaveClass("header-nav active");
      expect(headerAside).toHaveClass("header-aside active");
    }, 0);
  });
});
