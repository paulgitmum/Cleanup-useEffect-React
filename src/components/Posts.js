import React from "react";

function Posts({ posts }) {
  return (
    <div>
      {posts.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
