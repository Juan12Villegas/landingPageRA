import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./infoContactStyle.css";

export default function InfoContact() {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const elementOffset = document.querySelector(".content-general-info").offsetTop;
            const distance = elementOffset - scrollTop;

            if (distance < window.innerHeight * 0.8) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 20 });
        }
    }, [isVisible]);

    return (
        <div className="content-contact">
            <div className="">
                <div className="w-auto text-center">
                    <p className="text-[16px] text-[#fc381c] font-semibold">Contáctanos</p>
                    <p className="text-[30px] font-bold leading-9">¡Tu destino culinario en Paita!</p>
                </div>
                <motion.div
                    className="content-general-info flex gap-6 justify-center text-black"
                    animate={controls}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="content-info-contact mt-12 p-4 font-bold"
                        whileHover={{ scale: 1.1 }}>
                        <div className="bg-[#fc381c] p-2 rounded-[50px] w-[40px]">
                            <img className="w-[40px]" src="https://img.icons8.com/?size=100&id=BcL4mksn90LQ&format=png&color=ffffff" alt="" />
                        </div>
                        <p className="mt-2">¿Nos buscas? ¡Aquí estamos!</p>
                        <p className="text-sm font-normal">8 de Julio mzB lt2 - PAITA</p>
                    </motion.div>
                    <motion.div
                        className="content-info-contact mt-4 p-4 font-bold"
                        whileHover={{ scale: 1.1 }}>
                        <div className="bg-[#fc381c] p-2 rounded-[50px] w-[40px]">
                            <img className="w-[40px]" src="https://img.icons8.com/?size=100&id=WCbYEPdsMFtZ&format=png&color=ffffff" alt="" />
                        </div>
                        <p className="mt-2">Nuestros horarios</p>
                        <p className="text-sm font-normal">Aquí no dormimos, ven a cualquier hora del día, cualquier día.</p>
                    </motion.div>
                    <motion.div
                        className="content-info-contact mt-8 p-4 font-bold"
                        whileHover={{ scale: 1.1 }}>
                        <div className="bg-[#fc381c] p-2 rounded-[50px] w-[40px]">
                            <img className="w-[40px]" src="https://img.icons8.com/?size=100&id=53439&format=png&color=ffffff" alt="" />
                        </div>
                        <p className="mt-2">¡Llámanos y ordena!</p>
                        <p className="text-sm font-normal">Vía llamada telefónica o WhatsApp al 9xxxxxxxx</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

/* 

import react from "react";
import { motion } from "framer-motion";
import styles from "./infoContactStyle.css"
export default function InfoContact() {
    return (
        <div className="my-[50px] px-[20px]">
            <div className="">
                <div className="pt-5 w-auto text-center">
                    <p className="text-[16px] text-[#fc381c] font-semibold">Contáctanos</p>
                    <p className="text-[30px] font-bold">¡Tu destino culinario en Paita!</p>
                </div>
                <motion.div
                    className="content-general-info flex gap-6 justify-center text-black"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="content-info-contact mt-12 p-4 font-bold"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="bg-[#fc381c] p-2 rounded-[50px] w-[40px]">
                            <img className="w-[40px]" src="https://img.icons8.com/?size=100&id=BcL4mksn90LQ&format=png&color=ffffff" alt="" />
                        </div>
                        <p className="mt-2">¿Nos buscas? ¡Aquí estamos!</p>
                        <p className="text-sm font-normal">8 de Julio mzB lt2 - PAITA</p>
                    </motion.div>
                    <motion.div
                        className="content-info-contact mt-4 p-4 font-bold"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="bg-[#fc381c] p-2 rounded-[50px] w-[40px]">
                            <img className="w-[40px]" src="https://img.icons8.com/?size=100&id=WCbYEPdsMFtZ&format=png&color=ffffff" alt="" />
                        </div>
                        <p className="mt-2">Nuestros horarios</p>
                        <p className="text-sm font-normal">Aquí no dormimos, ven a cualquier hora del día, cualquier día.</p>
                    </motion.div>
                    <motion.div
                        className="content-info-contact mt-8 p-4 font-bold"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="bg-[#fc381c] p-2 rounded-[50px] w-[40px]">
                            <img className="w-[40px]" src="https://img.icons8.com/?size=100&id=53439&format=png&color=ffffff" alt="" />
                        </div>
                        <p className="mt-2">¡Llámanos y ordena!</p>
                        <p className="text-sm font-normal">Vía llamada telefónica o WhatsApp al 9xxxxxxxx</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
} */