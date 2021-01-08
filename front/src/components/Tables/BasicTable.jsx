import React, { useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useMultiState } from "../../hooks";
import { SPECIES_SEARCH } from "../../constants/path";
import { PaginationContainer } from "../Pagination";

export const BasicTable = () => {
  const [page, setPage] = useMultiState({
    totalPages: 0,
    currentPage: 0,
    totalItems: 10,
    pageSize: 10,
    species: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${SPECIES_SEARCH}?page=${page.currentPage}&size=${page.pageSize}`
      );
      const { totalPages, currentPage, totalItems, species } = result.data.data;

      setPage({
        totalPages,
        currentPage,
        totalItems,
        species
      });
    };

    fetchData();
  }, [page.currentPage]);

  const handleNextClick = () =>
    page.currentPage !== page.totalPages &&
    setPage({ currentPage: page.currentPage + 1 });

  const handlePrevClick = () =>
    page.currentPage !== 0 && setPage({ currentPage: page.currentPage - 1 });

  const handleFirstClick = () =>
    page.currentPage !== 0 && setPage({ currentPage: 0 });

  const handleLastClick = () =>
    page.currentPage !== page.totalPages &&
    setPage({ currentPage: page.totalPages });

  const handlePageChange = i =>
    page.currentPage !== i && setPage({ currentPage: i });

  const paginationProps = {
    totalPages: page.totalPages,
    currentPage: page.currentPage,
    handleNextClick,
    handlePrevClick,
    handleFirstClick,
    handleLastClick,
    handlePageChange
  };

  const isRenderSpecies = !!page.species.length;

  return isRenderSpecies ? (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Название вида</th>
            <th>Семейство</th>
            <th>Категория охраны</th>
            <th>Год</th>
            <th>Место сбора</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {page.species?.map(species => (
            <tr key={species.id}>
              {/* Название вида */}
              <td>
                <a href={species.name_link}>{species.name}</a>
              </td>
              {/* Семейство */}
              <td>{species.Family.name}</td>
              {/* Категория охраны */}
              <td>{species.GuardCategory.abbreviation}</td>
              {/* Год */}
              <td>
                <a href={species.year_gathering_place_link}>{species.year}</a>
              </td>
              {/* Место сбора */}
              <td>
                <a href={species.year_gathering_place_link}>
                  {species.gathering_place}
                </a>
              </td>
              {/* addition */}
              <td>
                <Link to={`species/${species.id}`}>
                  <Button variant="secondary">больше</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="pb-5">
        <PaginationContainer {...paginationProps} />
      </div>
    </>
  ) : (
    <h3>No data there</h3>
  );
};
