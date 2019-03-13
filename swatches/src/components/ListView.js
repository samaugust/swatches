import React from "react";
import Pagebar from "./Pagebar";

const ListView = ({ swatches, changeCurrentPage, pages, currentPage }) => {
  return (
    <div className="list-view-wrapper">
      {swatches}

      <Pagebar
        currentPage={currentPage}
        pages={pages}
        changeCurrentPage={changeCurrentPage}
      />
    </div>
  );
};

export default ListView;
