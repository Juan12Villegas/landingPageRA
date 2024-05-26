import React, { useState, useEffect } from 'react';
import Style from './aboutStyle.css';

export default function App() {
    return (
        <div className='content-about px-[100px]'>
            <div className="text-center mb-6">
                <p className='text-[#fc381c] text-[16px] font-semibold'>Sobre Nosotros</p>
                <p className='text-[30px] font-bold'>El lugar perfecto para una experiencia excepcional</p>
            </div>
            <div className='images-about flex items-center justify-center gap-8 mt-4'>
                <div className='flex gap-4'>
                    <img src="/images/chef.jpg" alt="" className='image-border bb' />
                    <img src="/images/comida.jpg" alt="" className='image-border animacion-borde' />
                </div>
                <div className='info-about w-[50%] text-justify'>
                    <p className='text-[14px]'>Hakuna Matata con 15 años de excelencia gastronómica. Déjate llevar por una experiencia gastronómica única en nuestra encantadora hamburguesería, donde la calidad y la creatividad se encuentran en cada plato y cada bebida.</p>

                    <div className='flex flex-col gap-3 mt-3'>
                        <div className='flex items-center gap-3'>
                            <div className='border-circle'></div>
                            <div className='w-[80%]'>
                                <p className='font-bold text-[18px]'>Atención 24/7</p>
                                <p className='text-[14px]'>Somos los únicos en la ciudad de Paita en atenderte durante toda la madrugada.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='border-circle'></div>
                            <div className='w-[80%]'>
                                <p className='font-bold text-[18px]'>Sazón inigualable</p>
                                <p className='text-[14px]'>Ven y vive una experiencia gastronómica única que perdura desde hace una década y media.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
