import { useState } from "react";
import { actionOfEvents } from "../storedata/checkedbox/checkedbox";
import { useDispatch } from "react-redux";
export const Pagination = ({ data, RenderComponent, dataLimit }) => {
  const pages = Math.ceil(data.length / dataLimit);
  let [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    if (document.querySelector("#filter").value !== "") {
      if (pages < currentPage) {
        const startIndexa = pages * dataLimit - dataLimit;
        const endIndexa = startIndexa + dataLimit;
        return data.slice(startIndexa, endIndexa);
      }
    }
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    if (document.querySelector("#filter").value !== "") {
      let start = Math.floor((currentPage - 1) / pages) * pages;
      if (pages < currentPage) {
        start = Math.floor((pages - 1) / pages) * pages;
      }
      return new Array(pages).fill().map((_, idx) => start + idx + 1);
    }
    let start = Math.floor((currentPage - 1) / pages) * pages;
    return new Array(pages).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <div
        onClick={(event) => dispatch(actionOfEvents(event, data))}
        className="dataContainer"
      >
        <RenderComponent data={getPaginatedData()} />
      </div>
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
};
