export default function newsService() {
  return new Promise((resolve, reject) => {
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=545fc6f2e2eb4bfa8508fcc2c80c3689`;

    fetch(url, {
      method: "get",
    })
      .then((response) => {
        if (response?.status === "ok" && response?.articles) resolve(response);
        else {
          reject(response);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
