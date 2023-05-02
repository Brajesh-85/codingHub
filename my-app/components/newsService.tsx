import React from "react";

const newsService = () => {
  return new Promise((resolve, reject) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=545fc6f2e2eb4bfa8508fcc2c80c3689`;
    fetch(url, {
      method: "get",
    })
      .then((response: any) => {
        if (response.status === 200 && response.articles) resolve(response);
        else {
          reject(response);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export default newsService;
