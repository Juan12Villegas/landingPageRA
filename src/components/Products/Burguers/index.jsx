import React from "react";
import CardDishes from "../../CardDishes"

export default function App() {
    return (
        <div className="">
            <div className="content-product px-[100px] mt-[5px]">
                <p className="text-xl text-start font-bold mb-5">Hamburguesas</p>
                <div className="content-cards flex gap-4 overflow-x-auto">
                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/burguer_royal_doble.jpg"
                        nameProduct="Royal Doble"
                        infoProduct="hamburguesa con doble carne, queso, tomate y mucho sabor."
                        priceProduct="s/ 10.00"
                        descriptionProduct=""
                        nameTopping={["Personal", "+ Papas Fritas"]}
                    />

                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/burguer_simple.jpg"
                        nameProduct="La Clásica"
                        infoProduct="hamburguesa de carne, queso y tomate."
                        priceProduct="s/ 6.00"
                        descriptionProduct=""
                        nameTopping={["Personal", "+ Papas Fritas"]}
                    />

                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/burguer_extra_papas.jpg"
                        nameProduct="La Extra Papas"
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