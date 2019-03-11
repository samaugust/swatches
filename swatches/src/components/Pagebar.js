import React, { Component } from "react";

const Pagebar = ({ pages, currentPage, changeCurrentPage }) => {
  const pageNumbers = pages.map((page, i) => {
    return (
      <a
        className={`page-number ${currentPage === i + 1 ? "selected" : ""}`}
        onClick={() => changeCurrentPage(i + 1)}
      >
        &nbsp; {i + 1} &nbsp;
      </a>
    );
  });
  return <div className="pagebar-wrapper">{pageNumbers}</div>;
};

export default Pagebar;
