import React, { useState, useEffect } from 'react';
import Style from './aboutStyle.css';

export default function App() {
    return (
        <div className='content-about px-[100px]'>
            <div className="text-center mb-6">
                <p className='text-[#ee274b] font-semibold'>Sobre el restaurant</p>
                <p className='text-[24px] font-bold'>El lugar perfecto para una experiencia excepcional</p>
            </div>
            <div className='images-about flex items-center justify-center gap-8 mt-4'>
                <div className='flex gap-4'>
                    <img src="/images/chef.jpg" alt="" className='image-border' />
                    <img src="/images/comida.jpg" alt="" className='image-border' />
                </div>
                <div className='info-about w-[50%] text-justify'>
                    <p className='text-[14px]'>Déjate llevar por una experiencia gastronómica única en nuestro encantador restobar, donde la calidad y la creatividad se encuentran en cada plato y cada cóctel.</p>

                    <div className='flex flex-col gap-3 mt-3'>
                        <div className='flex items-center gap-3'>
                            <div className='border-circle'></div>
                            <div className='w-[80%]'>
                                <p className='font-bold text-[16px]'>Atención 24/7</p>
                                <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum eros sed velit imperdiet, sed viverra dolor placerat.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='border-circle'></div>
                            <div className='w-[80%]'>
                                <p className='font-bold text-[16px]'>Sazón inigualable</p>
                                <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum eros sed velit imperdiet, sed viverra dolor placerat.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
