import React from "react";
import CardDishes from "../../CardDishes"
import styles from "../productsStyle.css"
export default function App() {
    return (
        <div className="">
            <div className="content-product px-[100px] mt-[50px]">
                <p className="text-xl text-start font-bold mb-5">Los Favoritos</p>
                <div className="content-cards flex gap-4 overflow-x-auto">
                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/favorite_pasta.jpg"
                        nameProduct="Pasta con Albóndigas"
                        infoProduct="porción de gelatina casera sabor Piña"
                        priceProduct="s/ 8.00"
                        descriptionProduct=""
                        nameTopping={["Grande"]}
                        nameFile="modelo_pasta.data.gz"
                    />

                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/favorite_chuleta.jpg"
                        nameProduct="Chuleta de Cerdo Frita"
                        infoProduct="porción de gelatina casera sabor Piña"
                        priceProduct="s/ 6.00"
                        descriptionProduct=""
                        nameTopping={["Grande"]}
                    />
                </div>
            </div>
        </div>
    )
}