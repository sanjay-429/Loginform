import React, { useEffect, useState } from "react";
import fire from "./fire";

const Data = () => {
  const [post, setPost] = useState([]);
  const db = fire.firestore();
  useEffect(() => {
    db.collection("database").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data));
    });
  });
  return (
    <>
      <input type="file" />
      <button> Add</button>
      {post.map((vari) => (
        <div>
          <h4>{vari.name}</h4>
          <h4>{vari.add}</h4>
          <h4>{vari.education}</h4>
        </div>
      ))}
    </>
  );
};

export default Data;
