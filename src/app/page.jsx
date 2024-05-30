// pages/providerRedux.js
"use client";
import Main from "../components/Main";
import Load from "@/components/Load";
import '@park-ui/tailwind-plugin/preset.css';
import Layout from "../components/Layout";
import useScript from "../hooks/useScript";

export default function ProviderRedux() {
  const { loaded, error } = useScript("https://10.40.192.255:8080/Build/Build.loader.js");

  if (error) {
    return <div>Error loading script.</div>;
  }

  if (!loaded) {
    return <Load />; // Mostrar un spinner o mensaje de carga
  }

  return (
    <div className="">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}
