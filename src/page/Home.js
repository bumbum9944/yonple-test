import { React, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import PostList from "components/PostList/PostList";
import SearchBar from "components/SearchBar/SearchBar";
import { baseUrl } from "baseUrl";

function Home() {
  const [searchWord, setSearchWord] = useState('');
  const [ref, inView] = useInView({threshold: 0.6});
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const getPost = useCallback(async () => {
    try {
      setLoading(true);
      await axios.get(baseUrl + `?page=${page}&search=${searchWord}`)
      .then(response => {
        setPost(prevState => [...prevState, ...response.data]);
      })
      setTimeout(()=>{
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.log(err.message);
    }
  }, [page, searchWord])

  useEffect(() => {
    getPost();
  }, [getPost]);

  useEffect(() => {
    if (inView && !loading) {
      setPage(prevState => prevState + 1)
    }
  }, [inView, loading]);

  return(
    <div className="home">
      <SearchBar 
        searchWord={searchWord} 
        setPost={setPost}
        setSearchWord={setSearchWord} 
        setPage={setPage}
      />
      <PostList post={post} />
      <div className="end" ref={ref}></div>  
    </div>
  );
}

export default Home;