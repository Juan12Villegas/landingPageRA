import React from "react";
import CardDishes from "../../CardDishes"

export default function App() {
    return (
        <div className="">
            <div className="content-product px-[100px] mt-[5px]">
                <p className="text-xl text-start font-bold mb-5">Sandwichs</p>
                <div className="content-cards flex gap-4 overflow-x-auto ">
                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/sandwich_papas.jpg"
                        nameProduct="Sandwich Edición Papas"
                        infoProduct="porción de gelatina casera sabor Piña"
                        priceProduct="s/ 8.00"
                        descriptionProduct=""
                        nameTopping={["Grande"]}
                        nameFile={''}
                    />

                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/sandwich_chicken_classic.jpg"
                        nameProduct="Sandwich Clásico"
                        infoProduct="sandwich a base de pan tostado mas carne y verduras"
                        priceProduct="s/ 8.00"
                        descriptionProduct=""
                        nameTopping={["Personal"]}
                        nameFile="model_sandwich.data.gz"
                    />
                </div>
            </div>
        </div>
    )
}