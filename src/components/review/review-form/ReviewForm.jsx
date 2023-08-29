import "./ReviewForm.scss";
import { ReviewFormInput, ReviewTextArea, Button } from "../../ui";
import { EditorCode, EditorForm, EditorTemplate } from "../../editor";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { postReviews } from "../../../api/review";

const ReviewForm = () => {
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ tags: [], tag: "", title: "", problem: "", question: "" });
  const [errors, setErrors] = useState({ title: "", problem: "", question: "" });
  const reviewMutation = useMutation(postReviews, {
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
      navigateTo("/");
    },
    onError: (err) => {
      console.log("[DEBUG] review form error: " + err);
    },
  });

  const validateTitle = (title) => {
    if (title.trim() === "") return "제목을 입력해주세요";
    if (title.length < 5) return "제목의 길이를 (5~30)자로 맞춰주세요";
    if (title.length > 30) return "제목의 길이를 (5~30)자로 맞춰주세요";
    return "";
  };

  const validateProblem = (problem) => {
    if (problem.trim() === "") return "문제상황을 입력해주세요";
    return "";
  };

  const validateQuestion = (question) => {
    if (question.trim() === "") return "궁금한 점을 업력해주세요";
    return "";
  };

  const onKeyDownTag = (e) => {
    if (e.key === " ") {
      const newValue = e.target.value + " ";
      const tags = newValue.match(/#([\S]+)/g);
      setForm((prev) => ({ ...prev, tags }));
    }

    if (e.key === "Backspace") {
      const newValue = e.target.value.slice(0, -1);
      const tags = newValue.match(/#([\S]+) /g);
      setForm((prev) => ({ ...prev, tags }));
    }
  };

  const onChangeTitle = (e) => {
    const tag = e.target.value.replace(/#([\S]+) /g, '<span class="colorful-text">#$1 </span>');
    const value = e.target.value.replace(/#([\S]+) /g, "");
    setForm((prev) => ({ ...prev, title: value, tag }));
    setErrors((prev) => ({ ...prev, title: "" }));
  };

  const onChangeProblem = (e) => {
    setForm((prev) => ({ ...prev, problem: e.target.value }));
    setErrors((prev) => ({ ...prev, problem: "" }));
  };

  const onChangeQuestion = (e) => {
    setForm((prev) => ({ ...prev, question: e.target.value }));
    setErrors((prev) => ({ ...prev, question: "" }));
  };

  const onChangeCode = (value) => {
    setForm((prev) => ({ ...prev, code: value }));
  };

  const onSubmitReview = (e) => {
    e.preventDefault();

    const titleError = validateTitle(form.title);
    const problemError = validateProblem(form.problem);
    const questionError = validateQuestion(form.question);

    if (titleError || problemError || questionError) {
      setErrors({
        title: titleError,
        problem: problemError,
        question: questionError,
      });
      return;
    }

    reviewMutation.mutate(form);

    setForm({ tags: [], tag: "", title: "", problem: "", question: "" });
  };

  return (
    <form className="review-form" onSubmit={onSubmitReview}>
      <div data-testid="review-code-form" className="review-code-form">
        <h2 className="review-code-form-title">
          <span>1</span>코드 리뷰를 위한 코드를 입력해주세요
        </h2>
        <div className="review-code-form-content">
          <EditorTemplate>
            <EditorForm onCode={onChangeCode} />
            <EditorCode code={form.code} />
          </EditorTemplate>
        </div>
      </div>
      <div data-testid="review-info-form" className="review-info-form">
        <h2 className="review-info-form-title">
          <span>2</span>코드 리뷰를 위한 정보를 입력해주세요
        </h2>

        <div className="review-info-form-content">
          <ReviewFormInput
            label="제목"
            code={form.tag}
            error={errors.title}
            onInput={onChangeTitle}
            onKeyDown={onKeyDownTag}
            placeholder="제목을 입력하세요"
          />
          <ReviewTextArea
            label="문제상황"
            value={form.problem}
            error={errors.problem}
            onInput={onChangeProblem}
            placeholder="문제상황을 입력하세요"
          />
          <ReviewTextArea
            label="궁금한 점"
            value={form.question}
            error={errors.question}
            onInput={onChangeQuestion}
            placeholder="궁금한 황을 입력하세요"
          />
          <Button id="review-form-code-button" size="large" primary fullWidth type="submit">
            글 등록
          </Button>
        </div>
      </div>
    </form>
  );
};

export { ReviewForm };
