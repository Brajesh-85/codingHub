import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import "flowbite";
import NewsCard from "../../components/newsCard";
import PageTitle from "../../components/title";
import ThemeButton from "../../components/themeButton";
import Loader from "../../components/loader";

export default function Home() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
   setTimeout(() => setIsLoading(false), 1000);
  },[])

  return (
    <>
      <Layout>
        <div className="container mx-auto">
          <ThemeButton />
          <div className="mt-4 pt-4" style={{ clear: "both" }}></div>
          <PageTitle mainTitle={"All types of News"}></PageTitle>
          <div className="flex flex-wrap justify-between">
            {isloading ? (
        <Loader/>
      ) : (
        <NewsCard />
      ) } 
          </div>
        </div>
      </Layout>
    </>
  );
}
