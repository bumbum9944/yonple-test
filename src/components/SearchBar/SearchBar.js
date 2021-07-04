import {React, useRef} from "react";
import "./SearchBar.css";
import {BsSearch} from "react-icons/bs"

function SearchBar({searchWord, setSearchWord, setPost, setPage,}) {
  const inputElement = useRef();

  async function handleChange(e) {
    const word = e.target.value;
    await setSearchWord(word);
    await setPage(0);
    await setPost([]);
  }

  function handleClick() {
    inputElement.current.focus();
  }

  return(
    <div className="search-bar">
      <div>
        <div className="search-bar-wrap" onClick={handleClick}>
          <BsSearch 
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5vw",
              marginRight: "0.5vw"
            }}
          />
          <input 
            className="search-bar-input" 
            value={searchWord}
            placeholder="검색어를 입력하세요" 
            onChange={handleChange} 
            ref={inputElement}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;