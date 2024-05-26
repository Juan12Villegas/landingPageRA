import react from "react";
import styles from "./infoContactStyle.css"
export default function InfoContact() {
    return (
        <div className="my-[50px] px-[20px]">
            <div className="">
                <div className="pt-5 w-auto text-center">
                    <p className='text-[16px] text-[#fc381c] font-semibold'>Contáctanos</p>
                    <p className='text-[30px] font-bold'>¡Tu destino culinario en Paita!</p>
                </div>
                <div className="content-general-info flex gap-6 justify-center text-black">
                    <div className="content-info-contact mt-12 p-4 font-bold">
                        <div className="bg-[#fc381c] p-2 rounded-[50px] w-[40px]">
                            <img className="w-[40px]" src="https://img.icons8.com/?size=100&id=BcL4mksn90LQ&format=png&color=ffffff" alt="" />
                        </div>
                        <p className="mt-2">¿Nos buscas? ¡Aquí estamos!</p>
                        <p className="text-sm font-normal">8 de Julio mzB lt2 - PAITA</p>
                    </div>
                    <div className="content-info-contact mt-4 p-4 font-bold">
                        <div className="bg-[#fc381c] p-2 rounded-[50px] w-[40px]">
                            <img className="w-[40px]" src="https://img.icons8.com/?size=100&id=WCbYEPdsMFtZ&format=png&color=ffffff" alt="" />
                        </div>
                        <p className="mt-2">Nuestros horarios</p>
                        <p className="text-sm font-normal">Aquí no dormimos, ven a cualquier hora del día, cualquier día.</p>
                    </div>
                    <div className="content-info-contact mt-8 p-4 font-bold">
                        <div className="bg-[#fc381c] p-2 rounded-[50px] w-[40px]">
                            <img className="w-[40px]" src="https://img.icons8.com/?size=100&id=53439&format=png&color=ffffff" alt="" />
                        </div>
                        <p className="mt-2">¡Llámanos y ordena!</p>
                        <p className="text-sm font-normal">Vía llamada telefónica o WhatsApp al 9xxxxxxxx</p>
                    </div>
                </div>
            </div>
        </div>
    )
}