import React from "react";
import { Pagination, Form, Col, Row } from "react-bootstrap";
import { PAGINATION_CONSTANTS } from "../../constants/paginationConstants";

import { changePaginationDataUI } from "../../helpers/changePaginationDataUI";

export const PaginationContainer = ({
  totalPages,
  currentPage,
  pageSize,
  handlePrevClick,
  handleNextClick,
  handleFirstClick,
  handleLastClick,
  handlePageChange,
  handleSpeciesPerPageSelect
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

  const itemsPerPageOutput = () =>
    PAGINATION_CONSTANTS.ITEMS_PER_PAGE.map((val, i) => (
      <option value={val} key={i}>
        {val}
      </option>
    ));

  return (
    <Row>
      <Form.Group as={Col}>
        <Pagination>
          <Pagination.First onClick={handleFirstClick} />
          <Pagination.Prev onClick={handlePrevClick} />
          {paginationItemsOutput()}
          <Pagination.Next onClick={handleNextClick} />
          <Pagination.Last onClick={handleLastClick} />
        </Pagination>
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>Видов на странице</Form.Label>
        <Form.Control
          value={pageSize}
          onChange={e => handleSpeciesPerPageSelect(e)}
          size="sm"
          as="select"
        >
          {itemsPerPageOutput()}
        </Form.Control>
      </Form.Group>
    </Row>
  );
};
