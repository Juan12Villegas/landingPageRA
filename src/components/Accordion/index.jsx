import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import styles from "./accordionStyle.css"

export default function App({ description }) {
    const defaultContent =
        "Precio a 2 soles";

    return (
        <Accordion className="px-0 h-auto">
            <AccordionItem key="1" aria-label="Accordion 1" className="bg-[#f2f6ff] text-[#254aaf] px-2 py-1 text-[14px] font-semibold flex flex-col justify-center rounded-lg" title="Detalles">
                <div className="content-details h-auto text-left flex items-center text-black font-normal bg-white p-2 rounded-md mt-1 text-[14px]">
                    <div className="flex-auto w-[50%] h-auto">
                        <p>{description}</p>
                    </div>
                </div>
            </AccordionItem>
        </Accordion>
    );
}
