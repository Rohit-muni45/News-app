import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cate.css'

const News = ({ category, country }) => {
  const [articles, setArticles] = useState([]);

  //useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fdd523f86487479a827c6df96d8bb999&pageSize=90`);
    // console.log(response)
    // const response = await axios({
    //   url: "https://newsapi.org/v2/top-headlines",
    //   method: "GET",
    //   params: {
    //     category: `${category}`,
    //     country: `${country}`,
    //     apiKey: "fdd523f86487479a827c6df96d8bb999",
    //     pageSize: 90
    //   }
    // })
    //console.log(response)
    setArticles(response.data.articles);
  };

  useEffect(() => {
    fetchData();
  }, [category, country]);



  return (
    <div>
      <h2>{category} News ({country}) </h2>

    
        <div className='cont'>
          {articles.map((article, index) => (
            <div className='box' key={index}>
              <a href={article.url} target='blank'><img src={article.urlToImage} alt={article.title} /></a>
              <h4>{article.title}</h4>
            </div>
          ))}
        </div>
    </div>
  );
};

export default News;
