"use client"; // Marcar el componente como un Client Component

import { useEffect, useState } from "react";
import Head from "next/head";

export default function Page({ params }) {
  console.log(params?.file);
  const [fileLocation, setFileLocation] = useState(params?.file);
  const [isClient, setIsClient] = useState(false);
  var infoNameProduct;
  if (params?.file == "modelo_pasta.data.gz") {
    infoNameProduct = "Pasta con Albóndigas";
  } else {
    infoNameProduct = "Sin definir";
  }

  useEffect(() => {
    const initializeUnity = () => {
      // Initialize IndexedDB for iOS 14.6 fix
      var db = indexedDB.open("dummy_indexdb", 1);

      // Configuration for Unity WebGL
      const buildUrl = "https://192.168.0.101:8080/";
      const loaderUrl = `${buildUrl}Build/modelo_pasta.loader.js`;
      const config = {
        dataUrl: `${buildUrl}Build/${fileLocation}`,
        frameworkUrl: `${buildUrl}Build/modelo_pasta.framework.js.gz`,
        codeUrl: `${buildUrl}Build/modelo_pasta.wasm.gz`,
        streamingAssetsUrl: `${buildUrl}StreamingAssets`,
        companyName: "proofProducts",
        productName: "proof_favorites",
        productVersion: "1.1",
        cacheControl: (url) => {
          if (url.match(/\.data/) || url.match(/\.bundle/) || url.match(/\.zpt/)) {
            return "must-revalidate";
          }
          if (url.match(/\.mp4/) || url.match(/\.custom/) || url.match(/\.zbin/)) {
            return "immutable";
          }
          return "no-store";
        },
      };

      const container = document.querySelector("#unity-container");
      const canvas = document.querySelector("#unity-canvas");
      const loadingCover = document.querySelector("#loading-cover");
      const progressBarEmpty = document.querySelector("#unity-progress-bar-empty");
      const progressBarFull = document.querySelector("#unity-progress-bar-full");
      const spinner = document.querySelector(".spinner");

      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        container.className = "unity-mobile";
        config.devicePixelRatio = window.devicePixelRatio;
      }
      loadingCover.style.display = "";

      // Cargar el script de Zappar y Unity
      const zapparScript = document.createElement("script");
      zapparScript.src = "https://libs.zappar.com/zappar-cv/2.1.7/zappar-cv.js";
      zapparScript.onload = () => {
        window.zappar = window.ZCV.initialize();

        const unityScript = document.createElement("script");
        unityScript.src = loaderUrl;
        unityScript.onload = () => {
          window.zappar.permission_request_ui_promise().then(WaitForZCVLoad);
        };
        document.body.appendChild(unityScript);
      };
      document.body.appendChild(zapparScript);

      function WaitForZCVLoad() {
        if (window.zappar.loaded()) {
          CreateUnityLoader();
          return;
        }
        setTimeout(WaitForZCVLoad, 500);
      }

      function CreateUnityLoader() {
        if (typeof createUnityInstance !== "undefined") {
          createUnityInstance(canvas, config, (progress) => {
            spinner.style.display = "none";
            progressBarEmpty.style.display = "";
            progressBarFull.style.width = `${100 * progress}%`;
          }).then((unityInstance) => {
            loadingCover.style.display = "none";
            window.uarGameInstance = unityInstance;
          }).catch((message) => {
            alert(message);
          });
        } else {
          console.error("createUnityInstance is not defined");
        }
      }
    };

    // Inicializar Unity
    initializeUnity();
  }, []);

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <link rel="shortcut icon" href="favicon.ico" />
        <title>ProofZapper2</title>
      </Head>
      <div id="unity-container" className="unity-desktop">
        <div id="content-info">
          <div id="info">
            <p>{infoNameProduct}</p>
          </div>
        </div>
        <div>
          <canvas id="unity-canvas">
          </canvas>
        </div>

      </div>
      <div id="loading-cover" style={{ display: "none" }}>
        <div id="unity-loading-bar">
          <div id="unity-progress-bar-empty" style={{ display: "none" }}>
            <div id="unity-progress-bar-full"></div>
          </div>
          <div className="spinner"></div>
        </div>
      </div>
      <style jsx>{`
        html {
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        html,
        body {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        canvas {
          display: block;
        }

        body {
          margin: 0;
        }

        #unity-container {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 1;
        }

        #content-info {
          margin-top: 20px;
        }

        #info {
          background-color: white;
          padding: 10px 20px;
          position: absolute;
          z-index: 3;
        }

        #unity-canvas {
          width: 100%;
          height: 100%;
          background: #231f20;
          position: absolute;
          z-index: 2;
        }

        @media (max-width: 768px) {
          #unity-canvas {
            width: 100%;
            height: 645px;
            background: #231f20;
          }
      }

        #loading-cover {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #unity-loading-bar {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        #unity-progress-bar-empty {
          width: 80%;
          height: 24px;
          margin: 10px 20px 20px 10px;
          text-align: left;
          border: 1px solid white;
          padding: 2px;
        }

        #unity-progress-bar-full {
          width: 0%;
          height: 100%;
          background: white;
        }

        .light #unity-progress-bar-empty {
          border-color: black;
        }

        .light #unity-progress-bar-full {
          background: black;
        }

        .spinner,
        .spinner:after {
          border-radius: 50%;
          width: 5em;
          height: 5em;
        }

        .spinner {
          margin: 10px;
          font-size: 10px;
          position: relative;
          text-indent: -9999em;
          border-top: 1.1em solid rgba(255, 255, 255, 0.2);
          border-right: 1.1em solid rgba(255, 255, 255, 0.2);
          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
          border-left: 1.1em solid #ffffff;
          transform: translateZ(0);
          animation: spinner-spin 1.1s infinite linear;
        }

        @keyframes spinner-spin {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};