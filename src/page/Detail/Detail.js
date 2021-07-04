import { React, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import "./Detail.css";
import { baseUrl } from "baseUrl";
import axios from "axios";


function Detail() {
  const [postItem, setPostItem] = useState('');
  const location = useLocation();
  const history = useHistory();
  const postId = location.state.postId; 
  useEffect(async ()=>{
    try {
      await axios.get(baseUrl + `/${postId}`)
      .then(response=>{
        setPostItem(response.data);
      })
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  function goBack() {
    history.goBack();
  }
  return(
    <div className="detail" >
      <div className="detail-wrap">
        <div className="detail-title">{postItem.title}</div>
        <div className="detail-content">{postItem.content}</div>
      </div>
      <button onClick={goBack}>뒤로가기</button>
    </div>
  );
}

export default Detail;