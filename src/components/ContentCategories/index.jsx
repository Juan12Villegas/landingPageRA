import React from "react";
import styles from './contentCategoriesStyle.css';
import Categories from "../Categories"

export default function App() {
    return (
        <div className="content-categories overflow-x-hidden px-[100px] mt-[50px]">
            <div className="flex flex-col items-center mb-6">
                <p className="text-xl text-center font-bold">Nuestras Categorías</p>
                <div className="border-2 rounded-xl border-yellow-400 w-[150px]"></div>
            </div>

            <div className="flex justify-center h-auto whitespace-nowrap">
                <div className="content-cards-categories gap-4">
                    <Categories
                        className="min-w-[200px] max-w-[200px]"
                        titleCategorie="Bebidas"
                        iconCategorie="/images/bebidas.jpg"
                    />

                    <Categories
                        className="min-w-[150px] max-w-[150px]"
                        titleCategorie="Entradas"
                        iconCategorie="/images/causa.jpg"
                    />

                    <Categories
                        className="min-w-[150px] max-w-[150px]"
                        titleCategorie="Sopas"
                        iconCategorie="/images/caldo-gallina.jpg"
                    />

                    <Categories
                        className="min-w-[150px] max-w-[150px]"
                        titleCategorie="Fondos"
                        iconCategorie="/images/lomo.jpg"
                    />

                    <Categories
                        className="min-w-[150px] max-w-[150px]"
                        titleCategorie="Ceviches"
                        iconCategorie="/images/ceviche.jpg"
                    />

                    <Categories
                        className="min-w-[150px] max-w-[150px]"
                        titleCategorie="Postres"
                        iconCategorie="/images/mazamorra.jpg"
                    />

                </div>
            </div>
        </div>
    )
}