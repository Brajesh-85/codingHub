"use client";
import React, { useState, useEffect } from "react";
import NewsListing from "./newsService";
//import Image from "next/image";

const NewsCard = () => {
  const [loadNews, setLoadNews] = useState([] as any);

  const newsResults = async () => {
    const getList: any = await NewsListing();
    if (getList?.articles) {
      setLoadNews(getList.articles);
    } else {
      setLoadNews(false);
      console.log("No data found");
    }
  }

  useEffect(() => {
    newsResults();
  }, []);

  return (
    <>
      {loadNews?.length > 0 &&
        loadNews?.map((item: any, index: any) => {
          return (
            <div
              className="max-w-xs mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <a  href={item.url}>
                <img
                  className="rounded-t-lg"
                  src={
                    !item.urlToImage
                      ? "https://images.pushsquare.com/1bda602255092/1280x720.jpg"
                      : item.urlToImage
                  }
                  alt="cardImage"
                  style={{width:"100%"}}
                 
                />
              </a>
              <div className="p-5">
                <a  href={item.url}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 Read More
                </a>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default NewsCard;
