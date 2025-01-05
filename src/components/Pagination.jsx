import React, { useContext } from 'react'
import { UserContext } from '../Utils/UserContext'

const Pagination = () => {
  const {page,handlePageChange,totalPages}=useContext(UserContext);
  return (
    <div>
      <div>
        {
          page>1 &&
          <button onClick={()=>handlePageChange(page-1)}>Previous</button>
        }
        {
          page < totalPages &&
          <button onClick={()=>handlePageChange(page+1)}>Next</button>
        }
        <p>Page {page} of {totalPages} </p>
      </div>
    </div>
  )
}

export default Pagination