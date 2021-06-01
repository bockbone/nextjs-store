import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/HomepageComponent/Carousel";
import ProductFeed from "../components/HomepageComponent/ProductFeed";
import Trends from "../components/HomepageComponent/Trends";
import productData from "../data/productData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clothing Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-xl mx-auto">
        <div>
          <Header />
        </div>
        <main className="">
          <Carousel />
          <ProductFeed productData={productData} />
          <Trends />
        </main>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
