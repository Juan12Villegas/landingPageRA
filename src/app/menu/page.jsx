"use client";
import React, { useEffect } from 'react';
import Recommendations from "@/components/Recommendations";
import ContentCategories from "../../components/ContentCategories";
import '@park-ui/tailwind-plugin/preset.css';
import Layout from "../../components/Layout";

export default function Page() {
  useEffect(() => {
    // Verificar si la página ha sido recargada
    const isReloaded = sessionStorage.getItem('isReloaded');
    console.log("Estado de reload: " + isReloaded);
    // Si la página no ha sido recargada, marcarla como recargada y recargar la página
    if (isReloaded == "false") {
      window.location.reload();
      console.log("RECARGAR PÁGINA");
      sessionStorage.setItem('isReloaded', 'true');
    }
  }, []);

  return (
    <div className="">
      <Layout>
        <div className="mt-[100px]">
          <Recommendations />
          <ContentCategories />
        </div>
      </Layout>
    </div>
  );
}
