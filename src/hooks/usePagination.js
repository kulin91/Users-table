import { useState } from 'react';

const ITEMS_PER_PAGE = 20;

export default function usePagination(itemsAmount) {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPages = Math.floor(itemsAmount / ITEMS_PER_PAGE);
  const isNextVisible = currentPage < maxPages;
  const isPrevVisible = currentPage > 1;
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;
  const limit = currentPage * ITEMS_PER_PAGE;

  const nextPage = () => {
    if (currentPage === maxPages) {
      return;
    }

    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) {
      return;
    }

    setCurrentPage(currentPage - 1);
  };

  return {
    isNextVisible,
    isPrevVisible,
    nextPage,
    prevPage,
    skip,
    limit,
  };
}
