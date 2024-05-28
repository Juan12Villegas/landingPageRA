import React from "react";
import CardDishes from "../../CardDishes"

export default function App() {
    return (
        <div className="">
            <div className="content-product px-[100px] mt-[5px]">
                <p className="text-xl text-start font-bold mb-5">Lo que Esperabas</p>
                <div className="content-cards flex gap-4 overflow-x-auto">
                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/lqe_egg_rice.jpg"
                        nameProduct="Arroz Tapado + Huevo Frito"
                        infoProduct="porción de arroz con huevo frito y ensalada"
                        priceProduct="s/ 10.00"
                        descriptionProduct=""
                        nameTopping={["Personal"]}
                        nameFile="model_rice_egg.data.gz"
                    />
                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/lqe_chicken_rice.jpg"
                        nameProduct="Muslo de Pollo + Arroz"
                        infoProduct="porción de arroz con muslo de pollo hornado y ensalada"
                        priceProduct="s/ 14.00"
                        descriptionProduct=""
                        nameTopping={["Personal"]}
                        nameFile="model_chicken_rice.data.gz"
                    />
                </div>
            </div>
        </div>
    )
}