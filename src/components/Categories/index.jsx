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
                        </div>
                        <div className="">
                            <p className="text-center font-bold text-lg">{titleCategorie}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}