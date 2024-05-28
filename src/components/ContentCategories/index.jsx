import React, { useState } from "react";
import styles from './contentCategoriesStyle.css';
import Categories from "../Categories";
import AllCategories from "../AllCategories";
import Favorites from "../../components/Products/Favorites";
import Burguers from "../../components/Products/Burguers";
import Sandwichs from "../../components/Products/Sandwichs";
import LQE from "../../components/Products/LQE";
import Chickens from "../../components/Products/Chickens";
import Breakfast from "../../components/Products/Breakfast";

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const renderCategoryContent = () => {
        switch (selectedCategory) {
            case 0:
                return <AllCategories />;
            case 1:
                return <Favorites />;
            case 2:
                return <Burguers />;
            case 3:
                return <LQE />;
            case 4:
                return <Breakfast />;
            case 5:
                return <Chickens />;
            case 6:
                return <Sandwichs />;
            default:
                return <AllCategories />;
        }
    };

    const getButtonClass = (category) => {
        return selectedCategory === category ? "border-4 border-[#facc15]" : "";
    };

    return (
        <div>
            <div className="content-categories overflow-x-hidden px-[100px] mt-[20px]">
                <div className="flex flex-col items-center mb-6">
                    <p className="text-xl text-center font-bold">Nuestras Categorías</p>
                    <div className="border-2 rounded-xl border-[#facc15] w-[150px]"></div>
                </div>

                <div className="flex justify-center h-auto whitespace-nowrap gap-4">
                    <div className="content-cards-categories gap-4">
                        <button
                            onClick={() => setSelectedCategory(0)}
                        >
                            <div className="min-w-[150px]">
                                <div className="flex flex-col h-auto">
                                    <div className="flex flex-col items-center relative">
                                        <div className="relative">
                                            <img src="/images/products/breakfast_coffe_two.jpg" alt="" className={`${getButtonClass(0)} image-categorie hover:scale-105 transition delay-75 h-[80px] min-w-[150px] max-w-[150px] rounded-[40px]`} />
                                        </div>
                                        <div className="">
                                            <p className="text-center font-semibold text-lg">Todas las Categorías</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => setSelectedCategory(1)}
                        >
                            <div className="min-w-[150px]">
                                <div className="flex flex-col h-auto">
                                    <div className="flex flex-col items-center relative">
                                        <div className="relative">
                                            <img src="/images/products/favorite_pasta.jpg" alt="" className={`${getButtonClass(1)} image-categorie hover:scale-105 transition delay-75 h-[80px] min-w-[150px] max-w-[150px] rounded-[40px]`} />
                                        </div>
                                        <div className="">
                                            <p className="text-center font-semibold text-lg">Los Favoritos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => setSelectedCategory(2)}
                        >
                            <div className="min-w-[150px]">
                                <div className="flex flex-col h-auto">
                                    <div className="flex flex-col items-center relative">
                                        <div className="relative">
                                            <img src="/images/products/burguer_extra_papas.jpg" alt="" className={`${getButtonClass(2)} image-categorie hover:scale-105 transition delay-75 h-[80px] min-w-[150px] max-w-[150px] rounded-[40px]`} />
                                        </div>
                                        <div className="">
                                            <p className="text-center font-semibold text-lg">Hamburguesas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => setSelectedCategory(3)}
                        >
                            <div className="min-w-[150px]">
                                <div className="flex flex-col h-auto">
                                    <div className="flex flex-col items-center relative">
                                        <div className="relative">
                                            <img src="/images/products/lqe_egg_rice.jpg" alt="" className={`${getButtonClass(3)} image-categorie hover:scale-105 transition delay-75 h-[80px] min-w-[150px] max-w-[150px] rounded-[40px]`} />
                                        </div>
                                        <div className="">
                                            <p className="text-center font-semibold text-lg">Lo que Esperabas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => setSelectedCategory(4)}
                        >
                            <div className="min-w-[150px]">
                                <div className="flex flex-col h-auto">
                                    <div className="flex flex-col items-center relative">
                                        <div className="relative">
                                            <img src="/images/products/breakfast_coffe.jpg" alt="" className={`${getButtonClass(4)} image-categorie hover:scale-105 transition delay-75 h-[80px] min-w-[150px] max-w-[150px] rounded-[40px]`} />
                                        </div>
                                        <div className="">
                                            <p className="text-center font-semibold text-lg">Para Disfrutar</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => setSelectedCategory(5)}
                        >
                            <div className="min-w-[150px]">
                                <div className="flex flex-col h-auto">
                                    <div className="flex flex-col items-center relative">
                                        <div className="relative">
                                            <img src="/images/products/chicken_wings.jpg" alt="" className={`${getButtonClass(5)} image-categorie hover:scale-105 transition delay-75 h-[80px] min-w-[150px] max-w-[150px] rounded-[40px]`} />
                                        </div>
                                        <div className="">
                                            <p className="text-center font-semibold text-lg">Pollo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => setSelectedCategory(6)}
                        >
                            <div className="min-w-[150px]">
                                <div className="flex flex-col h-auto">
                                    <div className="flex flex-col items-center relative">
                                        <div className="relative">
                                            <img src="/images/products/sandwich_chicken_classic.jpg" alt="" className={`${getButtonClass(6)} image-categorie hover:scale-105 transition delay-75 h-[80px] min-w-[150px] max-w-[150px] rounded-[40px]`} />
                                        </div>
                                        <div className="">
                                            <p className="text-center font-semibold text-lg">Sandwich</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div id="content-category-selected" className="mt-[45px]">
                {renderCategoryContent()}
            </div>
        </div>
    )
}
