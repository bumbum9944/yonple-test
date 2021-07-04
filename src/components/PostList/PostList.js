import { React } from "react";
import { useHistory } from "react-router";
import "./PostList.css";

function PostList({post}) {

  const history = useHistory();

  function pushToDetail(postId) {
    history.push({
      pathname: "/detail",
      state: {
        postId: postId
      }
    });
  }

  return(
    <div className="post-list">
      <div className="post-wrap">
        {post.map((element, index) => {
          return (
            <div className="post-item" 
              key={index}
              onClick={()=>{
                pushToDetail(element.id);
              }}
            >
              <div className="post-item-wrap">
                <div className="post-item-title">
                  <span className="post-item-number">{element.id}. </span>
                  <span>{element.title}</span>
                </div>
                <div
                  className="post-content"
                >
                  {element.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

}

export default PostList;