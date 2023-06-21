import type { NextPage } from "next";
import Head from "next/head";
import Header from "../src/components/Layout/Header";
import Hero from "../src/components/Hero";
import Vendors from "../src/components/Vendors";
import ManageEvents from '../src/components/ManageEvents';
import Testimonials from '../src/components/Testimonials';
import Contact from '../src/components/Contact';
import AppsLink from '../src/components/AppsLink';

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Event Management Client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="absolute -top-10 -left-10 h-96 w-96 bg-orange-200 opacity-20 rounded-full z-10  blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-sky-200 opacity-20 rounded-full z-10  blur-3xl"></div> */}
      <div className="z-50">
        <div className="h-screen flex flex-col">
          {/* <Header /> */}
          <Hero />
        </div>
        <ManageEvents />
        <Vendors />
        <Testimonials />
        <Contact />
        <AppsLink />
        {/* <Categories />
        <Features />
        <Testimonials />
        <Contact />
        <AppsLink /> */}
      </div>
    </div>
  );
};

export default Home;
