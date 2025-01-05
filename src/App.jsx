import React, { useContext, useEffect } from 'react'
import Pagination from './components/Pagination'
import Header from './components/Header'
import Blogs from './components/Blogs'
import { UserContext } from './Utils/UserContext'

const App = () => {
  const {fetchBlogPosts} = useContext(UserContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[])
  return (
    < >
      <Header/>
      <Blogs/>
      <Pagination/>
    </>
  )
}

export default App