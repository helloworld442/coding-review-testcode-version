import classNames from "classnames";
import "./Pagnation.scss";
import { useState } from "react";

const Pagnation = ({ totalPages, itemPerPages }) => {
  const [currPage, setCurrPage] = useState(1);
  const pageNumbers = [];

  const onClickPages = (number) => setCurrPage(number);

  const onClickPrevPages = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  const onClickNextPages = () => {
    if (currPage < Math.ceil(totalPages / itemPerPages)) {
      setCurrPage(currPage + 1);
    }
  };

  for (let i = 1; i <= Math.ceil(totalPages / itemPerPages); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagnation">
      <ul className="pagnation-list">
        <li
          data-testid="prev-button"
          className={classNames("prev-button", { disabled: currPage <= 1 })}
          onClick={onClickPrevPages}
        >
          &lt;
        </li>

        {pageNumbers.map((pageNumber, i) => (
          <li
            key={i}
            data-testid="page-number"
            className={classNames("page-number", { active: currPage === pageNumber })}
            onClick={() => onClickPages(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}

        <li
          data-testid="next-button"
          className={classNames("next-button", {
            disabled: currPage >= Math.ceil(totalPages / itemPerPages),
          })}
          onClick={onClickNextPages}
        >
          &gt;
        </li>
      </ul>
    </div>
  );
};

export { Pagnation };
