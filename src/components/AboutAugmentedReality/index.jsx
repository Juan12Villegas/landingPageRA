import React, { useState, useEffect } from 'react';
import Style from './aboutAugmentedRealityStyle.css';

export default function App() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Define el intervalo para cambiar la imagen cada 5 segundos
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
        }, 5000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
    }, []);

    const imageList = ["/images/plato1.png", "/images/plato2.jpg", "/images/plato3.jpg"];

    return (
        <div className='content-about px-[100px] mt-[50px]'>
            <div className='content-about-ra flex items-center justify-center'>
                <p className='title-visualizacion text-[24px] font-bold w-[25%]'>Visualización del MENÚ en Realidad Aumentada</p>
                <img
                    src={imageList[currentImageIndex]}
                    alt=""
                    className='w-[300px] image-product rotating-image hover:cursor-pointer hover:scale-150 transition delay-75'
                />
                <div className='content-info flex flex-col w-[25%] pl-[20px]'>
                    <p className='font-bold text-[16px]'>¿Cómo utilizar?</p>
                    <p className='text-[14px]'>Presiona el ícono ubicado sobre algún producto o categoría para visualizar en Realidad Aumentada.</p>
                </div>
            </div>

        </div>
    );
}
