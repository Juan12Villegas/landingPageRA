"use client";
import { useEffect, useState } from "react";
import Main from "../components/Main";
import Load from "@/components/Load";
import '@park-ui/tailwind-plugin/preset.css';
import Layout from "../components/Layout";
import useScript from "../hooks/useScript"; // Asegúrate de importar el hook correctamente

export default function ProviderRedux() {
  const scriptLoaded = useScript("https://192.168.0.101:8080/Build/modelo_pasta.loader.js");

  if (!scriptLoaded) {
    return <Load />; // Puedes mostrar un spinner o mensaje de carga
  }

  return (
    <div className="">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}
