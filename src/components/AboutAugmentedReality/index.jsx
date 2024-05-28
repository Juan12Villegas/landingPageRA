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

    const imageList = ["/images/imag1.png", "/images/imag2.png", "/images/imag3.png"];

    return (
        <div className='content-about px-[100px] mt-[50px]'>
            <div className='content-about-ra flex items-center justify-center'>
                <p className='title-visualizacion text-[30px] leading-9 font-bold w-[30%]'>Hechas a la perfección para los paladares más exigentes.</p>
                <img
                    src={imageList[currentImageIndex]}
                    alt=""
                    className='w-[300px] image-product py-2 rotating-image hover:cursor-pointer hover:scale-150 transition delay-75'
                />
                <div className='content-info flex flex-col w-[25%] pl-[20px]'>
                    <p className='text-[14px] text-justify'>Disfruta de una variedad de platillos exquisitos, preparados con los mejores ingredientes para ofrecer una experiencia de sabor inigualable.</p>
                </div>
            </div>

        </div>
    );
}
