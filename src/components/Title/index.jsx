import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
/* import { useRouter } from 'next/router'; */
import styles from './titleStyle.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Title() {

    const router = useRouter();

    const goToMenu = () => {
        router.push('/menu');
    };

    const menuItems = ["Inicio", "Sobre nosotros", "Categorías", "Recomendaciones"];

    const [selectedNavItem, setSelectedNavItem] = React.useState(menuItems[0]);

    const handleNavItemSelect = (item) => {
        router.push("/")
        setSelectedNavItem(item);
    };

    return (
        <div className="content-title h-auto text-left px-[100px] py-[50px] flex gap-20 justify-center items-center">
            <div className='content-text'>
                <div className='content-text-title mb-6'>
                    <p className='phrase text-[40px] font-bold leading-10 mb-1 px-4'> Sabores auténticos </p>
                    <p className='phrase text-[40px] font-bold leading-10 mb-1 bg-[#facc15] w-[490px] py-2 px-4 rounded-3xl'>momentos inolvidables </p>
                    <p className='text-[16px] px-4 font-semibold'>Creando experiencias desde 2009</p>
                </div>

                <div className='px-4'>
                    <button className='bg-[#fc381c] text-white font-bold animate-bounce p-2 rounded-lg'
                        onClick={goToMenu}>Visualizar Carta</button>
                </div>
            </div>
            <div className='contentImage'>
                <img className='' src="/images/burguer.png" alt="Imagen" />
            </div>
        </div>
    );
}
