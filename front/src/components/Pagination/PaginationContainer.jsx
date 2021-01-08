import React from "react";
import { Pagination } from "react-bootstrap";

import { changePaginationDataUI } from "../../helpers/changePaginationDataUI";

export const PaginationContainer = ({
  totalPages,
  currentPage,
  handlePrevClick,
  handleNextClick,
  handleFirstClick,
  handleLastClick,
  handlePageChange
}) => {
  const paginationItemsOutput = () => {
    const paginationItemArray = [];

    for (let i = 0; i <= totalPages; i++) {
      paginationItemArray.push(
        <Pagination.Item
          key={i}
          onClick={e => {
            e.preventDefault();
            handlePageChange(i);
          }}
          {...{ active: currentPage === i ? true : false }}
        >
          {changePaginationDataUI(i)}
        </Pagination.Item>
      );
    }

    return paginationItemArray;
  };

  return (
    <Pagination>
      <Pagination.First onClick={handleFirstClick} />
      <Pagination.Prev onClick={handlePrevClick} />
      {paginationItemsOutput()}
      <Pagination.Next onClick={handleNextClick} />
      <Pagination.Last onClick={handleLastClick} />
    </Pagination>
  );
};
