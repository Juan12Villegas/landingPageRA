import React from "react";
import CardDishes from "../../CardDishes"

export default function App() {
    return (
        <div className="">
            <div className="content-product px-[100px] mt-[5px]">
                <p className="text-xl text-start font-bold mb-5">Para Disfrutar</p>
                <div className="content-cards flex gap-4 overflow-x-auto">
                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/breakfast_combinado.jpg"
                        nameProduct="Combinado Taypá"
                        infoProduct="porción de gelatina casera sabor Piña"
                        priceProduct="s/ 8.00"
                        descriptionProduct=""
                        nameTopping={["Grande"]}
                    />

                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/breakfast_coffe.jpg"
                        nameProduct="Café"
                        infoProduct="porción de gelatina casera sabor Piña"
                        priceProduct="s/ 8.00"
                        descriptionProduct=""
                        nameTopping={["Grande"]}
                    />

                    <CardDishes
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/products/breakfast_coffe_two.jpg"
                        nameProduct="Para Compartir"
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