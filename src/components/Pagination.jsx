import React, { useContext } from "react";
import { UserContext } from "../Utils/UserContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(UserContext);
  return (
    <div className="flex justify-center items-center w-full border fixed bottom-0 bg-white">
      <div className="flex justify-between items-center  py-3  max-w-[650px] w-full  ">
        <div className="flex gap-x-3">
          {page > 1 && (
            <button
              className="rounded-md border px-4 py-1"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="rounded-md border px-4 py-1"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p className="font-bold text-sm">
          Page {page} of {totalPages}{" "}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
