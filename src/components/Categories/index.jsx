import React from "react";
import styles from './categoriesStyle.css';

export default function App({ titleCategorie, iconCategorie }) {
    return (
        <div className="">
            <div className="">
                <div className="flex flex-col h-auto">
                    <div className="flex flex-col items-center relative">
                        <div className="relative">
                            <img src={iconCategorie} alt="" className="image-categorie hover:scale-105 transition delay-75 h-[80px] min-w-[150px] max-w-[150px] rounded-[40px]" />
                            <img className="icon-augmented absolute hover:cursor-pointer hover:scale-110 transition delay-75 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40px]" src="/images/icons/augmented-reality-white.svg" alt="" />
                        </div>
                        <div className="">
                            <p className="text-center w-[150px] font-bold text-lg">{titleCategorie}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}