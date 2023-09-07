import { useState } from "react";
import { css, styled } from "styled-components";

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
    <StPagnation>
      <StPagnationMenu>
        <StPagnationButton
          data-testid="prev-button"
          $disabled={currPage <= 1}
          onClick={onClickPrevPages}
        >
          &lt;
        </StPagnationButton>

        {pageNumbers.map((pageNumber, i) => (
          <StPagnationNumber
            key={i}
            data-testid="page-number"
            $active={currPage === pageNumber}
            onClick={() => onClickPages(pageNumber)}
          >
            {pageNumber}
          </StPagnationNumber>
        ))}

        <StPagnationButton
          data-testid="next-button"
          $disabled={currPage >= Math.ceil(totalPages / itemPerPages)}
          onClick={onClickNextPages}
        >
          &gt;
        </StPagnationButton>
      </StPagnationMenu>
    </StPagnation>
  );
};

const StPagnation = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
`;

const StPagnationMenu = styled.ul`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const StPagnationButton = styled.li`
  width: 24px;
  height: 24px;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;

  ${(props) =>
    props.$disabled &&
    css`
      color: #eee;
    `}
`;

const StPagnationNumber = styled.li`
  width: 24px;
  height: 24px;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;

  ${(props) =>
    props.$active &&
    css`
      border: 3px solid #eee;
      border-radius: 100%;
      background: rgb(64, 58, 107);
      color: #eee;
    `}
`;

export { Pagnation };
