import axios from "axios";

const hostUrl = "http://localhost:8000/";

async function getPosts() {
  const url = `${hostUrl}api/posts`;
  return await axios.get(url).then((response) => {
    return response.data;
  });
};

async function createPost(text) {
  const url = `${hostUrl}api/posts/create`;
  if (text) {
    return await axios
      .post(url, { text: text, likes_count: 0 }).then((result) => {result});
  } else {
    console.log("Напиши текст поста, пустой пост противозаконен");
  }
};

async function delPost(id) {
  const url = `${hostUrl}api/posts/delete/${id}`;
  return await axios.delete(url).then((result) => {result});
};

async function likeIt(id) {
  const url = `${hostUrl}api/posts/update/${id}`;
  const likes = await axios
    .get(`${hostUrl}api/posts/${id}`)
    .then((res) => res.data.likes_count);

  return await axios
    .patch(url, { likes_count: likes + 1 })
    .then((res) => res.data.likes_count);
};

async function likeDel(id) {
  const url = `${hostUrl}api/posts/update/${id}`;
  const likes = await axios
    .get(`${hostUrl}api/posts/${id}`)
    .then((res) => res.data.likes_count);
  return await axios
    .patch(url, { likes_count: likes - 1 })
    .then((res) => res.data.likes_count);
};

export { getPosts, createPost, delPost, likeIt, likeDel };