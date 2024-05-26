import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import styles from './cardDishesStyle.css';
import Accordion from '../Accordion'

export default function App({ imageProduct, nameProduct, priceProduct, infoProduct, descriptionProduct, nameTopping, nameFile }) {
    const router = useRouter();

    const goToMenu = (fileLocation) => {
        router.push(`/realityAugmented/${fileLocation}`);
        console.log(fileLocation);
    };

    const handleNavItemSelect = (item) => {
        router.push("/")
        setSelectedNavItem(item);
    };


    return (
        <Card className="content-card w-[250px] justify-center">
            <CardBody className="hover:cursor-pointer transition delay-[50ms] duration-300 ease-in-out">
                <div className="justify-center relative h-[150px]">
                    <img className="image-recommendations"
                        src={imageProduct}
                    />
                    <button onClick={() => goToMenu(nameFile)}>
                        <img className="image-recommendation absolute top-[10px] left-[10px] w-[35px] hover:cursor-pointer hover:scale-110 transition delay-75" src="/images/icons/augmented-reality-white.svg" alt="" />
                    </button>
                </div>
            </CardBody>
            <CardHeader className="flex-col items-start py-2 px-1 h-[200px] w-[100%]">
                <p className="name-product font-semibold text-black">{nameProduct}</p>
                <p className="info-product font-semibold text-black">{infoProduct}</p>
                <div>
                    <h4 className="font-bold text-large ml-auto">{priceProduct}</h4>
                </div>

                <div className="line">
                </div>

                {/* Renderizando toppings si nameTopping es un array */}
                {Array.isArray(nameTopping) && nameTopping.length > 0 && (
                    <div className="flex flex-wrap gap-[4px] py-[2px]">
                        {nameTopping.map((topping, index) => (
                            <small key={index} className="topping-info">{topping}</small>
                        ))}
                    </div>
                )}

                <div className="line">
                </div>
                {/*                 <div className="w-[100%] h-[50px] pt-2">
                    <Accordion description={descriptionProduct} />
                </div> */}
            </CardHeader>
        </Card>
    );
}
