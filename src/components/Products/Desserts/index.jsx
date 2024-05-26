import React from "react";
import CardDishes from "../../CardDishes"

export default function App() {
    return (
        <div className="">
            <div className="content-product px-[100px] mt-[50px]">
                <p className="text-xl text-start font-bold mb-5">Postres</p>
                <div className="content-cards flex gap-4 overflow-x-auto">
                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/dessert_gelatina.jpg"
                        nameProduct="Gelatina de Piña"
                        infoProduct="porción de gelatina casera sabor Piña"
                        priceProduct="s/ 4.00"
                        descriptionProduct="Ceviche de caballa"
                        nameTopping={["Grande"]}
                    />
                </div>
            </div>
        </div>
    )
}