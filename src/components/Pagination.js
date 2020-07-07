import React from 'react';

const Pagination = ({ pageCount, pageLimit, currentPage, handleClick }) => {
  let hasEllipses = false;
  const totalPages = pageCount / pageLimit;
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const pageItems = pageNumbers.map(pageNumber => {
    const activeClass = pageNumber === currentPage ? ' is-current' : '';
    if (
      pageNumber === 1 ||
      pageNumber === totalPages ||
      (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
    ) {
      return (
        <li key={pageNumber}>
          <a
            className={`pagination-link ${activeClass}`}
            onClick={() => {
              handleClick(pageNumber);
            }}
          >
            {pageNumber}
          </a>
        </li>
      );
    } else if (!hasEllipses) {
      hasEllipses = true;
      return (
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
      );
    }
  });
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a
        className="pagination-previous"
        disabled={currentPage === 1}
        onClick={() => {
          if (currentPage === 1) return;
          handleClick(currentPage - 1);
        }}
      >
        Previous
      </a>
      <a
        className="pagination-next"
        disabled={currentPage === totalPages}
        onClick={() => {
          if (currentPage === totalPages) return;
          handleClick(currentPage + 1);
        }}
      >
        Next page
      </a>
      <ul className="pagination-list">{pageCount > 0 && pageItems}</ul>
    </nav>
  );
};

export default Pagination;
