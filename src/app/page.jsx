"use client";
import Main from "../components/Main"
import '@park-ui/tailwind-plugin/preset.css';
import Layout from "../components/Layout";

export default function ProviderRedux() {
  return (
    <div className="">
      {/* <div className='circle'></div> */}
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}
