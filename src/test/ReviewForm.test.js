import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ReviewForm } from "../components/review";

describe("ReviewForm", () => {
  test("ReviewForm이 정상적으로 렌더링 되었는지 확인", () => {
    render(<ReviewForm />);

    const reviewCodeForm = screen.getByTestId("review-code-form");
    const reivewInfoForm = screen.getByTestId("review-info-form");

    expect(reviewCodeForm).toBeInTheDocument();
    expect(reivewInfoForm).toBeInTheDocument();
  });

  test.skip("ReviewCodeForm에 인풋값을 변화시켰을 때 정상적으로 코드가 하이라이팅 되는지 확인", () => {});

  test("ReviewInfoForm에 인풋값을 변화시켰을 때 정상적으로 값이 업데이트 되는지 확인", () => {
    render(<ReviewForm />);

    const reviewInfoFormInput = screen.getByPlaceholderText("제목을 입력하세요");
    const reviewInfoFormTextArea = screen.getByPlaceholderText("문제상황을 입력하세요");

    fireEvent.change(reviewInfoFormInput, { target: { value: "test" } });
    fireEvent.change(reviewInfoFormTextArea, { target: { value: "test" } });

    expect(reviewInfoFormInput.value).toBe("test");
    expect(reviewInfoFormTextArea.value).toBe("test");
  });

  test("ReviewInfoForm에 값을 잘못읿력 했을 경우에 validation이 정상적으로 동작하는지 확인", () => {
    render(<ReviewForm />);

    const reviewInfoFormButton = screen.getByText("글 등록");

    fireEvent.click(reviewInfoFormButton);

    const options = { timeout: 2000 };

    const reviewInfoFormInputValidation = screen.getByText("제목을 입력해주세요", options);
    const reviewInfoFormTextAreaValidation = screen.getByText("문제상황을 입력해주세요", options);

    expect(reviewInfoFormInputValidation).toBeInTheDocument();
    expect(reviewInfoFormTextAreaValidation).toBeInTheDocument();
  });

  test.skip("ReviewForm의 값을 제출했을 때 값이 초기화 되는 지 확인", () => {});
});
