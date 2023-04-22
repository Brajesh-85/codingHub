import Layout from "../../components/layout";
import "flowbite";
import ThemButton from "../../components/themButton";
import NewsCard from "../../components/newsCard";
export default function Home() {
  return (
    <>
      <Layout>
        <div className="container mx-auto">
          <ThemButton />

          <div className="d-flex justify-between">
            <div className="width-50">
              <NewsCard />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
