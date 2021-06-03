import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="max-w-screen-mediumlg mx-auto">
          <Header />
        </div>
        <div className="max-w-screen-xl mx-auto my-40">
          <h1 className="font-mainFont text-3xl font-black uppercase text-center">
            This page is not yet defined!
          </h1>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
