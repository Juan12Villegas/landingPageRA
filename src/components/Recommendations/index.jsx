import react from "react";
import Card from "../Card";
import styles from './recommendationsStyle.css';

export default function Recommendations() {
    return (
        <div className="content-recommendations overflow-x-hidden px-[100px] mt-[50px]">
            <div className="flex flex-col items-center mb-6">
                <p className="text-xl text-center font-bold">Recomendaciones del Chef</p>
                <div className="border-2 rounded-xl border-yellow-400 w-[150px]"></div>
            </div>
            <div className="content-cards overflow-x-auto whitespace-nowrap">
                <div className="flex gap-4">
                    <Card
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/caldo-gallina.jpg"
                        nameProduct="Caldo de Gallina"
                        infoProduct="con canchita y huevo"
                        priceProduct="s/ 15.00"
                        descriptionProduct="Ceviche de caballa"
                        nameTopping={["Normal"]}
                    />
                    <Card
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/ceviche.jpg"
                        nameProduct="Ceviche de Caballa"
                        infoProduct="con pescado fresco"
                        priceProduct="s/ 25.00"
                        descriptionProduct="Ceviche de caballa"
                        nameTopping={["Mediano"]}
                    />

                    <Card
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/lomo.jpg"
                        nameProduct="Lomo Saltado a la Pobre"
                        infoProduct="con carne de res y platanos fritos"
                        priceProduct="s/ 20.00"
                        descriptionProduct="Lomo Saltado a lo Pobre"
                        nameTopping={["Mediano", "Papas fritas", "Plátanos fritos"]}
                    />

                    <Card
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/anticuchos.jpg"
                        nameProduct="Anticuchos de Corazón"
                        infoProduct="100% corazon de res"
                        priceProduct="s/ 15.00"
                        descriptionProduct="Lomo Saltado a lo Pobre"
                        nameTopping={["3 anticuchos"]}
                    />

                    <Card
                        className="min-w-[250px] min-h-[150px]"
                        imageProduct="/images/ceviche.jpg"
                        nameProduct="Ceviche de Caballa"
                        infoProduct="con pescado fresco"
                        priceProduct="s/ 25.00"
                        descriptionProduct="Ceviche de caballa"
                        nameTopping={["Mediano", "Sin piel", "Con ají", "Extra cebolla", "+ porción chifles"]}
                    />
                </div>
            </div>
        </div>
    )
}