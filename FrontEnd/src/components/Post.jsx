import React, { useEffect, useState } from "react";
import { getPosts, createPost, delPost, likeIt, likeDel } from "./PostService.js";
import "./Post.css";
import axios from "axios";

function Post() {
  const [myData, setMyData] = useState([]);
  const [text, setText] = useState("");
  const [likes, setLikes] = useState(null);
  const [renderer, setRenderer] = useState(false);

  const plusLike = async (id) => {
    const myLike = await likeIt(id);
    setLikes(myLike);
  };
  const minusLike = async (id) => {
    const myLike = await likeDel(id);
    setRenderer(!renderer);
  };
  const erasePost = async (id) => {
    await delPost(id);
    setRenderer(!renderer);
  };

  const newPost = async (text) => {
    await createPost(text);
    setRenderer(!renderer);

    return ''
  };

  useEffect(() => {getPosts().then((result) => {setMyData(result);});}, [likes, renderer]);

  return (
    <> <h1>Наши посты</h1>
      {myData.map((post) => {
        return (
          <div className="posts" key={post.id}>
            <div>номер поста --- {post.id}</div>
            <div>дата поста --- {post.date}</div>
            <div>текст поста --- {post.text}</div>

            <div className="likes">
              <button type="button" value={post.id} onClick={(e) => {
                  erasePost(e.target.value);}}> Delete </button>
              <button type="button" value={post.id} onClick={(e) => {
                  plusLike(e.target.value);}}> Плюс </button>
              <div>Likes :{post.likes_count}</div>
              <button type="button" value={post.id} onClick={(e) => {
                  minusLike(e.target.value);}}> Минус </button>
            </div>
          </div>
        );
      })}

      <div className="new-post">
        <h2>Новый пост</h2>
        <form>
          <textarea type="text" id="textInput" value={text} onChange={(e) => setText(e.target.value)}></textarea>
          <button type="button" onClick={() => { newPost(text); }}> Create </button>
        </form>
      </div>
    </>
  );
};

export default Post;
