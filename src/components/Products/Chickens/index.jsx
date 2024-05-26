import React from "react";
import CardDishes from "../../CardDishes"

export default function App() {
    return (
        <div className="">
            <div className="content-product px-[100px] mt-[5px]">
                <p className="text-xl text-start font-bold mb-5">Pollo</p>
                <div className="content-cards flex gap-4 overflow-x-auto">
                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/chicken_chicken_potatoes.jpg"
                        nameProduct="Nuggets de Pollo + Papas"
                        infoProduct="porción de gelatina casera sabor Piña"
                        priceProduct="s/ 8.00"
                        descriptionProduct=""
                        nameTopping={["Grande"]}
                    />

                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/chicken_wings.jpg"
                        nameProduct="Alitas de Pollo"
                        infoProduct="porción de gelatina casera sabor Piña"
                        priceProduct="s/ 8.00"
                        descriptionProduct=""
                        nameTopping={["Grande"]}
                    />
                </div>
            </div>
        </div>
    )
}