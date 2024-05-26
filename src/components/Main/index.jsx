import react from "react";
import Recommendations from "../Recommendations";
import ContentCategories from "../ContentCategories"
import Title from "../Title";
import About from "../About"
import AboutAugmentedReality from "../AboutAugmentedReality"
import InfoContact from "../InfoContact";

export default function Main() {
    return (
        <div className="contenedor m-auto">
            <div id="title">
                <Title />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="about-augmented-reality">
                <AboutAugmentedReality />
            </div>
            <div id="info-contact">
                <InfoContact />
            </div>
        </div >
    )
}