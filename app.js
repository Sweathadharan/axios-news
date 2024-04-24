
const apiKey = '41432bdc2fbdb096f31723a91ca6312b';

function fetch() {
  const url = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=${apiKey}`;
  return axios.get(url)
    .then(function(response) { 
      console.log(response.data);
      return response.data.articles;
    })
    .catch(function(error) {
      console.error('Error fetching news:', error);
      
    });
}

function display(articles) {
  const Container = document.getElementById('container');
  articles.forEach((article, index) => {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');
    articleDiv.innerHTML = `
      <h3>${index + 1}. ${article.title}</h3>
      ${article.urlToImage ? `<img src="${article.urlToImage}" alt="Image">` : 'No image in artice'}
      <p>${article.description}</p> 
    `;
    Container.appendChild(articleDiv);
  });
}


  fetch()
    .then(function(articles) {
            display(articles);
    })
    .catch(function(error) {
      console.error('Error:', error);
    });



