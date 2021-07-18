const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.onload = function () {
  const resp = JSON.parse(xhr.response);
};

xhr.send();
