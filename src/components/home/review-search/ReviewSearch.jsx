import { useState } from "react";
import "./ReviewSearch.scss";

const ReviewSearch = () => {
  const [form, setForm] = useState({ title: "", tag: "", tags: [] });

  const onKeyDownTag = (e) => {
    if (e.key === " ") {
      const newValue = e.target.value + " ";
      const tags = newValue.match(/#([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_]+)/g);
      setForm((prev) => ({ ...prev, tags }));
    }

    if (e.key === "Backspace") {
      const newValue = e.target.value.slice(0, -1);
      const tags = newValue.match(/#([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_]+) /g);
      setForm((prev) => ({ ...prev, tags }));
    }
  };

  const onChangeTitle = (e) => {
    const tag = e.target.value.replace(
      /#([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_]+) /g,
      '<span class="colorful-text">#$1 </span>'
    );
    setForm((prev) => ({ ...prev, title: e.target.value, tag }));
  };

  const onSubmitInput = (e) => {
    e.preventDefault();
  };

  return (
    <form className="review-search" onSubmit={onSubmitInput}>
      <div className="review-search-input">
        <pre dangerouslySetInnerHTML={{ __html: form.tag }} />
        <input
          type="text"
          value={form.title}
          onChange={onChangeTitle}
          onKeyDown={onKeyDownTag}
          placeholder="검색어를 입력하세요"
          autoComplete="false"
          spellCheck="false"
        />
      </div>
      <button>검색</button>
    </form>
  );
};

export { ReviewSearch };
