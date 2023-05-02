import Layout from "../../components/layout";
import "flowbite";
import NewsCard from "../../components/newsCard";
import PageTitle from "../../components/title";
import ThemeButton from "../../components/themeButton";
export default function Technology() {
  return (
    <>
      <Layout>
        <div className="container mx-auto">
          <ThemeButton />
          <div className="mt-4 pt-4" style={{ clear: "both" }}></div>
          <PageTitle mainTitle={"Technology"}></PageTitle>
          <div className="flex items-center justify-between">
            <NewsCard />
          </div>
        </div>
      </Layout>
    </>
  );
}
