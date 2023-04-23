import Layout from "../../components/layout";
import "flowbite";
import NewsCard from "../../components/newsCard";
import ThemeButton from "../../components/themeButton";
export default function Home() {
  return (
    <>
      <Layout>
        <div className="container mx-auto">
          <ThemeButton />
          <div className="flex items-center justify-between">
            <NewsCard />
          </div>
        </div>
      </Layout>
    </>
  );
}
