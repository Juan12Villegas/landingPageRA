import React from "react";
import styles from './contentCategoriesStyle.css';
import Categories from "../Categories"

export default function App() {
    return (
        <div className="content-categories overflow-x-hidden px-[100px] ">
            <div className="flex flex-col items-center mb-6">
                <p className="text-xl text-center font-bold">Nuestras Categorías</p>
                <div className="border-2 rounded-xl border-yellow-400 w-[150px]"></div>
            </div>

            <div className="flex justify-center h-auto whitespace-nowrap">
                <div className="content-cards-categories gap-4">
                    <Categories
                        className="min-w-[200px] max-w-[200px]"
                        titleCategorie="Todas las Categorías"
                        iconCategorie="/images/products/breakfast_coffe_two.jpg"
                    />

                    <Categories
                        className="min-w-[150px] max-w-[150px]"
                        titleCategorie="Los Favoritos"
                        iconCategorie="/images/products/favorite_pasta.jpg"
                    />

                    <Categories
                        className="min-w-[150px] max-w-[150px]"
                        titleCategorie="Hamburguesas"
                        iconCategorie="/images/products/burguer_extra_papas.jpg"
                    />

                    <Categories
                        className="min-w-[150px] max-w-[150px]"
                        titleCategorie="Lo que Esperabas"
                        iconCategorie="/images/products/lqe_egg_rice.jpg"
                    />

                    <Categories
                        className="min-w-[150px] max-w-[150px]"
                        titleCategorie="Para Disfrutar"
                        iconCategorie="/images/products/breakfast_coffe.jpg"
                    />

                    <Categories
                        className="min-w-[150px] max-w-[150px]"
                        titleCategorie="Pollo"
                        iconCategorie="/images/products/chicken_wings.jpg"
                    />

                    <Categories
                        className="min-w-[150px] max-w-[150px]"
                        titleCategorie="Sandwich"
                        iconCategorie="/images/products/sandwich_chicken_classic.jpg"
                    />
                </div>
            </div>
        </div>
    )
}