"use client";
import Recommendations from "@/components/Recommendations";
import ContentCategories from "../../components/ContentCategories"
import Burguers from "../../components/Products/Burguers"
import Favorites from "../../components/Products/Favorites"
import Sandwichs from "../../components/Products/Sandwichs"
import LQE from "../../components/Products/LQE"
import Chickens from "../../components/Products/Chickens"
import Breakfast from "../../components/Products/Breakfast"
import '@park-ui/tailwind-plugin/preset.css';
import Layout from "../../components/Layout";

export default function ProviderRedux() {
  return (
    <div className="">
      {/* <div className='circle'></div> */}
      <Layout>
        <div className="mt-[100px]">
          <Recommendations />
          <ContentCategories />
          <Favorites />
          <Burguers />
          <LQE />
          <Breakfast />
          <Chickens />
          <Sandwichs />
        </div>
      </Layout>
    </div>
  );
}
