import React from "react";
import CardDishes from "../CardDishes";
import styles from './recommendationsStyle.css';

export default function Recommendations() {
    return (
        <div className="content-recommendations overflow-x-hidden px-[100px] mt-[50px]">
            <div className="flex flex-col items-center mb-6">
                <p className="text-xl text-center font-bold">Recomendaciones del Chef</p>
                <div className="border-2 rounded-xl border-yellow-400 w-[150px]"></div>
            </div>
            <div className="content-cards flex gap-4 overflow-x-auto">
                <CardDishes
                    className=""
                    imageProduct="/images/products/lqe_egg_rice.jpg"
                    nameProduct="Arroz Tapado + Huevo Frito"
                    infoProduct="porción de arroz con huevo frito y ensalada"
                    priceProduct="s/ 10.00"
                    descriptionProduct=""
                    nameTopping={["Personal"]}
                    nameFile="model_rice_egg.data.gz"
                />
                <CardDishes
                    className=""
                    imageProduct="/images/products/lqe_chicken_rice.jpg"
                    nameProduct="Muslo de Pollo + Arroz"
                    infoProduct="porción de arroz con muslo de pollo hornado y ensalada"
                    priceProduct="s/ 14.00"
                    descriptionProduct=""
                    nameTopping={["Personal"]}
                    nameFile="model_chicken_rice.data.gz"
                />
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
            </div>
        </div>
    );
}
