import React from "react";
import CardDishes from "../../CardDishes"
import styles from "../productsStyle.css"
export default function App() {
    return (
        <div className="">
            <div className="content-product px-[100px] mt-[5px]">
                <p className="text-xl text-start font-bold mb-5">Los Favoritos</p>
                <div className="content-cards flex gap-4 overflow-x-auto">
                    <CardDishes
                        className=""
                        imageProduct="/images/products/favorite_pasta.jpg"
                        nameProduct="Pasta con Albóndigas"
                        infoProduct="tallarin en salsa de tomate con deliciosas albóndigas."
                        priceProduct="s/ 15.00"
                        descriptionProduct=""
                        nameTopping={["Personal"]}
                        nameFile="modelo_pasta.data.gz"
                    />

                    <CardDishes
                        className=""
                        imageProduct="/images/products/favorite_chuleta.jpg"
                        nameProduct="Chuleta de Cerdo Frita"
                        infoProduct="cortes de chuleta de cerdo fritas y condimentadas."
                        priceProduct="s/ 20.00"
                        descriptionProduct=""
                        nameTopping={["Grande"]}
                    />
                </div>
            </div>
        </div>
    )
}