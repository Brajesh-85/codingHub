
const newsService = () => {
  return new Promise((resolve, reject) => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=545fc6f2e2eb4bfa8508fcc2c80c3689`;
    fetch(url, {
      method: "GET"
      
    })
      .then(async(response: any) => {
        //console.log(response, response.status === 200)
        let data = await response.json();
        if (data.status === "ok" && data.articles) resolve(data);  
        else {
          reject(data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export default newsService;
