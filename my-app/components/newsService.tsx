
const newsService = () => {
  return new Promise((resolve, reject) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=545fc6f2e2eb4bfa8508fcc2c80c3689`;
    fetch(url, {
      method: "GET"
      
    })
      .then((response: any) => {
        console.log(response, response.status === 200)
        let data = response.json();
        console.log(data);
        if (response.status === 200) resolve(response);
        
       // else {
         // reject(response);
        //}
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export default newsService;
